import React, { useEffect } from "react";
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import Link from "next/link";

function Enquirestripnyayo() {
  // useEffect(() => {
  //   AOS.init({duration:1500})
  // })

  return (
    <div data-aos="zoom-in" className="enquirestrip">
      <div className="description-area">
        <div className="place">
          <h3>you are viewing</h3>
          <h2>Nyayo View Suites I</h2>
        </div>
        <div className="place">
          <h3>prices from</h3>
          <h2>Sold Out</h2>
        </div>
        <div className="place">
          <h3>completion date</h3>
          <h2>Q1 2024</h2>
        </div>
        <div className="place">
          <h3>payment over</h3>
          <h2>24 Months</h2>
        </div>
        <div className="place">
          <h3>location</h3>
          <h2>Nairobi West</h2>
        </div>
      </div>

      <div className="btn-area">
        <div className="place">
          <Link
            href="https://forms.zohopublic.com/nyayoviewsuites/form/RegisterInterest/formperma/nE9a0VzmSr9TFMS2IdjK1ck6vIUwdrYcxZJD2jOhHZw"
            target="_blank"
          >
            <button className="btn">register interest</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Enquirestripnyayo;
