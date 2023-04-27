import React,{useState} from 'react'
import Studiomodal from './Studiomodal'

function Studiofirst() {

    const [openModal, setOpenModal] = useState(false)

  const handleClick = () => {
    setOpenModal(true)
  }

  return (
    <div className='amenities-first'>
        <div className="amenities-first-heading">
            <h3>BREATHTAKING VIEWS</h3>
            <h2>WELL DESIGNED STUDIO LAYOUTS</h2>
        </div>
        <div className="amenities-first-text">
            <p>A spacious studio featuring well-crafted living spaces with a built up area of approximately<strong> 200sqft </strong> for a <strong>junior Studio</strong> and <strong>240sqft</strong> for a <strong>superior studio.</strong> Every detail is carefully taken into account, giving you a unit with a high-end interior finish and a perfect blend of light , space and luxury.</p>
        </div>

        <div style={{marginTop:'30px'}} className='btn-area'>
          <button className="btn-light" onClick={handleClick}>view floor plan</button>
        </div>

        {openModal ? (
      <Studiomodal closeModal={setOpenModal}/>
    ) : null}
    </div>
  )
}

export default Studiofirst