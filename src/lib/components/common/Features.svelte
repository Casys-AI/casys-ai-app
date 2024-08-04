<script>
    import { Card } from 'flowbite-svelte';
</script>

<section class="bg-gray-50 dark:bg-gray-800 py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
            <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Powerful features to supercharge your workflow
            </h2>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
                Everything you need to manage complex systems, all in one place.
            </p>
        </div>

        <div class="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
                <div class="flex flex-col items-center text-center">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 class="mt-4 text-lg font-medium text-gray-900 dark:text-white">Smart Diagramming</h3>
                    <p class="mt-2 text-base text-gray-500 dark:text-gray-300">
                        Create and edit system diagrams with AI-assisted suggestions and auto-layout.
                    </p>
                </div>
            </Card>

            <Card>
                <div class="flex flex-col items-center text-center">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 class="mt-4 text-lg font-medium text-gray-900 dark:text-white">Requirements Tracking</h3>
                    <p class="mt-2 text-base text-gray-500 dark:text-gray-300">
                        Manage and track requirements with real-time updates and version control.
                    </p>
                </div>
            </Card>

            <Card>
                <div class="flex flex-col items-center text-center">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                    <h3 class="mt-4 text-lg font-medium text-gray-900 dark:text-white">Collaboration Hub</h3>
                    <p class="mt-2 text-base text-gray-500 dark:text-gray-300">
                        Work together seamlessly with real-time editing and commenting features.
                    </p>
                </div>
            </Card>
        </div>
    </div>
</section>