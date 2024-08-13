<!-- src/routes/login/UsernameForm.svelte -->
<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    let username = '';
    const dispatch = createEventDispatcher<{submit: string}>();

    function handleSubmit() {
        if (username.trim()) {
            dispatch('submit', username);
        }
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Nom d'utilisateur
        </label>
        <input
                bind:value={username}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Entrez votre nom d'utilisateur"
                required
        />
    </div>
    <div class="flex items-center justify-between">
        <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
        >
            Suivant
        </button>
    </div>
</form>