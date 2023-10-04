import Image from "next/image"
import cover from '../assets/Lounge_angle 2.jpg'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function VideoArea() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div>
        <Image data-aos='fade-up' className='coverimage' src={cover} height={500} alt='cover'/>
    </div>
  )
}

export default VideoArea