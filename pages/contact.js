import Enquirestrip from "@/components/Enquirestrip";
import dynamic from "next/dynamic";
import Head from "next/head";
const Contactarea = dynamic(() => import("@/components/Contactarea"), {
  ssr: false,
});
const Contactsbanner = dynamic(() => import("@/components/Contactsbanner"), {
  ssr: false,
});
const Locationcover = dynamic(() => import("@/components/Locationcover"), {
  ssr: false,
});

function contact() {
  return (
    <div>
      <Head>
        <title>Contact Us | Nyayo View Suites</title>
        <meta
          name="keywords"
          content="Nyayo view suites, appartments, buy house, rent house, monthly plans, appartments on sale"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
      <Contactsbanner />
      <Contactarea />
      <Locationcover />
      <Enquirestrip />
    </div>
  );
}

export default contact;
