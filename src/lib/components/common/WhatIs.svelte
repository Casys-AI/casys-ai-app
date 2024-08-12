<script>
    export let content = `
        <h2 class="text-4xl font-extrabold text-midnight-900 mb-8 font-mono leading-tight">CASys.AI: Complex Adaptive System of Artificial Intelligence</h2>
        <h3 class="text-2xl font-bold text-cassis-800 mb-6 font-mono">A Multi-scale Optimization Paradigm for Complex Adaptive Systems</h3>
        <p class="text-midnight-700 mb-8 text-lg leading-relaxed">
            CASys.AI introduces a novel approach to modeling and optimizing complex adaptive systems. By integrating advanced AI techniques, graph analysis, and non-linear dynamic systems theory, CASys.AI offers a comprehensive solution for tackling multi-scale challenges across various domains.
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div class="bg-cassis-100 p-6 rounded-lg shadow-md">
                <h4 class="text-xl font-bold text-midnight-900 mb-4">Multi-scale Knowledge Representation</h4>
                <p class="text-midnight-700 mb-4 leading-relaxed">
                    CASys.AI employs a dynamic hypergraph structure to represent entities, relationships, and constraints across different system scales. This approach enables seamless modeling of interactions between micro, meso, and macro-scale system components.
                </p>
            </div>
            <div class="bg-cassis-100 p-6 rounded-lg shadow-md">
                <h4 class="text-xl font-bold text-midnight-900 mb-4">Adaptive Artificial Intelligence Layer</h4>
                <ul class="text-midnight-700 mb-4 list-disc list-inside space-y-2">
                    <li>Multi-head attention recurrent neural networks for temporal analysis and system dynamics prediction</li>
                    <li>Multi-agent deep reinforcement learning for distributed optimization and real-time adaptation</li>
                    <li>Causal inference module based on dynamic Bayesian networks for modeling cause-effect relationships</li>
                </ul>
            </div>
        </div>
        <div class="bg-midnight-100 p-8 rounded-lg shadow-lg mb-12">
            <h4 class="text-2xl font-bold text-midnight-900 mb-6">Key Features and Applications</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h5 class="text-lg font-semibold text-midnight-800 mb-3">Topological and Spectral Graph Analysis</h5>
                    <ul class="text-midnight-700 space-y-2 list-disc list-inside">
                        <li>Graph embedding techniques for continuous latent space representation</li>
                        <li>Multi-level community detection algorithms for hierarchical structure identification</li>
                        <li>Centrality and robustness measures to evaluate system stability and resilience</li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-lg font-semibold text-midnight-800 mb-3">Non-linear Simulation and Optimization</h5>
                    <ul class="text-midnight-700 space-y-2 list-disc list-inside">
                        <li>Stochastic differential equation-based simulation engine for modeling non-linear dynamics</li>
                        <li>Hybrid metaheuristic optimization algorithms for efficient solution space exploration</li>
                        <li>Adaptive optimal control module using approximate dynamic programming for real-time decision making</li>
                    </ul>
                </div>
            </div>
        </div>
        <p class="text-midnight-700 text-lg leading-relaxed">
            CASys.AI is designed to address complex challenges in various fields, from personal planning to urban system modeling. By leveraging cutting-edge AI and complex systems theory, CASys.AI provides a powerful toolkit for researchers, planners, and decision-makers dealing with intricate, multi-scale problems.
        </p>
    `;
</script>

<section class="py-20 bg-pearl-100">
    <div class="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div class="text-content text-midnight-900">
            {@html content}
        </div>
    </div>
</section>

<style>
    .text-content {
        column-count: 1;
        column-gap: 40px;
    }

    @media (min-width: 1024px) {
        .text-content {
            column-count: 1;
        }
    }

    h2, h3, h4, h5 {
        margin-top: 1.5rem;
    }

    p {
        margin-bottom: 1.5rem;
    }
</style>