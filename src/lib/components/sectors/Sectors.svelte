<script>
    import { onMount } from "svelte";
    import { writable } from 'svelte/store';
    import Graph from './Graph.svelte';
    import SectorDescription from './SectorDescription.svelte';
    import { categories, sectors, links } from '$lib/components/sectors/data.js';

    const selectedSectorStore = writable(null);

    function selectSector(sector) {
        selectedSectorStore.set(sector);
    }

    onMount(() => {
        // Any additional setup can go here
    });
</script>

<section class="py-16 bg-pearl-100">
    <div class="max-w-screen-xl mx-auto px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-cassis-800 text-center mb-8 font-mono">Explore Sectors</h2>

        <div class="grid lg:grid-cols-3 gap-8">
            <div class="col-span-2 bg-white p-4 rounded-lg shadow-lg">
                <Graph
                        {categories}
                        {sectors}
                        {links}
                        on:selectSector={({detail}) => selectSector(detail)}
                />
            </div>

            <SectorDescription sector={$selectedSectorStore} />
        </div>
    </div>
</section>

<style>
    /* Any global styles can go here */
</style>