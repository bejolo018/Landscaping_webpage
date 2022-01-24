import { Carousel, Container } from 'react-bootstrap'
import BestPic from '../Images/Best Pic.jpg'
import BetterSideGate from '../Images/Better Side Gate.jpg'
import CountryGate2 from '../Images/Country Gate 2.jpg'
import CountryGate from '../Images/Country Gate.jpg'
import DarkDayLong from '../Images/Dark Day Long.jpg'
import DarkDayLonger from '../Images/Dark Day Longer.jpg' 
import OpenFence from '../Images/Open fence.jpg'
import SideGate from '../Images/Side Gate.jpg'

import React, { useState } from 'react'

export default function CarouselComponent() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
    return (
        <div>
          <Container activeIndex={index} onSelect={handleSelect} style={{ marginTop :'15px'}}>
            <h3 style={{textAlign: 'center', color: 'white', textShadow: '2px 2px 4px #000000'}}>Locally owned, and here to help with all your fencing needs.</h3>
            <Carousel style={{ marginTop :'15px'}}>
              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={BestPic}
                    alt="First slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={BetterSideGate}
                    alt="Second slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={CountryGate2}
                    alt="Third slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={DarkDayLonger}
                    alt="Fifth slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={OpenFence}
                    alt="Sixth slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={CountryGate}
                    alt="Seventh slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={DarkDayLong}
                    alt="Eighth slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={SideGate}
                    alt="Ninth slide"
                  />

              </Carousel.Item>

            </Carousel>
          </Container>
          
        </div>
    )
}
