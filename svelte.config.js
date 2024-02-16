import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
      pages: "docs",
      assets: "docs"
  }),
  paths: {

  },
	},
	preprocess: [vitePreprocess({})],
  esbuild: {
    target: 'esnext',
    platform: 'linux',
  }
};
export default config;
