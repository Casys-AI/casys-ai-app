<script>
    import {
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
        Checkbox,
        TableSearch,
        Button, Modal, Textarea
    } from 'flowbite-svelte';
    import { Plus } from 'svelte-heros-v2';

    let showModal = false;
    let requirements = [
        { id: 1, name: 'REQ-001', description: 'Le système doit...', priority: 'High', status: 'Open' },
        { id: 2, name: 'REQ-002', description: 'L\'interface utilisateur doit...', priority: 'Medium', status: 'In Progress' },
    ];
    function handleSaveRequirement(event) {
        event.preventDefault(); // Prevent default behavior
        // ... your form submission logic
    }
    let editingRequirement = { id: null, name: '', description: '', priority: '', status: '' };

    function openModal(requirement = null) {
        editingRequirement = requirement ? { ...requirement } : { id: null, name: '', description: '', priority: '', status: '' };
        showModal = true;
    }

    function updateRequirement() {
        const index = requirements.findIndex(r => r.id === editingRequirement.id);
        requirements[index] = { ...editingRequirement };
        showModal = false;
    }

    function addRequirement() {
        editingRequirement.id = requirements.length + 1;
        requirements = [...requirements, editingRequirement];
        showModal = false;
    }

    function saveRequirement() {
        editingRequirement.id ? updateRequirement() : addRequirement();
    }
</script>

<div class="container mx-auto px-4">
    <h1 class="text-2xl font-bold mb-4">Gestion des exigences</h1>

    <Button color="blue" class="mb-4" on:click={() => openModal()}>
        <Plus class="mr-2 h-5 w-5" />
        Ajouter une exigence
    </Button>

    <Table hoverable={true}>
        <TableHead>
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>Nom</TableHeadCell>
            <TableHeadCell>Description</TableHeadCell>
            <TableHeadCell>Priorité</TableHeadCell>
            <TableHeadCell>Statut</TableHeadCell>
            <TableHeadCell>Actions</TableHeadCell>
        </TableHead>
        <TableBody tableBodyClass="divide-y">
            {#each requirements as requirement}
                <TableBodyRow>
                    <TableBodyCell>{requirement.id}</TableBodyCell>
                    <TableBodyCell>{requirement.name}</TableBodyCell>

                    <TableBodyCell>{requirement.description}</TableBodyCell>
                    <TableBodyCell>{requirement.priority}</TableBodyCell>
                    <TableBodyCell>{requirement.status}</TableBodyCell>
                    <TableBodyCell>
                        <Button size="xs" color="blue" on:click={() => openModal(requirement)}>Éditer</Button>
                    </TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>
</div>

<Modal bind:open={showModal} autoclose>
    <form class="flex flex-col space-y-6" on:submit={handleSaveRequirement}>
        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            {editingRequirement.id ? 'Modifier l\'exigence' : 'Ajouter une exigence'}
        </h3>
        <label class="space-y-2">
            <span>Nom</span>
            <input type="text" required bind:value={editingRequirement.name} />
        </label>
        <label class="space-y-2">
            <span>Description</span>
            <Textarea required bind:value={editingRequirement.description} />
        </label>
        <label class="space-y-2">
            <span>Priorité</span>
            <input type="text" required bind:value={editingRequirement.priority} />
        </label>
        <label class="space-y-2">
            <span>Statut</span>
            <input type="text" required bind:value={editingRequirement.status} />
        </label>
        <Button type="submit" class="w-full">Sauvegarder</Button>
    </form>
</Modal>