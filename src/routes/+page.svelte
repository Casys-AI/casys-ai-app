<script>
    import {Navbar, NavBrand, NavLi, NavUl, NavHamburger} from 'flowbite-svelte';
    import Hero from '../lib/components/common/Hero.svelte';
    import Features from '../lib/components/common/Features.svelte';
    import OpenSource from '../lib/components/common/OpenSource.svelte';
    import Roadmap from '../lib/components/common/Roadmap.svelte';
    import FaqCta from '../lib/components/common/FaqCta.svelte';
    import Sectors from "$lib/components/sectors/Sectors.svelte";
    import WhatIs from "$lib/components/common/WhatIs.svelte";
</script>

<svelte:head>
    <title>casys.ai - Transform Your Ideas into Intelligent Systems</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&display=swap">
</svelte:head>

<Navbar let:hidden let:toggle class="bg-pearl-100 border-b border-cassis-200 px-4 sm:px-6 lg:px-8">
    <NavBrand href="/" class="flex items-center">
        <img src="/images/logo.svg" class="mr-3 h-6 sm:h-8" alt="casys.ai Logo"/>
        <span class="self-center text-xl font-semibold text-midnight-900 font-mono">
            casys.ai
        </span>
    </NavBrand>
    <div class="flex items-center lg:order-2">
        <a href="/app" class="text-pearl-100 bg-cassis-800 hover:bg-cassis-900 focus:ring-4 focus:ring-cassis-300 font-medium rounded-none text-sm px-6 py-3 mr-2 focus:outline-none font-mono">
            Get Started
        </a>
        <NavHamburger on:click={toggle} class="inline-flex items-center p-2 ml-1 text-sm text-midnight-900 rounded-none lg:hidden hover:bg-pearl-200 focus:outline-none focus:ring-2 focus:ring-cassis-300"/>
    </div>
    <NavUl {hidden} class="lg:flex flex-col lg:flex-row lg:space-x-8 lg:mt-0">
        <NavLi href="#features" class="text-midnight-900 hover:text-cassis-600 font-mono">Features</NavLi>
        <NavLi href="#opensource" class="text-midnight-900 hover:text-cassis-600 font-mono">Open Source</NavLi>
        <NavLi href="#roadmap" class="text-midnight-900 hover:text-cassis-600 font-mono">Roadmap</NavLi>
        <NavLi href="https://github.com/casys-ai/casys" target="_blank" class="text-midnight-900 hover:text-cassis-600 font-mono">GitHub</NavLi>
    </NavUl>
</Navbar>

<main class="bg-pearl-50">
    <Hero />
    <Features/>
    <Sectors />
    <Roadmap />
    <FaqCta />
</main>

<footer class="bg-pearl-100 py-8 border-t border-cassis-200">
    <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between">
            <div class="w-full md:w-1/4 mb-4 md:mb-0">
                <h3 class="text-midnight-900 text-lg font-semibold mb-2 font-mono">casys.ai</h3>
                <p class="text-midnight-700 font-mono">Transforming ideas into intelligent systems</p>
            </div>
            <div class="w-full md:w-1/4 mb-4 md:mb-0">
                <h4 class="text-midnight-900 font-semibold mb-2 font-mono">Useful Links</h4>
                <ul class="text-midnight-700 font-mono">
                    <li><a href="/privacy" class="hover:text-cassis-600">Privacy Policy</a></li>
                    <li><a href="/terms" class="hover:text-cassis-600">Terms of Use</a></li>
                    <li><a href="/docs" class="hover:text-cassis-600">Documentation</a></li>
                </ul>
            </div>
            <div class="w-full md:w-1/4 mb-4 md:mb-0">
                <h4 class="text-midnight-900 font-semibold mb-2 font-mono">Follow Us</h4>
                <div class="flex space-x-4">
                    <a href="#" class="text-midnight-700 hover:text-cassis-600">
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                        </svg>
                    </a>
                    <a href="#" class="text-midnight-700 hover:text-cassis-600">
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                    </a>
                    <a href="https://github.com/casys-ai/casys" class="text-midnight-700 hover:text-cassis-600">
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="mt-8 border-t border-cassis-200 pt-4">
            <p class="text-center text-midnight-600 font-mono">
                © 2024 casys.ai. All rights reserved.
            </p>
        </div>
    </div>
</footer>
