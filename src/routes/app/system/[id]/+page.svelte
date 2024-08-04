<script>
    import {Card, Button, Tabs, TabItem, Textarea} from 'flowbite-svelte';
    import Mermaid from '$lib/components/specific/Mermaid.svelte';
    import {onMount} from 'svelte';
    import {goto} from '$app/navigation';

    export let data; // Données du système passées par le serveur

    let system = data.system;
    let activeTab = 'description';
    let documentUpload;
    let relatedEntities = []; // Liste des entités liées, à remplir dynamiquement

    const diagramTypes = [
        {id: 'requirements', name: 'Exigences'},
        {id: 'functional', name: 'Fonctionnel'},
        {id: 'physical', name: 'Physique'},
        {id: 'behavioral', name: 'Comportemental'}
    ];

    // Faux graphe de connaissances
    let knowledgeGraph = {
        entities: {},
        relations: []
    };

    onMount(() => {
        // Simuler le chargement des entités liées
        relatedEntities = [
            {id: 'entity1', name: 'Entité 1', type: 'Composant'},
            {id: 'entity2', name: 'Entité 2', type: 'Exigence'},
            {id: 'entity3', name: 'Entité 3', type: 'Interface'},
        ];

        // Initialiser le faux graphe de connaissances
        initializeKnowledgeGraph();
    });

    function initializeKnowledgeGraph() {
        // Ajouter le système actuel au graphe
        addEntityToGraph(system.id, system.name, 'System');

        // Ajouter les entités liées au graphe
        relatedEntities.forEach(entity => {
            addEntityToGraph(entity.id, entity.name, entity.type);
            addRelationToGraph(system.id, entity.id, 'CONTAINS');
        });

        // Extraire et ajouter les entités des diagrammes
        diagramTypes.forEach(diagramType => {
            const entities = extractEntitiesFromDiagram(system.diagrams[diagramType.id]);
            entities.forEach(entity => {
                addEntityToGraph(entity.id, entity.name, diagramType.name);
                addRelationToGraph(system.id, entity.id, 'CONTAINS');
            });
        });
    }

    function addEntityToGraph(id, name, type) {
        knowledgeGraph.entities[id] = {id, name, type};
    }

    function addRelationToGraph(fromId, toId, type) {
        knowledgeGraph.relations.push({from: fromId, to: toId, type});
    }

    function extractEntitiesFromDiagram(diagramContent) {
        // Logique simplifiée pour extraire les entités d'un diagramme Mermaid
        const entityRegex = /\[([^\]]+)\]/g;
        const matches = diagramContent.matchAll(entityRegex);
        return Array.from(matches, m => ({id: m[1], name: m[1]}));
    }

    function handleDocumentUpload() {
        console.log('Document uploaded:', documentUpload.files[0]);
        // Simuler l'analyse du document et l'ajout de nouvelles entités
        const newEntity = {id: 'newEntity', name: 'Nouvelle Entité', type: 'Document'};
        relatedEntities = [...relatedEntities, newEntity];
        addEntityToGraph(newEntity.id, newEntity.name, newEntity.type);
        addRelationToGraph(system.id, newEntity.id, 'REFERENCES');
    }

    function updateDiagram(type, content) {
        console.log(`Updating ${type} diagram:`, content);
        system.diagrams[type] = content;
        // Mettre à jour le graphe de connaissances avec les nouvelles entités
        const newEntities = extractEntitiesFromDiagram(content);
        newEntities.forEach(entity => {
            if (!knowledgeGraph.entities[entity.id]) {
                addEntityToGraph(entity.id, entity.name, type);
                addRelationToGraph(system.id, entity.id, 'CONTAINS');
            }
        });
    }

    function navigateToEntity(entityId) {
        // Simuler la navigation vers une entité (système ou sous-système)
        console.log('Navigating to entity:', entityId);
        goto(`/app/system/${entityId}`);
    }

    function handleEntityClick(entityId) {
        // Gérer le clic sur une entité dans un diagramme
        console.log('Clicked on entity:', entityId);
        navigateToEntity(entityId);
    }
</script>

<div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">{system.name}</h1>

    <Tabs style="underline">
        <TabItem open title="Description">
            <Textarea bind:value={system.description} rows="4" placeholder="Description du système..."/>
            <Button class="mt-4" on:click={() => console.log('Save description')}>Sauvegarder</Button>
        </TabItem>

        <TabItem title="Documents">
            <input type="file" bind:this={documentUpload} on:change={handleDocumentUpload}/>
            <ul class="mt-4">
                {#each system.documents || [] as doc}
                    <li>{doc.name}</li>
                {/each}
            </ul>
        </TabItem>

        {#each diagramTypes as diagramType}
            <TabItem title={diagramType.name}>
                <Textarea bind:value={system.diagrams[diagramType.id]} rows="10"
                          placeholder={`Diagramme ${diagramType.name} en syntaxe Mermaid...`}
                          on:input={() => updateDiagram(diagramType.id, system.diagrams[diagramType.id])}/>
                <Mermaid chart={system.diagrams[diagramType.id]}/>
            </TabItem>
        {/each}

        <TabItem title="Graphe de relations">
            <div class="border p-4 rounded-lg">
                <Mermaid chart={generateKnowledgeGraphMermaid()}/>
            </div>
        </TabItem>
    </Tabs>

    <h2 class="text-2xl font-bold mt-8 mb-4">Entités liées</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each relatedEntities as entity}
            <Card>
                <h5 class="mb-2 text-xl font-bold tracking-tight">{entity.name}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{entity.type}</p>
                <Button on:click={() => navigateToEntity(entity.id)}>Voir détails</Button>
            </Card>
        {/each}
    </div>
</div>