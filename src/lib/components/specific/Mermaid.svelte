<script>
    import { onMount } from 'svelte';
    import mermaid from 'mermaid';

    export let chart;

    let element;

    onMount(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.render('mermaid-svg', chart).then(({ svg }) => {
            element.innerHTML = svg;
        });
    });
</script>

<div bind:this={element}></div>

<style>
    div :global(svg) {
        max-width: 100%;
        height: auto;
    }
</style>