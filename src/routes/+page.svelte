<script>
    import {Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button} from 'flowbite-svelte';
    import Hero from '../lib/components/common/Hero.svelte'
    import Features from '../lib/components/common/Features.svelte'
    // import Testimonials from '../lib/components/common/Testimonials.svelte'
    import Pricing from '../lib/components/common/Pricing.svelte'
    import FaqCta from '../lib/components/common/FaqCta.svelte'
</script>

<svelte:head>
    <title>ModelTrace - Streamline Your System Design Process</title>
</svelte:head>

<Navbar let:hidden let:toggle>
    <NavBrand href="/">
        <img src="/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="RequireTrace Logo"/>
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            RequireTrace
        </span>
    </NavBrand>
    <NavHamburger on:click={toggle}/>
    <NavUl {hidden}>
        <NavLi href="/features">Fonctionnalités</NavLi>
        <NavLi href="/pricing">Tarifs</NavLi>
        <NavLi href="/about">À propos</NavLi>
        <NavLi href="/app">
            <Button color="primary">Connexion</Button>
        </NavLi>
    </NavUl>
</Navbar>

<main>
    <Hero/>
    <Features/>
    <!--<Testimonials />-->
    <Pricing/>
    <FaqCta/>
</main>

<footer class="bg-gray-100 dark:bg-gray-800 py-8">
    <div class="container mx-auto px-4">
        <p class="text-center text-gray-500 dark:text-gray-400">
            © 2024 RequireTrace. Tous droits réservés.
        </p>
    </div>
</footer>