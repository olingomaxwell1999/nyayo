import React,{useState} from 'react'
import Onebedroommodal from './Onebedroommodal'

function Onebedroomfirst() {

  const [openModal, setOpenModal] = useState(false)

  const handleClick = () => {
    setOpenModal(true)
  }

  return (
    <div className='amenities-second pos'>
        <div className="amenities-first-heading">
            <h3>BREATHTAKING VIEWS</h3>
            <h2>WELL DESIGNED ONE BEDROOM LAYOUTS</h2>
        </div>
        <div className="amenities-first-text">
            <p>The light filled, modern masterpiece 1 bedroom, is well designed with floor to ceiling windows offering amazing views to Nyayo Stadium and CBD. The bedroom boasts of a well built in robes and are serviced by spacious bathrooms. These units sits on a built up areas of approximately<strong> 280sqft</strong> for a <strong> junior 1BR, 300sqft </strong>for  <strong>1BR</strong> and <strong>340sqft </strong>for a <strong>Deluxe 1BR</strong></p>

        </div>

        <div style={{marginTop:'30px'}} className='btn-area'>
          <button onClick={handleClick} className="btn">view floor plan</button>
        </div>

        {openModal ? (
      <Onebedroommodal closeModal={setOpenModal}/>
    ) : null}
    </div>
  )
}

export default Onebedroomfirst