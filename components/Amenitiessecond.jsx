import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Amenitiessecond() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos='fade-up' className='amenities-second'>
        <div className="amenities-first-heading">
            <h3>REFINED</h3>
            <h2>LIVING</h2>
            
        </div>
        <div className="amenities-first-text">
            <p>Nyayo view suites provides a rare opportunity
to buy into an exclusive and unique new
development in a spectacular setting in
Nairobi West overlooking Nyayo Stadium.
This distinctive and elegant address is
moments away from all that Nairobi
offers.
</p>
        </div>
    </div>
  )
}

export default Amenitiessecond