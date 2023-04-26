import Image from 'next/image'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Banner from '../assets/WhatsApp Image 2021-12-22 at 19.49.04.jpeg'

function BannerAmenities() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos="zoom-in" className='banner-amenities'>
        <Image priority='true' className="banner-image" src={Banner} alt='Banner Amenities'/>

        <div className="text">
          <h1>Amenities</h1>
        </div>
    </div>
  )
}

export default BannerAmenities