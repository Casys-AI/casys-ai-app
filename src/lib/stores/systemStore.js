import { writable } from 'svelte/store';

export const currentSystem = writable(null);
export const systems = writable([
    {
        id: 1,
        name: "Système A",
        description: "Description du système A",
        file: "graph TD\nA-->B\nA-->C\nB-->D\nC-->D",
        nodes: [
            { id: "A1", name: "Module 1" },
            { id: "A2", name: "Module 2" },
            { id: "A3", name: "Module 3" },
            { id: "A4", name: "Module 4" }
        ],
        links: [
            { source: "A1", target: "A2" },
            { source: "A1", target: "A3" },
            { source: "A2", target: "A4" },
            { source: "A3", target: "A4" }
        ]
    },
]);

/**
 * @param {{ id: number; name: string; description: string; mermaidSyntax: any; nodes: never[]; links: never[]; } | null} system
 */
export function switchSystem(system) {
    // @ts-ignore
    currentSystem.set(system);
}

export async function loadSuggestions() {
    try {
        const response = await fetch('/suggestions.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (!data || !data.suggestions) {
            throw new Error('Invalid suggestions data');
        }
        // @ts-ignore
        currentSystem.update(sys => ({ ...sys, customSuggestions: data.suggestions }));
    } catch (error) {
        console.error('Error loading suggestions:', error);
    }
}