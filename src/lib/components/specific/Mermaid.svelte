<script>
    import { onMount } from 'svelte';

    export let chart;

    let iframe;

    $: if (iframe && chart) {
        updateChart();
    }

    function updateChart() {
        const html = `
            <!DOCTYPE html>
            <html>
            <head>
                <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"><\/script>
                <script>
                    mermaid.initialize({ startOnLoad: true });
                <\/script>
            </head>
            <body>
                <div class="mermaid">
                    ${chart}
                </div>
            </body>
            </html>
        `;

        iframe.srcdoc = html;
    }
</script>

<iframe title="Mermaid Diagram" bind:this={iframe} style="width: 100%; height: 100%; border: none;"></iframe>