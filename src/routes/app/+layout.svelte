<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import { page } from '$app/stores';
</script>

<Navbar let:hidden let:toggle>
    <NavBrand href="/">
        <img src="/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            RequireTrace
        </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
        <NavLi href="/app" active={$page.url.pathname === '/app'}>Dashboard</NavLi>
        <NavLi href="/app/requirements" active={$page.url.pathname === '/app/requirements'}>Exigences</NavLi>
        <NavLi href="/app/traceability" active={$page.url.pathname === '/app/traceability'}>Traçabilité</NavLi>
    </NavUl>
</Navbar>

<main class="min-h-screen bg-gray-100">
    <slot />
</main>