import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1'
import banner2 from '../../../images/banner/banner2'
import banner3 from '../../../images/banner/banner3'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <div className='container'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Immigration Expert Lawyer</h3>
                        <p>I handle immigration cases in New Jersey, New York, Pennsylvania and Connecticut and have offices in each state. Call to make an appointment for an office nearest your</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Criminal Expert Lawyer</h3>
                        <p>I handle immigration cases in New Jersey, New York, Pennsylvania and Connecticut and have offices in each state. Call to make an appointment for an office nearest your</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Divorce Lawyer</h3>
                        <p>
                        I handle immigration cases in New Jersey, New York, Pennsylvania and Connecticut and have offices in each state. Call to make an appointment for an office nearest your
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
}


export default Banner;