<script>
    import { onMount, onDestroy, createEventDispatcher } from 'svelte';
    import { browser } from '$app/environment';

    export let value = '';
    export let language = 'mermaid';
    export let theme = 'vs-light';
    export let customSuggestions = [];

    const dispatch = createEventDispatcher();

    let editor;
    let monaco;
    let container;

    async function initMonaco() {
        if (browser) {
            monaco = await import('monaco-editor');

            // Définir le langage Mermaid
            monaco.languages.register({ id: 'mermaid' });

            // Créer l'éditeur
            editor = monaco.editor.create(container, {
                value,
                language,
                theme,
                automaticLayout: true,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
            });

            editor.onDidChangeModelContent(() => {
                const newValue = editor.getValue();
                dispatch('input', newValue);
                processContent(newValue);
            });

            registerCompletionProvider();
        }
    }

    function registerCompletionProvider() {
        if (!monaco) return;

        monaco.languages.registerCompletionItemProvider('mermaid', {
            provideCompletionItems: (model, position) => {
                const word = model.getWordUntilPosition(position);
                const range = {
                    startLineNumber: position.lineNumber,
                    endLineNumber: position.lineNumber,
                    startColumn: word.startColumn,
                    endColumn: word.endColumn
                };

                const suggestions = [
                    {
                        label: 'graph TD',
                        kind: monaco.languages.CompletionItemKind.Snippet,
                        insertText: 'graph TD\n  A[Start] --> B[Process]\n  B --> C[End]',
                        documentation: 'Initialiser un diagramme Mermaid',
                        range: range
                    },
                    ...[
                        '-->',
                    ].map(arrow => ({
                        label: arrow,
                        kind: monaco.languages.CompletionItemKind.Operator,
                        insertText: ` ${arrow} `,
                        documentation: `Insérer une flèche de type ${arrow}`,
                        range: range
                    })),
                    ...customSuggestions.map(item => ({
                        label: item.label,
                        kind: monaco.languages.CompletionItemKind.Text,
                        insertText: item.insertText || item.label,
                        documentation: item.documentation,
                        range: range
                    }))
                ];

                return { suggestions };
            }
        });
    }

    async function processContent(content) {
        const worker = new Worker('/src/lib/services/custom.worker.js');
        worker.postMessage(content);

        worker.onmessage = function(e) {
            const {hasGraphTD, arrowIssues} = e.data;
            const markers = [];

            if (!hasGraphTD) {
                markers.push({
                    severity: monaco.MarkerSeverity.Error,
                    message: "Le graphe doit commencer par 'graph TD'.",
                    startLineNumber: 1,
                    startColumn: 1,
                    endLineNumber: 1,
                    endColumn: 1
                });
            }

            arrowIssues.forEach(line => {
                markers.push({
                    severity: monaco.MarkerSeverity.Error,
                    message: "Problème de formatage des flèches.",
                    startLineNumber: line + 1,
                    startColumn: 1,
                    endLineNumber: line + 1,
                    endColumn: 1
                });
            });

            monaco.editor.setModelMarkers(editor.getModel(), 'mermaid', markers);
        };
    }

    onMount(initMonaco);

    onDestroy(() => {
        if (editor) {
            editor.dispose();
        }
    });

    $: if (editor && editor.getValue() !== value) {
        editor.setValue(value);
    }

    $: if (editor && monaco) {
        registerCompletionProvider();
    }
</script>

<div class="editor-container" bind:this={container}></div>

<style>
    .editor-container {
        width: 100%;
        height: 100%;
        min-height: 300px;
    }
</style>
