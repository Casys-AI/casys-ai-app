<script>
    import { Button } from 'flowbite-svelte';
</script>

<section class="bg-cassis-gradient">
    <div class="grid max-w-screen-xl px-4 py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-24 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-pearl-100 font-mono">
                Unleashing the Future of Adaptive Systems
            </h1>
            <p class="max-w-2xl mb-6 font-light text-pearl-300 lg:mb-8 md:text-lg lg:text-xl font-mono">
                casys.ai is pioneering a new era in system design with our advanced AI platform, designed to model, simulate, and optimize complex adaptive systems at multiple scales. Whether you're planning personal projects or managing large urban networks, our platform adapts and evolves with your needs, ensuring precision and efficiency at every step.
            </p>
            <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <Button size="xl" class="bg-pearl-100 hover:bg-pearl-200 text-midnight-900 rounded-none font-mono">
                    Explore the Roadmap
                </Button>
                <Button size="xl" class="bg-pearl-100 hover:bg-pearl-200 text-midnight-900 rounded-none font-mono">
                    Join the GitHub Repo
                </Button>
                <Button size="xl" class="bg-cassis-800 hover:bg-cassis-900 text-pearl-100 rounded-none font-mono">
                    Watch Demo Videos
                </Button>
            </div>
            <div class="mt-8 flex items-center">
                <svg class="w-4 h-4 mr-2 text-pearl-100 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <p class="text-base font-medium text-pearl-300 font-mono">Open-source project</p>
            </div>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <div class="aspect-w-16 aspect-h-9 w-full">
                <iframe class="w-full h-full rounded-lg shadow-lg" src="https://www.youtube.com/embed/your-video-id" title="Latest Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</section>
