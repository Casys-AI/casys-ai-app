<!-- src/routes/dashboard/+page.svelte -->
<script lang="ts">
    import { auth } from '$lib/auth';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    let isAuthenticated = false;

    onMount(() => {
        const unsubscribe = auth.subscribe(value => {
            isAuthenticated = !!value;
            if (!isAuthenticated) {
                goto('/login');
            }
        });

        return unsubscribe;
    });

    function handleLogout() {
        auth.logout();
        goto('/login');
    }
</script>

{#if isAuthenticated}
    <div class="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h1 class="text-3xl font-bold mb-6">Tableau de bord</h1>

        <p class="mb-4">Bienvenue ! Vous êtes connecté avec votre clé API OpenAI.</p>

        <button
                on:click={handleLogout}
                class="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
            Se déconnecter
        </button>
    </div>
{/if}