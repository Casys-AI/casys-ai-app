<script>
    import {onMount, afterUpdate} from 'svelte';
    import {Button} from 'flowbite-svelte';
    import {fade, fly} from 'svelte/transition';

    let messages = [];
    let userInput = '';
    let chatContainer;
    let showChat = false;
    let showNotification = true;
    let isTyping = false;

    const presetQuestions = [
        "How does casys.ai handle multi-scale systems?",
        "What are the applications of casys.ai in urban planning?",
        "Can you explain casys.ai's approach to optimizing complex systems?",
        "How does casys.ai's AI adapt to dynamic changes in systems?"
    ];

    let currentQuestionIndex = 0;

    async function sendMessage(question = userInput) {
        if (!question.trim()) return;

        messages = [...messages, {text: question, isUser: true}];
        userInput = '';
        isTyping = true;

        setTimeout(() => {
            const aiResponse = `Here is a response to your question about casys.ai: "${question}"`;
            messages = [...messages, {text: aiResponse, isUser: false}];
            isTyping = false;

            currentQuestionIndex = (currentQuestionIndex + 1) % presetQuestions.length;
        }, 2000);
    }

    onMount(() => {
        setTimeout(() => {
            showNotification = false;
            showChat = true;
        }, 3000);
    });

    afterUpdate(() => {
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    });

    function toggleChat() {
        showChat = !showChat;
        if (showChat) {
            showNotification = false;
        }
    }

    function handleKeydown(event) {
        if (event.key === 'Enter') {
            toggleChat();
        }
    }
</script>

<style>
    .chat-window {
        max-width: 350px;
        min-width: 300px;
        height: 450px;
    }

    .notification {
        background-color: #6E1187;
        color: #FBFBFB;
    }

    .chat-button {
        cursor: pointer;
        width: 50px;
        height: 50px;
        transition: transform 0.3s ease;
        background: none;
        border: none;
        padding: 0;
    }

    .chat-button:hover {
        transform: scale(1.1);
    }

    .message-bubble {
        max-width: 80%;
        word-wrap: break-word;
    }
</style>

<section class="fixed bottom-4 right-4 z-50">
    {#if showNotification}
        <div class="notification p-4 rounded-lg shadow-lg mb-4" transition:fade>
            <p>Hi! Need help understanding casys.ai? Chat with our AI assistant.</p>
            <Button size="sm" class="bg-cassis-600 hover:bg-cassis-700 text-pearl-50 mt-2" on:click={toggleChat}>
                Start Chat
            </Button>
        </div>
    {/if}

    {#if !showChat}
        <button
                class="chat-button"
                on:click={toggleChat}
                on:keydown={handleKeydown}
                aria-label="Open chat"
        >
            <img src="/images/logo.svg" alt="Chat icon" width="50" height="50"/>
        </button>
    {/if}

    {#if showChat}
        <div class="bg-pearl-100 p-4 rounded-lg shadow-lg chat-window" transition:fly="{{ y: 50, duration: 300 }}">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-extrabold text-midnight-900 font-mono">Chat with casys.ai</h2>
                <Button size="xs" class="bg-cassis-600 hover:bg-cassis-700 text-pearl-50" on:click={toggleChat}>Close
                </Button>
            </div>

            <div bind:this={chatContainer} class="h-64 overflow-y-auto mb-4 p-4 bg-pearl-50 rounded shadow-inner">
                {#each messages as message}
                    <div class={`mb-2 ${message.isUser ? 'text-right' : 'text-left'}`} transition:fade>
                        <span class={`inline-block p-2 rounded-lg message-bubble ${message.isUser ? 'bg-cassis-600 text-pearl-50' : 'bg-pearl-100 text-midnight-900'}`}>
                            {message.text}
                        </span>
                    </div>
                {/each}
                {#if isTyping}
                    <div class="text-left" transition:fade>
                        <span class="inline-block p-2 rounded-lg bg-pearl-100 text-midnight-900">
                            Typing...
                        </span>
                    </div>
                {/if}
            </div>

            <form on:submit|preventDefault={() => sendMessage()} class="flex mb-4">
                <input
                        bind:value={userInput}
                        placeholder="Ask about casys.ai..."
                        class="flex-grow mr-2 p-2 rounded bg-pearl-50 text-midnight-900 border border-cassis-500 focus:outline-none focus:ring-2 focus:ring-cassis-500"
                />
                <Button type="submit" class="bg-cassis-600 hover:bg-cassis-700 text-pearl-50">Send</Button>
            </form>

            <div class="flex flex-wrap gap-2">
                <Button
                        size="sm"
                        class="bg-cassis-600 hover:bg-cassis-700 text-pearl-50 transition-all duration-300 ease-in-out transform hover:scale-105"
                        on:click={() => sendMessage(presetQuestions[currentQuestionIndex])}
                >
                    {presetQuestions[currentQuestionIndex]}
                </Button>
            </div>
        </div>
    {/if}
</section>