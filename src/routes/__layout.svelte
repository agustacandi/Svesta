<script>
import Nav from "../components/Nav.svelte";

</script>

<Nav/>

<slot></slot>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    :root::-webkit-scrollbar {
        width: 20px;
    }

    :root::-webkit-scrollbar-track {
        background-color: transparent;
    }
    :root::-webkit-scrollbar-thumb {
        background-color: #525252;
        border-radius: 20px;
        border: 6px solid transparent;
        background-clip: content-box;
    }
</style>