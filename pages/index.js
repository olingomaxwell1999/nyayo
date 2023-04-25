import Aboutteam from '@/components/Aboutteam'
import City from '@/components/City'
import Cover from '@/components/Cover'
import VideoArea from '@/components/VideoArea'
import dynamic from 'next/dynamic'
import Head from 'next/head'
const Homebanner = dynamic(() => import('@/components/Mainbanner'), {ssr:false})
const Welcomehome = dynamic(() => import('@/components/Welcomehomepage'), {ssr:false})
const BedroomStudio = dynamic(() => import('@/components/BedroomStudio'), {ssr: false})

export default function Home() {
  return (
    <>
      <Head>
        <title>Nyayo View Suites</title>
        <meta name="description" content="The official Nyayo View Suites is an area of residence ready to be bought. Here you will find all the information you need." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homebanner/>
      <Welcomehome/>
      <BedroomStudio/>
      <VideoArea/>
      <City/>
      <Cover/>
      <Aboutteam/>
    </>
  )
}
