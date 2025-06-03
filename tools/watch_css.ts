// scripts/watch_css.ts
import * as esbuild from "npm:esbuild";
import { sassPlugin } from "jsr:@tsukina-7mochi/esbuild-plugin-sass";

// Define your entry and output paths
const entry = new URL("../static/styles/styles.scss", import.meta.url).pathname;
const out = new URL("../static/styles/styles.css", import.meta.url).pathname;

async function watchCSS() {
  console.log("Starting esbuild CSS watcher for Sass changes...");

  // Use esbuild's context and watch API for continuous compilation
  const ctx = await esbuild.context({
    entryPoints: [entry],
    bundle: true,
    outfile: out,
    plugins: [sassPlugin()],
    // For development, don't minify and generate sourcemaps
    minify: false,
    sourcemap: true,
  });

  // Start watching the files
  await ctx.watch();

  console.log("esbuild is now watching your Sass files. Press Ctrl+C to stop.");
  // The 'await ctx.watch()' keeps the Deno process alive and watching
}

if (import.meta.main) {
  await watchCSS();
}
