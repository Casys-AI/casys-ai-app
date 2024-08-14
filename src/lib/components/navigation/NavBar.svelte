<script>
    import {onMount} from 'svelte';
    import {fade} from 'svelte/transition';

    let darkMode = false;
    let dropdownOpen = false;

    // Fonction pour basculer entre les modes clair et sombre
    function toggleDarkMode() {
        darkMode = !darkMode;
        updateTheme();
    }

    function updateTheme() {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('theme', darkMode ? 'dark' : 'light');
        }
    }

    onMount(() => {
        // Accéder à localStorage uniquement après le montage
        if (typeof localStorage !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            darkMode = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
            updateTheme();
        }
    });
</script>

<header class="bg-pearl-50 dark:bg-midnight-800 shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">

            <div class="flex">

                <!-- Boutons de la barre de navigation -->
                <button class="text-midnight-500 dark:text-pearl-100 hover:bg-cassis-200 dark:hover:bg-cassis-700 px-3 py-2 rounded-md text-sm font-medium">
                    Bouton 1
                </button>
                <button class="ml-4 text-midnight-500 dark:text-pearl-100 hover:bg-cassis-200 dark:hover:bg-cassis-700 px-3 py-2 rounded-md text-sm font-medium">
                    Bouton 2
                </button>
                <button class="ml-4 text-midnight-500 dark:text-pearl-100 hover:bg-cassis-200 dark:hover:bg-cassis-700 px-3 py-2 rounded-md text-sm font-medium">
                    Bouton 3
                </button>
            </div>

            <div class="flex items-center">
                <!-- Switcher de mode sombre -->
                <button
                        class="text-midnight-500 dark:text-pearl-100 hover:bg-cassis-200 dark:hover:bg-cassis-700 px-3 py-2 rounded-md text-sm font-medium"
                        on:click={toggleDarkMode}
                >
                    {#if darkMode}
                        ☀️
                    {:else}
                        🌙
                    {/if}
                </button>

                <!-- Menu du profil -->
                <div class="ml-4 relative">
                    <button
                            class="flex items-center text-midnight-500 dark:text-pearl-100 focus:outline-none"
                            on:click={() => (dropdownOpen = !dropdownOpen)}
                    >
                        <img alt="Votre profil" class="h-8 w-8 rounded-full" src="/images/profile.jpg"/>
                    </button>
                    {#if dropdownOpen}
                        <div
                                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-pearl-100 dark:bg-midnight-700 ring-1 ring-black ring-opacity-5"
                                transition:fade
                        >
                            <a href="/settings"
                               class="block px-4 py-2 text-sm text-midnight-500 dark:text-pearl-100 hover:bg-cassis-200 dark:hover:bg-cassis-700">Paramètres</a>
                            <a href="/logout"
                               class="block px-4 py-2 text-sm text-midnight-500 dark:text-pearl-100 hover:bg-cassis-200 dark:hover:bg-cassis-700">Déconnexion</a>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</header>

<style>
    header {
        position: sticky;
        top: 0;
        z-index: 10;
    }
</style>
