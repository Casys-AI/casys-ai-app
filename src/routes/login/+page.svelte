<!-- src/routes/login/+page.svelte -->
<script lang="ts">

    import { auth } from '$lib/auth';
    import { goto } from '$app/navigation';
    import UsernameForm from "$lib/components/login/UsernameForm.svelte";
    import ApiKeyForm from "$lib/components/login/ApiKeyForm.svelte";

    let step = 1;
    let error = '';

    function handleUsernameSubmit(event: CustomEvent<string>) {
        const username = event.detail;
        auth.setUsername(username);
        step = 2;
    }

    async function handleApiKeySubmit(event: CustomEvent<{apiKey: string, apiKeyInfo: ApiKeyInfo}>) {
        const { apiKey, apiKeyInfo } = event.detail;
        try {
            const username = auth.getUsername();
            if (username) {
                await auth.login(username, apiKey, apiKeyInfo);
                goto('/');
            } else {
                error = "Erreur : nom d'utilisateur manquant.";
            }
        } catch (err) {
            error = "Erreur lors de la connexion. Veuillez réessayer.";
            console.error(err);
        }
    }
</script>

<div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 class="text-2xl mb-6 text-center font-bold">Connexion à Casys.ai</h2>

            {#if step === 1}
                <UsernameForm on:submit={handleUsernameSubmit} />
            {:else if step === 2}
                <ApiKeyForm on:submit={handleApiKeySubmit} />
            {/if}

            {#if error}
                <p class="text-red-500 text-xs italic mt-4">{error}</p>
            {/if}
        </div>
    </div>
</div>