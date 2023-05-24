import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
  dangerouslySetInnerHTML={{
    __html: `
      function loadScript(a) {
        var b = document.getElementsByTagName("head")[0];
        var c = document.createElement("script");
        c.type = "text/javascript";
        c.src = "https://tracker.metricool.com/resources/be.js";
        c.onreadystatechange = a;
        c.onload = a;
        b.appendChild(c);
      }

      loadScript(function() {
        beTracker.t({ hash: "6f02183d305d64c812fe08ab54de6042" });
      });
    `,
  }}
></script>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
