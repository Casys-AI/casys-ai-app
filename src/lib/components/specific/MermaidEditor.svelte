<script>
    import { onMount } from "svelte";
    import { marked } from "marked";
    import mermaid from "mermaid";

    let markdown = "";
    let diagram = "";
    let error = "";

    function updateDiagram() {
        try {
            diagram = marked(markdown);
            mermaid.contentLoaded();
            error = "";
        } catch (e) {
            error = "Invalid Mermaid syntax";
        }
    }

    async function loadDiagram(id) {
        // Fetch diagram from API
        const response = await fetch(`/api/diagrams/${id}`);
        const data = await response.json();
        markdown = data.content;
        updateDiagram();
    }

    async function saveDiagram(id) {
        // Save diagram to API
        const response = await fetch(`/api/diagrams/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: markdown }),
        });
        if (response.ok) {
            alert("Diagram saved successfully");
        } else {
            alert("Failed to save diagram");
        }
    }

    onMount(() => {
        mermaid.initialize({ startOnLoad: true });
        loadDiagram($$props.id); // Load diagram when component is mounted
    });

    // Watch for changes to the id prop and reload the diagram
    $: if ($$props.id) {
        loadDiagram($$props.id);
    }
</script>

<style>
    .editor {
        width: 50%;
        height: 100vh;
        padding: 1rem;
        border-right: 1px solid #ccc;
        overflow-y: auto;
    }

    .preview {
        width: 50%;
        height: 100vh;
        padding: 1rem;
        overflow-y: auto;
    }
</style>

<div class="flex">
    <div class="editor">
        <h2>Markdown Editor</h2>
        <textarea
                bind:value={markdown}
                on:input={updateDiagram}
                rows="30"
                class="w-full h-full p-2 border"
        ></textarea>
        <button on:click={() => saveDiagram($$props.id)} class="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Save Diagram</button>
        {#if error}
            <p class="text-red-500 mt-2">{error}</p>
        {/if}
    </div>
    <div class="preview">
        <h2>Mermaid Preview</h2>
        {@html diagram}
    </div>
</div>
