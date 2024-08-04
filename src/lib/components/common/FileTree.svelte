<script>
    import {createEventDispatcher, onDestroy, onMount} from 'svelte';

    const dispatch = createEventDispatcher();

    let folders = [

        {

            name: 'Folder 1',

            files: [{name: 'File 1-1', id: 'file-1-1'}, {name: 'File 1-2', id: 'file-1-2'}, {

                name: 'File 1-3',

                id: 'file-1-3'

            }],

            isOpen: false

        },

        {

            name: 'Folder 2',

            files: [{name: 'File 2-1', id: 'file-2-1'}, {name: 'File 2-2', id: 'file-2-2'}],

            isOpen: false

        }

    ];

    let contextMenu = {
        visible: false,
        x: 0,
        y: 0,
    };

    // Options pour le menu contextuel
    const fileTypeOptions = [
        {label: 'Markdown', value: '.md'},
        {label: 'Texte', value: '.txt'},
        {label: 'Svelte', value: '.svelte'},
    ];

    function toggleFolder(index) {
        folders[index].isOpen = !folders[index].isOpen;
    }

    function selectFile(file) {
        dispatch('fileClick', file);
    }

    function showContextMenu(event, index) {
        event.preventDefault();
        contextMenu.visible = true;
        contextMenu.x = event.clientX;
        contextMenu.y = event.clientY;
    }

    function hideContextMenu() {
        contextMenu.visible = false;
    }

    function createFile(fileType) {
        // Logique pour créer le fichier du type choisi
        console.log(`Créer un fichier ${fileType}`);
        hideContextMenu();
    }

    onMount(() => {
        document.addEventListener('click', hideContextMenu);
    });

    onDestroy(() => {
        document.removeEventListener('click', hideContextMenu);
    });
</script>

<div class="sidebar">
    {#each folders as folder, index}
        <div on:contextmenu={(e) => showContextMenu(e, index)}>
            <div class="folder" on:click={() => toggleFolder(index)}>
                <svg>...</svg> {folder.name}
            </div>
            {#if folder.isOpen}
                <ul>
                    {#each folder.files as file}
                        <li class="file" on:click={() => selectFile(file)}>
                            {file.name}
                        </li>
                    {/each}
                </ul>
            {/if}
        </div>
    {/each}

    {#if contextMenu.visible}
        <div
                class="absolute z-10 bg-white p-2 rounded shadow"
                style="left: {contextMenu.x}px; top: {contextMenu.y}px;"
        >
            {#each fileTypeOptions as option}
                <button
                        class="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                        on:click={() => createFile(option.value)}
                >
                    {option.label}
                </button>
            {/each}
        </div>
    {/if}
</div>
