import dynamic from 'next/dynamic'
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import { useRef, useState } from "react";
const Onebedroomitem = dynamic(() => import('./Onebedroomitem'), {ssr: false})
import ImageOne from '../assets/1 Bed, 1.jpg'
import ImageTwo from '../assets/1 Bed, 2.jpg'
import ImageThree from '../assets/Comex-Homes---Nyayo-View-Suites-1.jpg'
import ImageFour from '../assets/Bedroom.jpeg'
import ImageFive from '../assets/ComexHomes.jpg'
import ImageSix from '../assets/ComexHomesNyayoLoves.jpg'
import ImageSeven from '../assets/One Bedroom Sitting-COMEXHOMES-NYAYO-VIEW-SUITES.jpeg'
import ImageEight from '../assets/SittingRoom-OneBedroom.jpg'
import ImageNine from '../assets/SlidersRoofTop.jpg'
import ImageTen from '../assets/SlidersRoofTop-1.jpg'
import ImageEleven from '../assets/Studio.jpeg'
import ImageTwelve from '../assets/Studio 1.jpg'
import ImageThirteen from '../assets/Studio 1-1.jpg'
import ImageFourteen from '../assets/StudioROOM.jpg'
import ImageFifteen from '../assets/WhatsApp Image 2021-12-22 at 19.49.04.jpeg'
import ImageSixteen from '../assets/WhatsApp Image 2022-02-10 at 10.53.58 PM.jpeg'

function Onebedroomslider() {

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    let refferHere = useRef(0);


    const handleClick = (direction) => {
    setIsMoved(true);
    let distance = refferHere.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      refferHere.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      refferHere.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  

  const Images = [
    {
      id: 0,
      src: ImageSixteen,
      alt: 'image slider Four'
    },
    {
      id: 1,
      src: ImageFifteen,
      alt: 'image slider Five'
    },
    {
      id: 2,
      src: ImageFourteen,
      alt: 'image slider Six'
    },
    {
      id: 3,
      src: ImageThirteen,
      alt: 'image slider Seven'
    },
    {
      id: 4,
      src: ImageTwelve,
      alt: 'image slider Eight'
    },
    {
      id: 5,
      src: ImageEleven,
      alt: 'image slider Nine'
    },
    {
      id: 6,
      src: ImageTen,
      alt: 'image slider Ten'
    },
    {
      id: 7,
      src: ImageNine,
      alt: 'image slider Eleven'
    },
    {
      id: 8,
      src: ImageEight,
      alt: 'image slider Twelve'
    },
    {
      id: 9,
      src: ImageSeven,
      alt: 'image slider ImageThirteen'
    },
    {
      id: 10,
      src: ImageSix,
      alt: 'image slider ImageFourteen'
    },
    {
      id: 11,
      src: ImageFive,
      alt: 'image slider ImageFifteen'
    },
    {
      id: 12,
      src: ImageFour,
      alt: 'image slider ImageSixteen'
    },
    {
      id: 13,
      src: ImageThree,
      alt: 'image slider ImageSeventeen'
    },
    {
      id: 14,
      src: ImageTwo,
      alt: 'image slider ImageEighteen'
    },
    {
      id: 15,
      src: ImageOne,
      alt: 'image slider ImageNineteen'
    }
  ]

    return (
        <div style={{marginTop:'30px'}} className='list'>
            <div className="wrapper">
                <AiOutlineArrowLeft className="sliderArrow left" onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }}
                />
                <div className="container" ref={refferHere}>

                    {
                    Images.map((image) => (
                      <Onebedroomitem key={image.id} index={image.id} src={image.src} alt={image.alt} />
                    ))
                  }

                    {/* <Onebedroomitem index={0} /> */}
                </div>

                <AiOutlineArrowRight className="sliderArrow right" onClick={() => handleClick("right")}
        />
            </div>

        </div>
    )
}

export default Onebedroomslider