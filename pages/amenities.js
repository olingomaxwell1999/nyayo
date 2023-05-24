import dynamic from 'next/dynamic'
import Head from 'next/head'
const Amenitiesfirst = dynamic(() => import('@/components/Amenitiesfirst') , { ssr: false })
const Amenitiessecond = dynamic(() => import('@/components/Amenitiessecond') , { ssr: false })
const Amenitiesslider = dynamic(() => import('@/components/Amenitiesslider') , { ssr: false })
const BannerAmenities = dynamic(() => import('@/components/BannerAmenities') , { ssr: false })
const Cityamenities = dynamic(() => import('@/components/Cityamenities') , { ssr: false })
const Coveramenities = dynamic(() => import('@/components/Coveramenities') , { ssr: false })

function amenities() {
  return (
    <div>
      <Head>
        <title>Amenities | Nyayo View Suites</title>
        <meta name="keywords" content="Nyayo view suites, appartments, buy house, rent house, monthly plans, appartments on sale" />
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
      <BannerAmenities/>
      <Amenitiesfirst/>
      <Coveramenities/>
      <Amenitiessecond/>
      <Amenitiesslider/>
      <Cityamenities/>
    </div>
  )
}

export default amenities