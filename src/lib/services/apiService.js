import { error } from '@sveltejs/kit';

const API_BASE_URL = 'http://localhost:5000'; // Ajustez l'URL selon votre configuration

export async function generateMermaidDiagram(file, description) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('description', description);

    if (import.meta.env.MODE === 'development') {
        // Simuler la réponse en mode développement
        return simulateGenerateMermaidDiagram(file, description);
    }

    try {
        const response = await fetch(`${API_BASE_URL}/generate-diagram`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw error(response.status, 'Failed to generate diagram');
        }

        const data = await response.json();
        return data.mermaid_diagram;
    } catch (err) {
        console.error('Error generating diagram:', err);
        throw error(500, 'Internal Server Error');
    }
}

export async function updateMermaidDiagram(systemId, mermaidSyntax) {
    try {
        const response = await fetch(`${API_BASE_URL}/update-diagram/${systemId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mermaid_syntax: mermaidSyntax }),
        });

        if (!response.ok) {
            throw error(response.status, 'Failed to update diagram');
        }

        const data = await response.json();
        return data.success;
    } catch (err) {
        console.error('Error updating diagram:', err);
        throw error(500, 'Internal Server Error');
    }
}

export async function simulateGenerateMermaidDiagram(file, description) {
    try {
        const response = await fetch('/mockResponse.json');
        if (!response.ok) {
            throw new Error('Failed to load mock response');
        }
        const data = await response.json();
        return data.mermaid_diagram;
    } catch (err) {
        console.error('Error loading mock response:', err);
        throw error(500, 'Internal Server Error');
    }
}
