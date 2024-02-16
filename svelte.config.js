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
      // change below to your repo name
      base:  process.argv.includes('dev') ? '' : 'bertram-capital'
  },
	},
	preprocess: [vitePreprocess({})],
  esbuild: {
    target: 'esnext',
    platform: 'linux',
  }
};
export default config;
