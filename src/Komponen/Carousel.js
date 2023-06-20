import { Carousel, CarouselItem } from "react-bootstrap";
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'


export const KontenCarousel = () => {
    const divstyle = {
        height: '500px',
    };

    return (
        <>
        <Carousel>
            <Carousel.Item interval={1200}>
                <img className="d-block w-100" style={divstyle} src={image1}/>
                <Carousel.Caption>
                    <h3>First Slide</h3>
                    <p>ini KontenCarousel ini ina itu ono ini</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className="d-block w-100" style={divstyle} src={image2}/>
                <Carousel.Caption>
                    <h3>Second Slide</h3>
                    <p>ini KontenCarousel ini ina itu ono ini second</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={900}>
                <img className="d-block w-100" style={divstyle} src={image3}/>
                <Carousel.Caption>
                    <h3>Third Slide</h3>
                    <p>ini KontenCarousel ini ina itu ono ini Third</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>

    )
}