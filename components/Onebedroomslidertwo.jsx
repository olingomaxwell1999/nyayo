import dynamic from 'next/dynamic'
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import { useRef, useState } from "react";
const Onebedroomitem = dynamic(() => import('./Onebedroomitem'), {ssr: false})
import ImageOne from '../assets/Bathroom.jpg'
import ImageTwo from '../assets/Bedroom.jpg'
import ImageThree from '../assets/Exterior 01.jpg'
import ImageFour from '../assets/Exterior 04.jpg'
import ImageFive from '../assets/Gym.jpg'
import ImageSix from '../assets/Lounge_angle 1.jpg'
import ImageSeven from '../assets/Lounge_angle 2.jpg'
import ImageEight from '../assets/Lounge_angle 3.jpg'
import ImageNine from '../assets/Receptiopn.jpg'
import ImageTen from '../assets/Waiting Area.jpg'
import ImageEleven from '../assets/Exterior 03.jpg'
import ImageTwelve from '../assets/Exterior 01b.jpg'
import ImageThirteen from '../assets/Exterior 05.jpg'
import ImageFourteen from '../assets/Exterior 06.jpg'
import ImageFifteen from '../assets/Exterior 06b.jpg'
import ImageSixteen from '../assets/Exterior 07.jpg'

function Onebedroomslidertwo() {

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

export default Onebedroomslidertwo