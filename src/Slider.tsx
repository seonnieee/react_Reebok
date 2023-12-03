import Carousel from 'react-bootstrap/Carousel';

function Slider(): JSX.Element {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="img/slider/slider1.jpg"
          alt="First slide"
          style={{width:"1800px", height:"840px"}}
         />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/slider/slider3.jpg"
          alt="Second slide"
        style={{width:"1800px", height:"840px"}}/>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/slider/slider2.jpg"
          alt="Third slide"
          style={{width:"1800px", height:"840px"}}/>
        </Carousel.Item>
    </Carousel>
  );
}

export default Slider;