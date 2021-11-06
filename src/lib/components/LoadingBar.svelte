{#if $navigating}
  <div
    class="fixed top-0 left-0 h-1 bg-sv-dark-blue z-50 transition-all ease-out duration-500"
    style="width: {width}%"
  />
{/if}

<script>
import { onMount, onDestroy } from "svelte";
import { navigating } from "$app/stores";

let counter;
let width = 0;
let speed = 10;

const resetProgress = () => {
  clearInterval(counter);
  width = 0;
  speed = 0;
};

const startProgres = () => {
  counter = setInterval(() => {
    if (width === 95) {
      clearInterval(counter);
      return;
    }
    width += 5;
    speed += 500;
  }, speed);
};

$: if (!$navigating) resetProgress();
$: if ($navigating) startProgres();

onMount(() => startProgres());
onDestroy(() => resetProgress());
</script>
