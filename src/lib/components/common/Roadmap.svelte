<script>
    import { BadgeCheckSolid } from 'flowbite-svelte-icons';

    const roadmapData = [
        {
            "phase": "Phase 1: Building Strong Foundations",
            "duration": "3-6 months",
            "tasks": [
                {
                    "title": "Optimize database structure",
                    "details": [
                        "Analyze current usage patterns to identify how the system can be made faster and more efficient.",
                        "Implement automatic enhancements to make data access quicker and more reliable.",
                        "Create a simple tool that makes it easier to ask questions of your data and get results quickly."
                    ]
                },
                {
                    "title": "Enhance text understanding",
                    "details": [
                        "Integrate an advanced model to better understand and process the written text within the system.",
                        "Develop a system that can automatically recognize and highlight important elements in technical diagrams."
                    ]
                },
                {
                    "title": "Set up continuous learning",
                    "details": [
                        "Implement systems that can keep learning and improving based on new data over time.",
                        "Develop mechanisms to alert when the system’s models need updates to stay accurate."
                    ]
                }
            ]
        },
        {
            "phase": "Phase 2: Advanced Data Analysis and User Interaction",
            "duration": "4-6 months",
            "tasks": [
                {
                    "title": "Graph analysis and knowledge discovery",
                    "details": [
                        "Implement basic tools that identify key points and relationships within your data.",
                        "Develop an initial version of graph-based visualizations that represent data connections clearly."
                    ]
                },
                {
                    "title": "Interactive and dynamic visuals",
                    "details": [
                        "Create basic interactive visuals that allow users to explore diagrams and data graphs.",
                        "Implement features that let users zoom in and filter data on the fly to focus on what’s important."
                    ]
                },
                {
                    "title": "Integrate user feedback",
                    "details": [
                        "Develop easy-to-use tools for gathering feedback from users about their experience.",
                        "Set up a basic system to analyze this feedback and make meaningful improvements to the platform."
                    ]
                }
            ]
        },
        {
            "phase": "Phase 3: Intelligent Collaboration and Simulation",
            "duration": "6-8 months",
            "tasks": [
                {
                    "title": "Collaborative diagram generation and analysis",
                    "details": [
                        "Design a system where multiple 'agents' or AI components work together to create and analyze diagrams.",
                        "Implement specialized agents tailored for different types of diagrams, enhancing accuracy and efficiency.",
                        "Set up a coordination system that ensures these agents work together smoothly."
                    ]
                },
                {
                    "title": "Prediction and simulation",
                    "details": [
                        "Develop a basic simulation engine that predicts outcomes based on the diagrams you create.",
                        "Implement optimization techniques that make these predictions more accurate and useful."
                    ]
                },
                {
                    "title": "Learning transfer between models",
                    "details": [
                        "Implement basic techniques that allow knowledge to be transferred between different models, making the system smarter over time.",
                        "Adapt existing models to work with these new learning methods, ensuring they stay up-to-date."
                    ]
                }
            ]
        },
        {
            "phase": "Phase 4: Seamless Integration and Robust Security",
            "duration": "4-6 months",
            "tasks": [
                {
                    "title": "Integrate diverse data sources",
                    "details": [
                        "Develop connectors that make it easy to bring in data from various sources, no matter the format.",
                        "Implement basic techniques to combine and process data efficiently, giving you a complete view of your information."
                    ]
                },
                {
                    "title": "Enhance security and privacy",
                    "details": [
                        "Set up a system to manage who has access to what, ensuring that your data is always protected.",
                        "Develop an initial version of a secure, decentralized learning system that keeps your data private."
                    ]
                }
            ]
        },
        {
            "phase": "Phase 5: Refinement and Feature Expansion",
            "duration": "6-12 months",
            "tasks": [
                {
                    "title": "Continuous improvement",
                    "details": [
                        "Regularly refine and enhance the system based on feedback and performance data to keep it running smoothly.",
                        "Optimize the system to ensure it operates as efficiently as possible, even as it grows."
                    ]
                },
                {
                    "title": "Expand system features",
                    "details": [
                        "Add new features like augmented reality to make data visualization even more intuitive.",
                        "Develop advanced reasoning and decision-making capabilities that provide deeper insights."
                    ]
                },
                {
                    "title": "Complete integration and testing",
                    "details": [
                        "Ensure that all system components work together seamlessly to provide a smooth user experience.",
                        "Conduct extensive testing with real-world scenarios to confirm the system is ready for complex tasks."
                    ]
                }
            ]
        }
    ];


</script>

<section class="py-16 bg-pearl-100">
    <div class="max-w-screen-xl mx-auto px-6 lg:px-8">
        <h2 class="text-4xl font-extrabold text-midnight-900 mb-12 text-center font-mono">Project Roadmap</h2>

        {#each roadmapData as phaseData, index (index)}
            <div class={`mb-12 p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'bg-white' : 'bg-pearl-50'} border-l-4 border-cassis-600`}>
                <h3 class="text-2xl font-bold text-midnight-900 mb-4 font-mono">
                    {phaseData.phase}
                </h3>
                <p class="text-sm text-midnight-700 mb-6">
                    Duration: {phaseData.duration}
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {#each phaseData.tasks as task}
                        <div class="flex flex-col justify-between bg-pearl-100 shadow-lg rounded-lg p-6 border border-cassis-300">
                            <div class="flex items-center mb-4">
                                <div class="flex-shrink-0 bg-cassis-600 text-pearl-100 p-2 rounded-full">
                                    <BadgeCheckSolid class="w-8 h-8"/>
                                </div>
                                <h4 class="ml-4 text-lg font-semibold text-midnight-900">
                                    {task.title}
                                </h4>
                            </div>
                            <ul class="mt-2 text-midnight-700 space-y-2 list-disc list-inside">
                                {#each task.details as detail}
                                    <li>{detail}</li>
                                {/each}
                            </ul>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</section>




