<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  color: #0c145a;
}
</style>

<svelte:window bind:innerWidth={screenWidth} />

<main class="flex">
  <LoadingBar />
  {#if screenWidth > 1000}
    <Navbar />
  {:else}
    <NavbarResponsive />
  {/if}
  <Layout {screenWidth}>
    <slot />
  </Layout>
</main>

<script>
import LoadingBar from "$lib/components/LoadingBar.svelte";
import Navbar from "../lib/components/Navbar.svelte";
import Layout from "$lib/parts/Layout.svelte";

// Font
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import NavbarResponsive from "$lib/components/NavbarResponsive.svelte";

let screenWidth;
</script>
