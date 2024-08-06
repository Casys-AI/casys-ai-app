<script>
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    let files = [
        {
            name: 'Dossier 1', type: 'folder', children: [
                {name: 'Fichier 1.1', type: 'file'},
                {name: 'Fichier 1.2', type: 'file'}
            ]
        },
        {
            name: 'Dossier 2', type: 'folder', children: [
                {name: 'Fichier 2.1', type: 'file'}
            ]
        },
        {name: 'Fichier 3', type: 'file'}
    ];

    function toggleFolder(folder) {
        folder.isOpen = !folder.isOpen;
    }

    function selectFile(file) {
        dispatch('fileSelect', file);
    }
</script>

<ul class="file-tree">
    {#each files as item}
        <li>
            {#if item.type === 'folder'}
                <span on:click={() => toggleFolder(item)}>
                    {item.isOpen ? '📂' : '📁'} {item.name}
                </span>
                {#if item.isOpen}
                    <svelte:self files={item.children}/>
                {/if}
            {:else}
                <span on:click={() => selectFile(item)}>
                    📄 {item.name}
                </span>
            {/if}
        </li>
    {/each}
</ul>

<style>
    .file-tree {
        list-style-type: none;
        padding-left: 20px;
    }

    span {
        cursor: pointer;
    }
</style>