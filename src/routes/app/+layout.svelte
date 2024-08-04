<script>
    import "../../app.css";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
    import { page } from '$app/stores';
</script>

<Navbar let:hidden let:toggle>
    <NavBrand href="/app">
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

<div class="flex min-h-screen bg-gray-100">
    <Sidebar class="h-screen sticky top-0 pt-16">
        <SidebarWrapper>
            <SidebarGroup>
                <SidebarItem href="/app" label="Dashboard" active={$page.url.pathname === '/app'}>
                    <svelte:fragment slot="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    </svelte:fragment>
                </SidebarItem>
                <SidebarItem href="/app/requirements" label="Exigences" active={$page.url.pathname === '/app/requirements'}>
                    <svelte:fragment slot="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                    </svelte:fragment>
                </SidebarItem>
                <SidebarItem href="/app/traceability" label="Traçabilité" active={$page.url.pathname === '/app/traceability'}>
                    <svelte:fragment slot="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </svelte:fragment>
                </SidebarItem>
            </SidebarGroup>
        </SidebarWrapper>
    </Sidebar>

    <main class="flex-1 p-4 pt-20 pb-20">
        <slot />
    </main>
</div>

<Footer class="fixed bottom-0 left-0 z-20 w-full">
    <FooterCopyright href="/" by="RequireTrace™" year={2024} />
    <FooterLinkGroup>
        <FooterLink href="/about">À propos</FooterLink>
        <FooterLink href="/privacy">Confidentialité</FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
    </FooterLinkGroup>
</Footer>