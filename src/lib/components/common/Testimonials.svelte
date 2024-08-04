<!--<script>-->
<!--    import { Carousel } from 'flowbite-svelte';-->
<!--    import { images } from './imageData/+server.js';-->
<!--    import { onMount } from 'svelte';-->

<!--    let myCarousel;-->
<!--    let isLoading = true;-->
<!--    let error = null;-->

<!--    onMount(async () => {-->
<!--        try {-->
<!--            // Assuming images are loaded asynchronously from the server-->
<!--            const loadedImages = await Promise.all(images.map(img => new Promise((resolve, reject) => {-->
<!--                const image = new Image();-->
<!--                image.src = img.src;-->
<!--                image.onload = () => resolve(img);-->
<!--                image.onerror = () => reject(new Error(`Failed to load image: ${img.src}`));-->
<!--            })));-->
<!--            myCarousel = new Carousel(document.getElementById('myCarousel'), { images: loadedImages });-->
<!--        } catch (err) {-->
<!--            console.error(err);-->
<!--            error = err.message;-->
<!--        } finally {-->
<!--            isLoading = false;-->
<!--        }-->
<!--    });-->
<!--</script>-->

{#if isLoading}
    <p>Loading carousel...</p>
{:else if error}
    <p>Error loading carousel: {error}</p>
{:else}
    <Carousel id="myCarousel">
        {#each images as image}
            <img class="w-full" src={image.src} alt={image.alt}>
        {/each}
    </Carousel>
{/if}