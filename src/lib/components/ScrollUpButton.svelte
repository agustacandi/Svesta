<div
  class="p-2 rounded bg-sv-blue fixed right-10 bottom-20 md:bottom-10 text-white cursor-pointer"
  transition:fade={{ duration: 100 }}
  on:click={scrollToTop}
>
  <ChevronDoubleUp />
</div>

<script>
import ChevronDoubleUp from "$lib/icons/ChevronDoubleUp.svelte";
import { fade } from "svelte/transition";
export let container;
const scrollToTop = () => container.scrollTo({ top: 0, behavior: "smooth" });
</script>
