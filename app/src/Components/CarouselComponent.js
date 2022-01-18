import { Carousel, Container } from 'react-bootstrap'
import img from '../img.jpg'

import React, { useState } from 'react'

export default function CarouselComponent() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
    return (
        <div>
          <Container activeIndex={index} onSelect={handleSelect} style={{ marginTop :'15px'}}>
            <Carousel>
              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img}
                    alt="First slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img}
                    alt="Second slide"
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={img}
                    alt="Third slide"
                  />
              </Carousel.Item>
              
            </Carousel>
          </Container>
          
        </div>
    )
}
