export function configureMonaco() {
    if (typeof window !== 'undefined') {
        import('monaco-editor').then(monaco => {
            self.MonacoEnvironment = {
                getWorkerUrl: function (moduleId, label) {
                    return '/src/lib/services/custom.worker.js';
                }
            };

            // Register the 'mermaid' language
            monaco.languages.register({ id: 'mermaid' });

            // Define custom tokenizer for Mermaid syntax
            monaco.languages.setMonarchTokensProvider('mermaid', {
                tokenizer: {
                    root: [
                        [/^(graph TD|flowchart|sequenceDiagram|classDiagram|stateDiagram|erDiagram|gantt|pie|journey)\b/, "keyword"],
                        [/\b(subgraph|end|participant|actor|class|note)\b/, "keyword"],
                        [/\b(left of|right of|over)\b/, "keyword"],
                        [/\b(activate|deactivate|loop|alt|else|opt|par|and|rect|queue)\b/, "keyword"],
                        [/(-->)/, "arrow"],
                        [/\(([^)]+)\)/, "round-brackets"],
                        [/\[([^\]]+)\]/, "square-brackets"],
                        [/\{([^}]+)\}/, "curly-brackets"],
                        [/"([^"]*)"/, "string"],
                        [/'([^']*)'/, "string"],
                        [/([A-Za-z_$][\w$]*)/, "identifier"],
                        [/([0-9]+)/, "number"],
                        [/^[\t ]*(:)(?=\s)/, "colon"],
                        [/%%.+$/, "comment"],
                    ]
                }
            });
        });
    }
}
