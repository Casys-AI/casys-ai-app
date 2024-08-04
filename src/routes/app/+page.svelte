<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { Textarea } from 'flowbite-svelte';
    import ForceGraph from '$lib/components/specific/ForceGraph.svelte';

    let systems = [
        {
            id: 1, name: "Système A", description: "Description du système A",
            nodes: [
                { id: "A1", name: "Module 1" },
                { id: "A2", name: "Module 2" },
                { id: "A3", name: "Module 3" },
                { id: "A4", name: "Module 4" }
            ],
            links: [
                { source: "A1", target: "A2" },
                { source: "A1", target: "A3" },
                { source: "A2", target: "A4" },
                { source: "A3", target: "A4" }
            ]
        },
        {
            id: 2, name: "Système B", description: "Description du système B",
            nodes: [
                { id: "B1", name: "Composant 1" },
                { id: "B2", name: "Composant 2" },
                { id: "B3", name: "Composant 3" },
                { id: "B4", name: "Composant 4" }
            ],
            links: [
                { source: "B1", target: "B2" },
                { source: "B1", target: "B3" },
                { source: "B2", target: "B4" }
            ]
        },
        {
            id: 3, name: "Système C", description: "Description du système C",
            nodes: [
                { id: "C1", name: "Processus 1" },
                { id: "C2", name: "Processus 2" },
                { id: "C3", name: "Processus 3" },
                { id: "C4", name: "Processus 4" }
            ],
            links: [
                { source: "C1", target: "C2" },
                { source: "C1", target: "C3" },
                { source: "C2", target: "C4" },
                { source: "C3", target: "C4" }
            ]
        },
    ];

    let newSystemDescription = "";
    let fileInput;

    // Données pour la vue globale
    let globalSystemData = {
        nodes: systems.map(s => ({ id: s.id, name: s.name })),
        links: [
            { source: 1, target: 2, name: "Interface AB" },
            { source: 1, target: 3, name: "Interface AC" },
            { source: 2, target: 3, name: "Interface BC" }
        ]
    };

    function navigateToSystem(id) {
        goto(`/app/system/${id}`);
    }

    function handleNodeClick(systemId, nodeId) {
        goto(`/app/system/${systemId}/node/${nodeId}`);
    }

    function createNewSystem() {
        console.log("Nouvelle description:", newSystemDescription);
        console.log("Fichier uploadé:", fileInput?.files[0]);
        // Logique pour créer un nouveau système
        newSystemDescription = "";
        if (fileInput) fileInput.value = "";
    }
</script>

<svelte:head>
    <title>Knowledge Base - RequireTrace</title>
</svelte:head>

<div class="flex">


    <!-- Contenu principal -->
    <div class="flex-1 p-8">
        <h1 class="text-3xl font-bold mb-6">Knowledge Base</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {#each systems as system}
                <div class="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                     on:click={() => navigateToSystem(system.id)}>
                    <div class="p-6">
                        <h2 class="text-2xl font-bold mb-2">{system.name}</h2>
                        <p class="mb-4">{system.description}</p>
                        <div class="h-80 mb-4">
                            <ForceGraph
                                    data={system}
                                    onNodeClick={(node) => handleNodeClick(system.id, node.id)}
                            />
                        </div>
                    </div>
                </div>
            {/each}

            <!-- Carte pour créer un nouveau système -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <div class="p-6">
                    <h2 class="text-2xl font-bold mb-2">Nouveau Système</h2>
                    <Textarea
                            bind:value={newSystemDescription}
                            placeholder="Description du nouveau système..."
                            rows="4"
                            class="mb-4"
                    />
                    <input type="file" bind:this={fileInput} class="mb-4"/>
                    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            on:click={createNewSystem}>
                        Créer un nouveau système
                    </button>
                </div>
            </div>
        </div>

        <!-- Vue globale des systèmes -->
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
</div>