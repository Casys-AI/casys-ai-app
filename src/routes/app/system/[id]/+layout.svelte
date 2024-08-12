<script>
    import "../../../../app.css"
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    import { configureMonaco } from '$lib/services/monaco-config.js';

    onMount(() => {
        if (browser) {
            configureMonaco();
        }
    });
</script>
    <div class="flex-1">
        <slot />
    </div>