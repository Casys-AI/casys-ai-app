<!-- ChatBot.svelte -->
<script>
    import { Button, TextInput } from 'flowbite-svelte';
    import { onMount } from 'svelte';

    let messages = [];
    let userInput = '';
    let chatContainer;

    async function sendMessage() {
        if (!userInput.trim()) return;

        // Ajouter le message de l'utilisateur
        messages = [...messages, { text: userInput, isUser: true }];
        const question = userInput;
        userInput = '';

        // Simuler une réponse de l'IA (à remplacer par un appel API réel)
        setTimeout(async () => {
            // Ici, vous feriez un appel à votre API backend qui communique avec le modèle OpenAI
            // const response = await fetch('/api/chat', {
            //     method: 'POST',
            //     body: JSON.stringify({ question }),
            //     headers: { 'Content-Type': 'application/json' }
            // });
            // const data = await response.json();

            // Pour l'exemple, on simule une réponse
            const aiResponse = `Voici une réponse à votre question sur casys.ai : "${question}"`;
            messages = [...messages, { text: aiResponse, isUser: false }];
        }, 1000);
    }

    onMount(() => {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    });

    $: if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
</script>

<div class="bg-midnight-900 p-4 rounded-lg shadow-lg max-w-lg mx-auto">
    <div bind:this={chatContainer} class="h-96 overflow-y-auto mb-4 p-4 bg-midnight-800 rounded">
        {#each messages as message}
            <div class={`mb-2 ${message.isUser ? 'text-right' : 'text-left'}`}>
                <span class={`inline-block p-2 rounded-lg ${message.isUser ? 'bg-cassis-600 text-pearl-50' : 'bg-pearl-200 text-midnight-900'}`}>
                    {message.text}
                </span>
            </div>
        {/each}
    </div>
    <form on:submit|preventDefault={sendMessage} class="flex">
        <TextInput
                bind:value={userInput}
                placeholder="Posez votre question sur casys.ai..."
                class="flex-grow mr-2"
        />
        <Button type="submit" class="bg-cassis-600 hover:bg-cassis-700 text-pearl-50">Envoyer</Button>
    </form>
</div>