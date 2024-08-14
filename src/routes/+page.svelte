<script>
    import {onMount} from "svelte";
    import {goto} from '$app/navigation';
    import {Textarea, Button, Range} from 'flowbite-svelte';
    import ForceGraph from '$lib/components/specific/ForceGraph.svelte';
    import {currentSystem, systems, switchSystem, addSystem} from '$lib/stores/systemStore.js';
    import {
        generateMermaidDiagram,
        updateMermaidDiagram,
        simulateGenerateMermaidDiagram
    } from '$lib/services/apiService.js';

    let localSystems = [];
    let newSystemDescription = "";
    let fileInput;
    let fileContent = "";
    let sliderValue = 1;
    let selectedCategory = "All";

    const categories = ["All", "Contraintes", "Structure", "Comportement", "Paramètres"];

    // Filtrer les systèmes pour l'affichage détaillé
    $: filteredSystems = localSystems.filter(system =>
        system.id <= sliderValue &&
        (selectedCategory === "All" || system.category === selectedCategory)
    );

    onMount(() => {
        const unsubscribe = systems.subscribe(value => {
            localSystems = value;
            sliderValue = value.length;
            console.log("Loaded systems:", localSystems);
        });

        return unsubscribe;
    });

    function navigateToSystem(id) {
        const system = localSystems.find(s => s.id === id);
        if (system) {
            switchSystem(system);
            goto(`/system/${id}`);
        }
    }

    async function handleFileUpload(event) {
        const file = event.target.files?.[0];
        if (file) {
            fileContent = await file.text();
        }
    }

    async function createNewSystem() {
        const file = fileInput.files?.[0];

        try {
            let mermaidDiagram;
            if (import.meta.env.MODE === 'development') {
                mermaidDiagram = await simulateGenerateMermaidDiagram(file, newSystemDescription);
            } else {
                mermaidDiagram = await generateMermaidDiagram(file, newSystemDescription);
            }

            addSystem(`Nouveau Système ${localSystems.length + 1}`, newSystemDescription, mermaidDiagram);
            newSystemDescription = "";
            fileContent = "";
            if (fileInput) fileInput.value = "";
            sliderValue = localSystems.length + 1;
        } catch (err) {
            console.error('Error creating new system:', err);
        }
    }

    function handleCategoryChange(category) {
        selectedCategory = category;
    }

    function handleSliderChange(event) {
        sliderValue = parseInt(event.target.value);
    }
</script>

<div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Knowledge Base</h1>

    <div class="flex flex-wrap items-center justify-between mb-6">
        <div class="flex flex-wrap items-center gap-2 mb-4 md:mb-0">
            {#each categories as category}
                <Button
                        pill
                        size="xl"
                        color={selectedCategory === category ? "blue" : "light"}
                        on:click={() => handleCategoryChange(category)}
                >
                    {category}
                </Button>
            {/each}
        </div>
        <div class="w-full md:w-64">
            <Range bind:value={sliderValue} max={localSystems.length} min={1} on:change={handleSliderChange} step={1}/>
        </div>
    </div>

    {#if filteredSystems.length === 0}
        <p class="text-center text-gray-500 my-8">Aucun système trouvé pour les critères sélectionnés.</p>
    {:else}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {#each filteredSystems as system}
                <div class="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                     on:click={() => navigateToSystem(system.id)}
                     on:keydown={(event) => {
                         if (event.key === 'Enter' || event.key === ' ') navigateToSystem(system.id);
                     }}
                     role="button"
                     tabindex="0">
                    <div class="p-6">
                        <h2 class="text-2xl font-bold mb-2">{system.name}</h2>
                        <p class="mb-4">{system.description}</p>
                        <div class="h-80 mb-4">
                            <ForceGraph data={system} width={300} height={300}/>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    {/if}

    <div class="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="p-6">
            <h2 class="text-2xl font-bold mb-2">Nouveau Système</h2>
            <Textarea
                    bind:value={newSystemDescription}
                    class="mb-4"
                    placeholder="Description du nouveau système..."
                    rows="4"
            />
            <input bind:this={fileInput} class="mb-4" on:change={handleFileUpload} type="file"/>
            <Button color="blue" on:click={createNewSystem}>
                Créer un nouveau système
            </Button>
        </div>
    </div>
</div>
