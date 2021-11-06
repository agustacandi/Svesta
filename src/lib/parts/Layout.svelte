<style>
div::-webkit-scrollbar {
  width: 20px;
}

div::-webkit-scrollbar-track {
  background-color: transparent;
}
div::-webkit-scrollbar-thumb {
  background-color: #5e5aff;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}
</style>

<div
  class={`h-screen ${
    screenWidth < 1000 ? "w-12/12" : "w-10/12"
  } overflow-y-scroll p-5`}
  on:scroll={handleScroll}
  bind:this={container}
>
  <div
    class={`${
      screenWidth < 1000 ? "w-full" : "w-[850px] mx-auto"
    } pt-14 md:pt-10`}
  >
    <slot />
  </div>
</div>

{#if y > 50}
  <ScrollUpButton {container} />
{/if}

<script>
import ScrollUpButton from "$lib/components/ScrollUpButton.svelte";

export let screenWidth;
let y, container;

function handleScroll(e) {
  y = e.target.scrollTop;
}
</script>
