<!-- $lib/components/login/ApiKeyForm.svelte -->
<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type { ApiKeyInfo } from '$lib/auth';

    let apiKey = '';
    let error = '';
    const dispatch = createEventDispatcher<{submit: {apiKey: string, apiKeyInfo: ApiKeyInfo}}>();

    function verifyApiKey(key: string): boolean {
        // Accepte la clé exemple et le format général des clés API OpenAI
        return key === 'sk-1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP' ||
            /^sk-[a-zA-Z0-9]{48}$/.test(key);
    }

    function handleSubmit() {
        if (apiKey.trim()) {
            if (verifyApiKey(apiKey)) {
                const apiKeyInfo = extractKeyInfo(apiKey);
                dispatch('submit', { apiKey, apiKeyInfo });
            } else {
                error = "Clé API invalide. Veuillez vérifier et réessayer.";
            }
        }
    }

    function extractKeyInfo(key: string): ApiKeyInfo {
        return {
            prefix: key.substring(0, 7),
            suffix: key.substring(key.length - 4),
            maskedKey: `${key.substring(0, 7)}...${key.substring(key.length - 4)}`
        };
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="apiKey">
            Clé API OpenAI
        </label>
        <input
                bind:value={apiKey}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="apiKey"
                type="password"
                placeholder="Entrez votre clé API OpenAI"
                required
        />
    </div>
    {#if error}
        <p class="text-red-500 text-xs italic mb-4">{error}</p>
    {/if}
    <div class="flex items-center justify-between">
        <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
        >
            Se connecter
        </button>
    </div>
</form>