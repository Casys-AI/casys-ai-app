<script>

    import { onMount } from 'svelte';
    import NavBar from "$lib/components/navigation/NavBar.svelte";
    import "../app.css"
    import Drawer from "$lib/components/navigation/Drawer.svelte";

</script>

<div class="antialiased bg-gray-50 dark:bg-gray-900">
    <!-- Barre de navigation -->
    <NavBar />

    <div class="flex">
        <!-- Barre latérale (Drawer) -->
        <Drawer />

        <!-- Contenu principal -->
        <main class="flex-1 p-4 md:ml-64 lg:mr-16 min-h-full pt-20">
            <slot /> <!-- Affiche le contenu spécifique à la page ici -->
        </main>
    </div>
</div>