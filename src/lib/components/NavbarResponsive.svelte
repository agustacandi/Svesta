<style>
.nav-active {
  background-color: #5e5aff;
  transition: all 0.3s;
  color: white;
}

.nav-active:hover {
  background-color: #5e5aff;
}
</style>

<nav
  class="fixed bottom-0 w-full backdrop-filter backdrop-blur border-t border-gray-100"
>
  <div class="flex justify-around p-2">
    <a
      href="/"
      class:nav-active={$page.path === "/"}
      class="p-3 rounded hover:bg-gray-100 flex items-center space-x-5 font-semibold"
      ><Home />
    </a>
    <a
      href="/post"
      class:nav-active={$page.path === "/post"}
      class="p-3 rounded hover:bg-gray-100 flex items-center space-x-5 font-semibold"
      ><Article />
    </a>
    <a
      href="/project"
      class:nav-active={$page.path === "/project"}
      class="p-3 rounded hover:bg-gray-100 flex items-center space-x-5 font-semibold"
      ><Pokemon />
    </a>
    <a
      href="/about"
      class:nav-active={$page.path === "/about"}
      class="p-3 rounded hover:bg-gray-100 flex items-center space-x-5 font-semibold"
      ><AccountCircle />
    </a>
  </div>
</nav>

<script>
import { page } from "$app/stores";
import AccountCircle from "$lib/icons/AccountCircle.svelte";
import Article from "$lib/icons/Article.svelte";
import Home from "$lib/icons/Home.svelte";
import Pokemon from "$lib/icons/Pokemon.svelte";
</script>
