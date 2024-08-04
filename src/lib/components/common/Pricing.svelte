<script>
    import { Button, Card } from 'flowbite-svelte';
</script>

<section class="bg-gray-50 dark:bg-gray-800 py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl">
            Simple, transparent pricing
        </h2>
        <p class="mt-4 max-w-2xl text-xl text-center text-gray-500 dark:text-gray-300 mx-auto">
            Choose the plan that's right for you and your team
        </p>

        <div class="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {#each ['Starter', 'Pro', 'Enterprise'] as plan}
                <Card class="flex flex-col">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{plan}</h3>
                    <p class="mt-4 text-gray-500 dark:text-gray-300">
                        {#if plan === 'Starter'}
                            Perfect for small teams just getting started
                        {:else if plan === 'Pro'}
                            For growing teams with more complex needs
                        {:else}
                            Custom solutions for large organizations
                        {/if}
                    </p>
                    <div class="mt-8">
                        <span class="text-4xl font-extrabold text-gray-900 dark:text-white">
                            {#if plan === 'Starter'}
                                $49
                            {:else if plan === 'Pro'}
                                $99
                            {:else}
                                Custom
                            {/if}
                        </span>
                        {#if plan !== 'Enterprise'}
                            <span class="text-base font-medium text-gray-500 dark:text-gray-300">/month</span>
                        {/if}
                    </div>
                    <Button class="mt-8" color={plan === 'Pro' ? 'primary' : 'light'}>
                        {plan === 'Enterprise' ? 'Contact Sales' : 'Start free trial'}
                    </Button>
                </Card>
            {/each}
        </div>
    </div>
</section>