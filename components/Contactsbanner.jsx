import Image from 'next/image'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Banner from '../assets/WhatsApp Image 2022-02-10 at 10.53.58 PM.jpeg'

function Contactsbanner() {

  useEffect(() => {
    AOS.init({duration:1500})
  })
  
  return (
    <div data-aos="zoom-in" className='banner-contact'>
        <Image priority='true' className="banner-image" src={Banner} alt='Banner Amenities'/>

        {/* <div className="text">
            <h1>contact us</h1>
        </div> */}
    </div>
  )
}

export default Contactsbanner