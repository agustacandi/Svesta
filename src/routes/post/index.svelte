<svelte:head>
  <title>Svesta | Blog</title>
</svelte:head>

<div>
  <p><a href="/post/first-post">{metadata.title}</a></p>
</div>

<script>
  import {metadata} from './first-post/index.svx'
</script>