<script>
    import Mermaid from 'svelte-mermaid';
    // Logique pour générer le diagramme de traçabilité
</script>

<Mermaid
        chart={`
    graph TD
      A[Exigence 1] --> B[Composant 1]
      A --> C[Composant 2]
      D[Exigence 2] --> C
  `}
/>