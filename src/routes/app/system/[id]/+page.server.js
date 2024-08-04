export async function load({ params }) {
    // Ici, vous feriez normalement un appel à votre base de données
    // Pour cet exemple, nous simulons un chargement de données
    const systemId = params.id;

    // Simulez le chargement des données du système
    const system = {
        id: systemId,
        name: `Système ${systemId}`,
        description: `Description du système ${systemId}`,
        diagrams: {
            requirements: `graph TD\n    A[Req 1] --> B[Req 2]\n    A --> C[Req 3]`,
            functional: `graph LR\n    D[Func 1] --> E[Func 2]\n    D --> F[Func 3]`,
            physical: `graph TB\n    G[Comp 1] --> H[Comp 2]\n    G --> I[Comp 3]`,
            behavioral: `graph LR\n    J[State 1] --> K[State 2]\n    K --> L[State 3]\n    L --> J`
        },
        documents: [
            { name: "Document 1.pdf" },
            { name: "Document 2.docx" }
        ]
    };

    return {
        system
    };
}