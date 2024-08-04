<script>
    import { onMount } from 'svelte';
    import Mermaid from '$lib/components/specific/Mermaid.svelte';

    export let diagram;
    export let onEntityClick;

    let diagramContainer;

    onMount(() => {
        // Ajouter des écouteurs d'événements aux entités du diagramme
        diagramContainer.querySelectorAll('.node').forEach(node => {
            node.style.cursor = 'pointer';
            node.addEventListener('click', (e) => {
                const entityId = e.target.id;
                onEntityClick(entityId);
            });
        });
    });
</script>

<div bind:this={diagramContainer}>
    <Mermaid chart={diagram} />
</div>