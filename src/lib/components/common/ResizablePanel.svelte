<script>
    import { createEventDispatcher } from 'svelte';

    export let panel;
    const dispatch = createEventDispatcher();

    let resizing = false;
    let startX, startY, startWidth, startHeight;

    function startResize(e) {
        resizing = true;
        startX = e.clientX;
        startY = e.clientY;
        startWidth = e.target.parentElement.offsetWidth;
        startHeight = e.target.parentElement.offsetHeight;

        window.addEventListener('mousemove', resize);
        window.addEventListener('mouseup', stopResize);
    }

    function resize(e) {
        if (!resizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        panel.width = startWidth + dx;
        panel.height = startHeight + dy;
    }

    function stopResize() {
        resizing = false;
        window.removeEventListener('mousemove', resize);
        window.removeEventListener('mouseup', stopResize);
    }
</script>

<div class="relative bg-white rounded shadow {panel.isExpanded ? 'fixed inset-0 z-50' : ''}
             {panel.isDetached ? 'fixed z-50' : ''}" style="width: {panel.width || '400px'}; height: {panel.height || '300px'};">

    <div class="flex justify-between items-center p-2 bg-gray-100 rounded-t">
        <h2>{panel.title}</h2>
        <div>
            <button on:click={() => dispatch('expand')}>{panel.isExpanded ? '🗗' : '🗖'}</button>
            <button on:click={() => dispatch('detach')}>{panel.isDetached ? '🗙' : '🗗'}</button>
            <button on:click={() => dispatch('close')}>✖</button>
        </div>
    </div>
    <div class="p-2 {panel.isExpanded ? 'h-[calc(100vh-40px)]' : 'h-[calc(100%-40px)]'} overflow-auto">
        <slot></slot>
    </div>
    {#if !panel.isExpanded}
        <div class="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize" on:mousedown={startResize}></div>
    {/if}
</div>
