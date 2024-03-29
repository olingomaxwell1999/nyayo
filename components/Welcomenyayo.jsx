import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Welcomenyayo() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  const one =
    "Nyayo view suites provides a rare opportunity to buy into an exclusive and unique new development in a spectacular setting in Nairobi West overlooking Nyayo Stadium.";

  const two =
    "This distinctive and elegant address is moments away from all that Nairobi offers.";

  return (
    <div data-aos="fade-up" className="amenities-second">
      <div className="amenities-first-heading">
        <h3>WELCOME TO</h3>
        <h2>NYAYO VIEW SUITES ONE</h2>
      </div>
      <div className="amenities-first-text">
        <p>{one}</p>

        <p>{two}</p>
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

export default Welcomenyayo;
