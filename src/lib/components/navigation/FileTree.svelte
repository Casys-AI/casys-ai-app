<script>
    export let files = []; // La prop `files` est passée depuis la Sidebar
    import FileTree from "$lib/components/navigation/FileTree.svelte";

    export let currentPage = '';
</script>

<ul class="pl-4">
    {#each files as file}
        <li class="mb-2">
            {#if file.type === 'folder'}
                <details class="group">
                    <summary
                            class="font-semibold text-gray-700 dark:text-gray-300 cursor-pointer flex items-center transition-colors duration-200 hover:bg-blue-50 dark:hover:bg-gray-700 p-2 rounded-lg">
                        <svg class="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400 group-open:rotate-90 transition-transform duration-200"
                             fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
                        </svg>
                        {file.name}
                    </summary>
                    <FileTree files={file.children} currentPage={currentPage}/>
                </details>
            {:else}
                <a href="#"
                   class="block text-sm text-gray-600 dark:text-gray-400 p-2 rounded-lg transition-colors duration-200 hover:bg-blue-50 dark:hover:bg-gray-700"
                   class:font-semibold={currentPage === file.name}
                   class:bg-blue-100={currentPage === file.name}
                   class:text-blue-600={currentPage === file.name}>
                    {file.name}
                </a>
            {/if}
        </li>
    {/each}
</ul>

<style>
    /* Pour ajouter des transitions douces sur les détails */
    details summary::-webkit-details-marker {
        display: none;
    }
</style>