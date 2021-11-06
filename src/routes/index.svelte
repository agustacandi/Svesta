<svelte:head>
  <title>Svesta | Home</title>
</svelte:head>
<div>
  <h1 class="font-bold text-xl">Welcome ~</h1>
  <p>Have a good day!</p>
</div>

<svelte:window bind:innerWidth={screenWidth} />

<script>
let screenWidth;
</script>
