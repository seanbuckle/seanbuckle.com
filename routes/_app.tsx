import { type PageProps } from "$fresh/server.ts";
import Layout from "./_layouts.tsx";
import { TitleProvider } from "../context/TitleContext.tsx";
export default function App({ Component }: PageProps) {
  const title = "Sean Buckle";
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/styles.css" />
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
