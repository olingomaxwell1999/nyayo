import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function BedroomStudio() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  const brochure = "https://www.nyayoviewsuites.com/NYAYOCATALOGUE.pdf";

  const handleClick = (url) => {
    console.log("This button has been clicked");

    //making the pdf a link
    const fileName = url.split("/").pop();

    //creating an anchor tag
    const aTag = document.createElement("a");

    //adding the href attribute
    aTag.href = url;

    //adding the download attribute and the pdf link attribute
    aTag.setAttribute("download", fileName);

    //adding the newly created element to the body
    document.body.appendChild(aTag);

    //activating the click functionality
    aTag.click();

    //removing the aTag after clicking
    aTag.remove();
  };

  const runHandleClick = () => {
    handleClick(brochure);
  };

  return (
    <div data-aos="fade-up" className="amenities-first-text">
      <div className="top-a">
        <h2 className="mb-4">ONE BEDROOM</h2>

        <p>
          The light filled, modern masterpiece 1 bedroom, is well designed with
          floor to ceiling windows offering amazing views to Nyayo Stadium and
          CBD. The bedroom boasts of a well built in robes and are serviced by
          spacious bathrooms. These units sits on a built up areas of
          approximately<strong>452SQFT</strong>for an
          <strong>Executive One Bedroom</strong>and
          <strong>398SQFT</strong>for an <strong>Executive One Bedroom</strong>
        </p>
      </div>

      <div className="bottom-layer">
        <button className="btn" onClick={runHandleClick}>
          Download Brochure
        </button>
      </div>
    </div>
  );
}

export default BedroomStudio;
