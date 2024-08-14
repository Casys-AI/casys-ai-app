import { writable } from 'svelte/store';

// Définition de la structure d'un système
const createSystem = (id, name, description, file, nodes, links, category) => ({
    id,
    name,
    description,
    file,
    nodes,
    links,
    category
});

// Système initial
const initialSystems = [
    createSystem(
        1,
        "Système A",
        "Description du système A",
        "graph TD\nA-->B\nA-->C\nB-->D\nC-->D",
        [
            { id: "A1", name: "Module 1" },
            { id: "A2", name: "Module 2" },
            { id: "A3", name: "Module 3" },
            { id: "A4", name: "Module 4" }
        ],
        [
            { source: "A1", target: "A2" },
            { source: "A1", target: "A3" },
            { source: "A2", target: "A4" },
            { source: "A3", target: "A4" }
        ],
        "All",
    )
];

export const currentSystem = writable(null);
export const systems = writable(initialSystems);

export function switchSystem(system) {
    currentSystem.set(system);
}

export function addSystem(name, description, file, nodes = [], links = [], category = "All") {
    systems.update(sys => {
        const newId = Math.max(...sys.map(s => s.id), 0) + 1;
        return [...sys, createSystem(newId, name, description, file, nodes, links, category)];
    });
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
        currentSystem.update(sys => sys ? {...sys, customSuggestions: data.suggestions} : null);
    } catch (error) {
        console.error('Error loading suggestions:', error);
    }
}