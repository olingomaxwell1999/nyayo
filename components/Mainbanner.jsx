import Image from "next/image";
import banner from "../assets/Exterior 04.jpg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Mainbanner() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <div data-aos="zoom-in" className="main-banner">
      <Image
        priority="true"
        className="banner-image"
        src={banner}
        alt="banner"
      />

      <div className="text">
        <h1>
          Nyayo View Suites <span>ii</span>
        </h1>
        <h3>Nairobi West</h3>
      </div>
    </div>
  );
}

export default Mainbanner;
