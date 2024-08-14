<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';
    import { Textarea, Button } from 'flowbite-svelte';
    import ForceGraph from '$lib/components/specific/ForceGraph.svelte';
    import { currentSystem, systems, switchSystem } from '$lib/stores/systemStore.js';
    import { generateMermaidDiagram, updateMermaidDiagram, simulateGenerateMermaidDiagram } from '$lib/services/apiService.js';

    let localSystems = [];
    let newSystemDescription = "";
    let fileInput;
    let fileContent = "";
    let globalSystemData = { nodes: [], links: [] };

    $: {
        globalSystemData = {
            nodes: localSystems.map(s => ({ id: s.id, name: s.name })),
            links: []
        };
    }

    onMount(() => {
        systems.subscribe(value => {
            localSystems = value;
        });
    });

    function navigateToSystem(id) {
        const system = localSystems.find(s => s.id === id);
        if (system) {
            switchSystem(system);
            goto(`/system/${id}`);
        }
    }

    async function handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
            fileContent = await file.text();
        }
    }

    async function createNewSystem() {
        const newId = localSystems.length + 1;
        const file = fileInput.files[0];

        try {
            let mermaidDiagram;
            if (import.meta.env.MODE === 'development') {
                mermaidDiagram = await simulateGenerateMermaidDiagram(file, newSystemDescription);
            } else {
                mermaidDiagram = await generateMermaidDiagram(file, newSystemDescription);
            }

            const newSystem = {
                id: newId,
                name: `Nouveau Système ${newId}`,
                description: newSystemDescription,
                mermaidSyntax: mermaidDiagram,
                nodes: [],
                links: []
            };

            systems.update(sys => [...sys, newSystem]);
            switchSystem(newSystem);
            newSystemDescription = "";
            fileContent = "";
            if (fileInput) fileInput.value = "";
            goto(`/system/${newId}`);
        } catch (err) {
            console.error('Error creating new system:', err);
            // Handle the error (e.g., display a message to the user)
        }
    }

    function handleKeyDown(event, system) {
        if (event.key === 'Enter' || event.key === ' ') {
            navigateToSystem(system.id);
        }
    }
</script>

<svelte:head>
    <title>Knowledge Base - Casys</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Knowledge Base</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {#each localSystems as system}
            <div class="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                 on:click={() => navigateToSystem(system.id)}
                 on:keydown={(event) => handleKeyDown(event, system)}
                 role="button"
                 tabindex="0">
                <div class="p-6">
                    <h2 class="text-2xl font-bold mb-2">{system.name}</h2>
                    <p class="mb-4">{system.description}</p>
                    <div class="h-80 mb-4">
                        <ForceGraph data={system} />
                    </div>
                </div>
            </div>
        {/each}

        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="p-6">
                <h2 class="text-2xl font-bold mb-2">Nouveau Système</h2>
                <Textarea
                        bind:value={newSystemDescription}
                        placeholder="Description du nouveau système..."
                        rows="4"
                        class="mb-4"
                />
                <input type="file" bind:this={fileInput} on:change={handleFileUpload} class="mb-4"/>
                <Button color="blue" on:click={createNewSystem}>
                    Créer un nouveau système
                </Button>
            </div>
        </div>
    </div>

    <div class="mt-12 bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-4">Vue globale des systèmes</h2>
        <div class="h-96">
            <ForceGraph
                    data={globalSystemData}
                    onNodeClick={(node) => navigateToSystem(node.id)}
            />
        </div>
    </div>
</div>