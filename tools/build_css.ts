// scripts/build_css.ts
import * as esbuild from "npm:esbuild";
import { sassPlugin } from "jsr:@tsukina-7mochi/esbuild-plugin-sass";

// Define your entry and output paths
const entry = new URL("../static/styles/styles.scss", import.meta.url).pathname;
const out = new URL("../static/styles/styles.css", import.meta.url).pathname;

async function buildCSS() {
  console.log("Building production CSS with esbuild...");
  try {
    // Bundle directly, minified, without sourcemaps
    await esbuild.build({
      entryPoints: [entry],
      bundle: true,
      outfile: out, // This will be your production CSS file
      plugins: [sassPlugin()],
      minify: true, // Minify for production
      sourcemap: false, // No sourcemaps for production
    });
    console.log("Production CSS built successfully to " + out);
  } catch (error) {
    console.error("CSS build failed:", error);
    Deno.exit(1); // Exit with error code if build fails
  } finally {
    esbuild.stop(); // Clean up esbuild resources after build
  }
}

if (import.meta.main) {
  await buildCSS();
}
