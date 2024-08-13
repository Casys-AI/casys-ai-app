<script lang="ts">
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte';
    import { page } from '$app/stores';
    import "../app.css";
    import { auth } from '$lib/auth';
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';

    let isLoggedIn = false;
    let username = '';

    onMount(() => {
        auth.checkAuth();
        const unsubscribe = auth.subscribe(state => {
            isLoggedIn = state.isLoggedIn;
            username = state.username;
            if (!isLoggedIn && $page.url.pathname !== '/login') {
                goto('/login');
            }
        });

        return unsubscribe;
    });

    function handleLogout() {
        auth.logout();
        goto('/login');
    }

    const defaultProfilePicture = "/images/default-avatar.png";
</script>

{#if isLoggedIn}
    <Navbar>
        <NavBrand href="/">
            <img src="/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Casys.ai Logo" />
            <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Casys.ai</span>
        </NavBrand>
        <div class="flex items-center md:order-2">
            <Avatar id="avatar-menu" src={defaultProfilePicture} />
            <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
        </div>
        <Dropdown placement="bottom" triggeredBy="#avatar-menu">
            <DropdownHeader>
                <span class="block text-sm">{username}</span>
            </DropdownHeader>
            <DropdownItem href="/">Dashboard</DropdownItem>
            <DropdownItem href="/settings">Paramètres</DropdownItem>
            <DropdownDivider />
            <DropdownItem on:click={handleLogout}>Se déconnecter</DropdownItem>
        </Dropdown>
        <NavUl>
            <NavLi href="/" active={$page.url.pathname === '/'}>Dashboard</NavLi>
            <NavLi href="/requirements" active={$page.url.pathname === '/requirements'}>Exigences</NavLi>
            <NavLi href="/traceability" active={$page.url.pathname === '/traceability'}>Traçabilité</NavLi>
        </NavUl>
    </Navbar>
{/if}

<main class="min-h-screen bg-gray-100">
    <slot />
</main>