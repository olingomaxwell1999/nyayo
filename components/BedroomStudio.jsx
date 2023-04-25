import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function BedroomStudio() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  const brochure = 'http://localhost:3000//Comex+Homes+Nyayo+View+Suites.pdf'

  const handleClick = (url) => {
    console.log('This button has been clicked')

    //making the pdf a link
    const fileName = url.split("/").pop()

    //creating an anchor tag
    const aTag = document.createElement('a')

    //adding the href attribute
    aTag.href = url

    //adding the download attribute and the pdf link attribute
    aTag.setAttribute("download", fileName)

    //adding the newly created element to the body 
    document.body.appendChild(aTag)

    //activating the click functionality
    aTag.click()

    //removing the aTag after clicking
    aTag.remove()
  }

  const runHandleClick = () => {
    handleClick(brochure)
  }

  return (
    <div data-aos='fade-up' className='studiobedroom'>
        <div className="top-layer">
            <div className="side">
                <h2>one bedroom</h2>

                <p>The light filled, modern masterpiece 1 bedroom, is well designed with floor to ceiling windows offering amazing views to Nyayo Stadium and CBD. The bedroom boasts of a well built in robes and are serviced by spacious bathrooms. These units sits on a built up areas of approximately<strong> 280sqft</strong> for a <strong> junior 1BR, 300sqft </strong>for  <strong>1BR</strong> and <strong>340sqft </strong>for a <strong>Deluxe 1BR</strong></p>
                
            </div>
            <div className="middle-line"></div>
            <div className="side">
                <h2>studios</h2>

                <p>A spacious studio featuring well-crafted living spaces with a built up area of approximately<strong> 200sqft </strong> for a <strong>junior Studio</strong> and <strong>240sqft</strong> for a <strong>superior studio.</strong> Every detail is carefully taken into account, giving you a unit with a high-end interior finish and a perfect blend of light , space and luxury.</p>
            </div>
        </div>
        <div className="bottom-layer">
            <button className='btn-light' onClick={runHandleClick}>Download Brochure</button>
        </div>
    </div>
  )
}

export default BedroomStudio
