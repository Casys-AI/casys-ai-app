<!-- src/routes/settings/ApiKeySettings.svelte -->
<script lang="ts">
    import { auth } from '$lib/auth';
    import { onMount } from 'svelte';

    let apiKeyInfo;

    onMount(() => {
        const unsubscribe = auth.subscribe(state => {
            apiKeyInfo = state.apiKeyInfo;
        });

        return unsubscribe;
    });
</script>

<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h2 class="text-xl font-bold mb-4">Informations de la clé API</h2>
    {#if apiKeyInfo}
        <p>Clé API : {apiKeyInfo.maskedKey}</p>
        <p>Préfixe : {apiKeyInfo.prefix}</p>
        <p>Suffixe : {apiKeyInfo.suffix}</p>
    {:else}
        <p>Aucune clé API enregistrée.</p>
    {/if}
</div>