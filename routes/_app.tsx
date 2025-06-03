import { type PageProps } from "$fresh/server.ts";
import Layout from "./_layouts.tsx";
import { TitleProvider } from "../context/TitleContext.tsx";
export default function App({ Component }: PageProps) {
  const title = "Sean Buckle";
  return (
    <html lang="en-GB">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="mobile-web-app-capable" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="description" content="" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="color-scheme" content="dark light" />
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" type="image/ico" />

        <link rel="stylesheet" href="/styles/styles.css" />
      </head>
      <body>
        <TitleProvider title={title}>
          <Layout>
            <Component />
          </Layout>
        </TitleProvider>
      </body>
    </html>
  );
}
