/** @type {import('@sveltejs/kit').Config} */

import vercel from "@sveltejs/adapter-vercel";
import { mdsvex } from "mdsvex";
import sveltePreprocess from "svelte-preprocess";

const config = {
  extensions: [".svelte", ".svx"],
  preprocess: [
    sveltePreprocess(),
    mdsvex({
      extensions: [".svx"],
      layout: {
        blog: "./src/lib/layouts/blog.svelte",
      },
    }),
  ],
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: vercel(),
  },
};

export default config;
