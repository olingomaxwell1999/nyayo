import Aboutteam from "@/components/Aboutteam";
import City from "@/components/City";
import Cover from "@/components/Covernyayo";
import Enquirestripnyayo from "@/components/Enquirescriptnyayo";
import Onebedroomslider from "@/components/Onebedromslider";
import VideoArea from "@/components/VideoAreaNyayo";
import dynamic from "next/dynamic";
import Head from "next/head";
const Homebanner = dynamic(() => import("@/components/Mainbannernyayo"), {
  ssr: false,
});
const Welcomehome = dynamic(() => import("@/components/Welcomenyayo"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Nyayo View Suites One</title>
        <meta
          name="description"
          content="The official Nyayo View Suites is an area of residence ready to be bought. Here you will find all the information you need."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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

      <Homebanner />
      <Welcomehome />
      <VideoArea />
      <City />
      <Cover />
      <Onebedroomslider />
      <Aboutteam />
      <Enquirestripnyayo />
    </>
  );
}
