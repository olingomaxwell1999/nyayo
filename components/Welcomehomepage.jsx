import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Welcomehomepage() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <div data-aos="fade-up" className="amenities-second">
      <div className="amenities-first-heading">
        <h3>WELCOME TO</h3>
        <h2>NYAYO VIEW SUITES TWO</h2>
      </div>
      <div className="amenities-first-text">
        <p>
          Serenely fronting Nyayo Stadium yet located on Nairobi West main road
          artery. Nyayo View Suite II is artfully centered in a key Nairobi hub
          just minutes from all major city suburbs - Westlands, Lavington and
          Kilimani while just a few short meters from celebrated restaurants,
          schools, hospitals and boutiques of the urban life in Nairobi.
        </p>

        <p>
          This distinctive and elegant address is moments away from all that
          Nairobi offers.
        </p>
      </div>

      <div style={{ marginTop: "20px" }} className="btn-area">
        <Link
          href="https://share-eu1.hsforms.com/1Q0NJQsh4Tvy6GPQ9g2QnMwfblz8"
          target="_blank"
        >
          <button className="btn">register interest</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcomehomepage;
