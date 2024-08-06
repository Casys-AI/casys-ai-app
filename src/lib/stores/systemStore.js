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

export function switchSystem(system) {
    currentSystem.set(system);
}