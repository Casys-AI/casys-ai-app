<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { Breadcrumb, BreadcrumbItem, Button } from 'flowbite-svelte';
    import Mermaid from '$lib/components/specific/Mermaid.svelte';
    import { currentSystem, systems } from '$lib/stores/systemStore.js';

    let systemData;
    let mermaidSyntax = "";

    $: {
        if ($currentSystem && $currentSystem.id === parseInt($page.params.id)) {
            systemData = $currentSystem;
        }
    }

    onMount(() => {
        if (systemData) {
            mermaidSyntax = systemData.mermaidSyntax || "graph TD\nA-->B\nA-->C\nB-->D\nC-->F";
        }
    });

    function updateDiagram() {
        currentSystem.update(sys => ({ ...sys, mermaidSyntax: mermaidSyntax }));
    }

    function nextStep() {
        console.log("Passage à l'étape suivante");
    }
</script>

<div class="container mx-auto px-4 py-8 h-screen flex flex-col">
    <div class="flex-grow flex flex-col items-center">
        <div class="text-center mb-4">
            <h1 class="text-3xl font-bold mb-2">{systemData ? systemData.name : 'Chargement...'}</h1>
            <p class="text-gray-600">{systemData ? systemData.description : 'Chargement de la description...'}</p>
        </div>

        <Breadcrumb class="mb-4 w-full">
            <BreadcrumbItem href="/app">Knowledge Base</BreadcrumbItem>
            <BreadcrumbItem href="/app/system/{$page.params.id}">Système {$page.params.id}</BreadcrumbItem>
        </Breadcrumb>

        <div class="flex w-full mb-4 space-x-4">
            <div class="flex-1 border rounded-lg p-4">
                <h2 class="text-xl font-bold mb-2">Syntaxe Mermaid</h2>
                <textarea
                        bind:value={mermaidSyntax}
                        on:input={updateDiagram}
                        class="w-full h-64 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                ></textarea>
            </div>
            <div class="flex-1 border rounded-lg p-4">
                <h2 class="text-xl font-bold mb-2">Diagramme Mermaid</h2>
                <div class="w-full h-64">
                    <Mermaid chart={mermaidSyntax}/>
                </div>
            </div>
        </div>

        <div class="flex justify-end w-full">
            <Button color="blue" on:click={nextStep}>Valider et passer à l'étape suivante</Button>
        </div>
    </div>
</div>
