import Carousel from 'react-bootstrap/Carousel';


function Slider () {
  return (
  <>
   <Carousel >
      <Carousel.Item>
      <img 
      style={{height:'300px'}}

          className="d-block w-100"
          src="https://m.media-amazon.com/images/G/31/img24/feb/Slider/V2/n3_copy_4_PC._SX1500_QL85_.jpg"
          alt="Second slide"
        />
        
        
        <Carousel.Caption>
          <h5>Puspendra Singh-1</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
      // style={{height:'500px'}}
      style={{height:'300px',}}


         className="d-block w-100"
         src="https://m.media-amazon.com/images/G/31/img24/feb/Slider/V2/n3_copy_4_PC._SX1500_QL85_.jpg"

         
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Puspendra Singh-2</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
      style={{height:'300px'}}
      // style={{height:'500px'}}s

          className="d-block w-100"
          src="https://m.media-amazon.com/images/G/31/img24/feb/Slider/V2/n3_copy_4_PC._SX1500_QL85_.jpg"

       
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Puspendra Singh-3</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
  
  
  </>
  ); 
}

export default Slider;





