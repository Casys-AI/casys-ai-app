<script>
    export let sector = null;
</script>

<div class="bg-white p-8 rounded-lg shadow-lg">
    {#if sector}
        <h3 class="text-2xl font-bold text-cassis-800 mb-4 font-mono">{sector.label}</h3>
        <p class="text-midnight-700 text-lg font-mono">
            {sector.description || "No description available."}
        </p>
    {:else}
        <p class="text-midnight-700 text-lg font-mono">Click on a node to see details.</p>
    {/if}
</div>

<style>
    div {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>