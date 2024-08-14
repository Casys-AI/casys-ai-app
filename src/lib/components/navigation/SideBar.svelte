<script>
    import {systems, switchSystem} from '$lib/stores/systemStore';
    import {onMount} from 'svelte';
    import FileTree from "$lib/components/navigation/FileTree.svelte";
    import {goto} from "$app/navigation";

    let isOpen = false;
    let files = [];
    let localSystems = [];

    // Récupérer les systèmes depuis le store
    onMount(() => {
        const unsubscribe = systems.subscribe(value => {
            if (value && Array.isArray(value)) {
                localSystems = value.map(system => ({
                    ...system,
                    isOpen: false // Ajouter la propriété isOpen si elle n'existe pas
                }));

                // Mise à jour des fichiers pour FileTree
                files = localSystems.map(system => ({
                    name: system.name,
                    type: 'folder',
                    isOpen: false,
                    children: system.nodes.map(node => ({
                        name: node.name,
                        type: 'file'
                    }))
                }));
            } else {
                localSystems = []; // Assure que localSystems est au moins un tableau vide
                files = []; // Vide également la structure des fichiers si aucun système n'est disponible
            }
        });

        // Nettoyer la souscription lorsque le composant est démonté
        return () => {
            unsubscribe();
        };
    });

    function toggleFolder(system) {
        system.isOpen = !system.isOpen;
    }

    function navigateToSystem(id) {
        const system = localSystems.find(s => s.id === id);
        if (system) {
            switchSystem(system);
            goto(`/system/${id}`);
        }
    }
</script>

<!-- Sidebar -->
<aside class="fixed left-0 z-40 w-64 h-screen transition-transform transform -translate-x-full sm:translate-x-0 bg-pearl-100 dark:bg-midnight-800"
       class:translate-x-0={isOpen}>
    <div class="p-4">
        <!-- Sélecteur de projet -->
        <div class="mb-4">
            <select class="w-full px-4 py-2 text-sm text-gray-700 bg-white border rounded-lg dark:bg-midnight-700 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:border-cassis-300 dark:focus:ring-cassis-600">
                <option>Projet A</option>
                <option>Projet B</option>
                <option>Projet C</option>
            </select>
        </div>
        <!-- Barre de recherche -->
        <input
                class="w-full px-4 py-2 mb-4 text-sm text-gray-700 bg-white border rounded-lg dark:bg-midnight-700 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:border-cassis-300 dark:focus:ring-cassis-600"
                placeholder="Rechercher..."
                type="text">

        <!-- File Tree -->
        <FileTree {files}/>
    </div>
</aside>

<!-- Arborescence des systèmes -->
<ul class="space-y-2">
    {#each localSystems as system}
        <li>
            <div on:click={() => toggleFolder(system)}
                 class="flex items-center cursor-pointer text-gray-700 rounded-lg dark:text-gray-300 hover:bg-cassis-200 dark:hover:bg-cassis-700">
                <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3.5l-.646-.646A1.5 1.5 0 007.707 2.5H3.5A1.5 1.5 0 002 4v10.5A1.5 1.5 0 003.5 16h13a1.5 1.5 0 001.5-1.5V7.5a1.5 1.5 0 00-1.5-1.5h-7l-.5-.5z"></path>
                </svg>
                {system.name}
            </div>
            {#if system.isOpen}
                <ul class="ml-6 space-y-2">
                    {#each system.nodes as node}
                        <li>
                            <div on:click={() => navigateToSystem(system.id)}
                                 class="flex items-center text-gray-700 rounded-lg dark:text-gray-300 hover:bg-cassis-200 dark:hover:bg-cassis-700">
                                <svg class="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 3a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H4z"></path>
                                </svg>
                                {node.name}
                            </div>
                        </li>
                    {/each}
                </ul>
            {/if}
        </li>
    {/each}
</ul>
