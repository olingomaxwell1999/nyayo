import Image from "next/image"
import banner from '../assets/Comex-Homes---Nyayo-View-Suites-1.jpg'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Mainbannernyayo() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos="zoom-in" className="main-banner">
      <Image priority='true' className="banner-image" src={banner} alt='banner'/>

      <div className="text">
        <h1>Nyayo View Suites One</h1>
        <h3>Nairobi West</h3>
      </div>
    </div>
  )
}

export default Mainbannernyayo