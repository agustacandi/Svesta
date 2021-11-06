<style>
.nav-active {
  background-color: #5e5aff;
  transition: all 0.5s;
  color: white;
}

.nav-active:hover {
  background-color: #5e5aff;
}
</style>

<nav class="bg-white h-screen w-2/12 border-r border-gray-100">
  <div class="h-full flex flex-col p-5 justify-between">
    <div>
      <div class="text-center pt-10">
        <img
          src="/avatar.png"
          alt="Avatar"
          class="w-24 h-24 rounded-full mx-auto"
        />
        <h1 class="pt-3 font-bold">Candi Agusta</h1>
        <p>GNU/Linux Enthusiast</p>
      </div>
      <div class=" flex flex-col space-y-5 pt-10">
        <a
          href="/"
          class:nav-active={$page.path === "/"}
          class="p-3 rounded hover:bg-gray-100 flex items-center space-x-5 font-semibold"
          ><Home />
          <p>Home</p></a
        >
        <a
          href="/blog"
          class:nav-active={$page.path === "/blog"}
          class="p-3 rounded hover:bg-gray-100 flex items-center space-x-5 font-semibold"
          ><Article />
          <p>Blogs</p></a
        >
        <a
          href="/project"
          class:nav-active={$page.path === "/project"}
          class="p-3 rounded hover:bg-gray-100 flex items-center space-x-5 font-semibold"
          ><Pokemon />
          <p>Projects</p></a
        >
        <a
          href="/about"
          class:nav-active={$page.path === "/about"}
          class="p-3 rounded hover:bg-gray-100 flex items-center space-x-5 font-semibold"
          ><AccountCircle />
          <p>About</p></a
        >
      </div>
    </div>
    <div class="text-center text-sm text-sv-dark-blue">
      <p>
        Powered by<br /><a href="https://kit.svelte.dev" class="font-semibold"
          >Svelte-Kit</a
        >
        and
        <a href="https://tailwindcss.com" class="font-semibold">TailwindCSS</a>
      </p>
    </div>
  </div>
</nav>

<script>
import { page } from "$app/stores";
import AccountCircle from "$lib/icons/AccountCircle.svelte";
import Article from "$lib/icons/Article.svelte";
import Home from "$lib/icons/Home.svelte";
import Pokemon from "$lib/icons/Pokemon.svelte";
</script>
