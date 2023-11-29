import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html data-theme="cmyk">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>A13</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Foldit:wght@600&family=Lato:wght@700&family=Lato:wght@700&family=Montserrat:wght@800&family=Work+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        >
        </link>

        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@3.8.3/dist/full.css"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="font-work text-xl">
        <Component />
      </body>
    </html>
  );
}
