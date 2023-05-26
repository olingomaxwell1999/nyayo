import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Locationcover() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos='fade-up' className="location-cover">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7977.56244674401!2d36.81979!3d-1.306412!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1167909e6c29%3A0x49ff00dbcb1c1171!2sNyayo%20View%20Suites!5e0!3m2!1sen!2ske!4v1682560389074!5m2!1sen!2ske" width="100%" height="600px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Locationcover