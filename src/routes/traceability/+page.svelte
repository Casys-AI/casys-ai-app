<script>
    import { Tabs, TabItem } from 'flowbite-svelte';
    import Mermaid from '$lib/components/specific/Mermaid.svelte';
    import { browser } from '$app/environment';

    let requirements = [
        {id: 1, name: 'REQ-001', description: 'Le système doit...', links: [2, 3]},
        {id: 2, name: 'REQ-002', description: 'L\'interface utilisateur doit...', links: [3]},
        {id: 3, name: 'REQ-003', description: 'La performance doit...', links: []},
    ];

    function generateMermaidDiagram() {
        let diagram = 'graph TD\n';
        requirements.forEach(req => {
            req.links.forEach(linkId => {
                diagram += `  ${req.id}[${req.name}] --> ${linkId}[REQ-00${linkId}]\n`;
            });
        });
        return diagram;
    }

    $: mermaidDiagram = generateMermaidDiagram();
    let activeTab = 'diagram';

    function handleTabChange(event) {
        activeTab = event.detail;
    }
</script>

<svelte:head>
    <title>Traçabilité des Exigences - RequireTrace</title>
</svelte:head>

<div class="container mx-auto px-4">
    <h1 class="text-2xl font-bold mb-4">Traçabilité des exigences</h1>

    {#if browser}
        <Tabs tabStyle="underline">
            <TabItem>
                <span slot="title">Diagramme</span>
                <div class="mt-4">
                    <Mermaid chart={mermaidDiagram}/>
                </div>
            </TabItem>
            <TabItem>
                <span slot="title">Matrice</span>
                <div class="mt-4 overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th class="px-6 py-3">Exigence</th>
                            {#each requirements as req}
                                <th class="px-6 py-3">{req.name}</th>
                            {/each}
                        </tr>
                        </thead>
                        <tbody>
                        {#each requirements as req}
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {req.name}
                                </td>
                                {#each requirements as innerReq}
                                    <td class="px-6 py-4">
                                        {req.links.includes(innerReq.id) ? '✓' : ''}
                                    </td>
                                {/each}
                            </tr>
                        {/each}
                        </tbody>
                    </table>
                </div>
            </TabItem>
        </Tabs>
    {:else}
        <!-- Version simplifiée pour le rendu SSR -->
        <div class="mt-4">
            <h2 class="text-xl font-bold">Diagramme de traçabilité</h2>
            <p>Le diagramme de traçabilité sera chargé côté client.</p>
        </div>
        <div class="mt-4">
            <h2 class="text-xl font-bold">Matrice de traçabilité</h2>
            <p>La matrice de traçabilité sera chargée côté client.</p>
        </div>
    {/if}
</div>