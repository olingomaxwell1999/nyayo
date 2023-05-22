
import dynamic from 'next/dynamic'
import Head from 'next/head'

const Onebedroomfirst = dynamic(() => import('@/components/Onebedroomfirst'), {ssr: false})
const Onebedroomcover = dynamic(() => import('@/components/Onebedromcover'), {ssr: false})
const Onebedroomslider = dynamic(() => import('@/components/Onebedromslider'), {ssr: false})
const ResidenceBanner = dynamic(() => import('@/components/ResidenceBanner'), {ssr: false})
const Studiofirst = dynamic(() => import('@/components/Studiofirst'), {ssr: false})
const Studiosecond = dynamic(() => import('@/components/Studiosecond'), {ssr: false})

function residences() {
  return (
    <div>
      <Head>
        <title>Residences | Nyayo View Suites</title>
        <meta name="keywords" content="Nyayo view suites, appartments, buy house, rent house, monthly plans, appartments on sale" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
      dangerouslySetInnerHTML={{
        __html: `
          function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"6f02183d305d64c812fe08ab54de6042"})});
        `,
      }}
    ></script>
      </Head>
      <ResidenceBanner/>
      <Onebedroomfirst/>
      <Studiofirst/>
      <Onebedroomslider/>
      <Onebedroomcover/>
      <Studiosecond/>
    </div>
  )
}

export default residences