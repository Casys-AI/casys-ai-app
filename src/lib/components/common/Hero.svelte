<script>
    import { Button } from 'flowbite-svelte';
</script>

<section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Streamline Your <span class="text-primary-600 dark:text-primary-500">System Design</span> Process
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                ModelTrace helps teams collaborate, visualize, and optimize complex systems with ease. Say goodbye to scattered docs and hello to seamless design workflows.
            </p>
            <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <Button size="xl" color="primary">Start Free Trial</Button>
                <Button size="xl" color="light">Schedule a Demo</Button>
            </div>
            <div class="mt-8 flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <p class="text-base font-medium text-gray-500 dark:text-gray-400">No credit card required</p>
            </div>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/images/hero-image.svg" alt="ModelTrace Dashboard" />
        </div>
    </div>
    <div class="max-w-screen-xl px-4 mx-auto mt-8 text-center">
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Trusted by innovative teams at</p>
        <div class="flex flex-wrap justify-center items-center mt-4 space-x-6">
            <img src="/images/company-logo-1.svg" class="h-9 hover:text-gray-900 dark:hover:text-white" alt="Company 1" />
            <img src="/images/company-logo-2.svg" class="h-9 hover:text-gray-900 dark:hover:text-white" alt="Company 2" />
            <img src="/images/company-logo-3.svg" class="h-9 hover:text-gray-900 dark:hover:text-white" alt="Company 3" />
        </div>
    </div>
</section>