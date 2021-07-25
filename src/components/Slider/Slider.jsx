import React  from 'react';
import AliceCarousel from 'react-alice-carousel';




const Slider = () => {


    return (
        <>
        
        <AliceCarousel  
         autoHeight={true}
         duration={400}
         autoPlay={true}
         startIndex = {1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={true}
        autoPlayInterval={4000}
        infinite={true}
        disableButtonsControls={true}
        disableDotsControls={false}
        disableSlideInfo={true}      
         >

        <img 
           src="https://wp.pavelmelnik.ru/wp-content/uploads/2021/07/4.jpg"
           className="sliderChild"
           alt='img1'
            />

        <img 
           src="https://wp.pavelmelnik.ru/wp-content/uploads/2021/07/3.jpg"
           className="sliderChild"
           alt='img1'
            />

        <img 
           src="https://wp.pavelmelnik.ru/wp-content/uploads/2021/07/2.jpg"
           className="sliderChild"
           alt='img1'
            />

        <img 
           src="https://wp.pavelmelnik.ru/wp-content/uploads/2021/07/1.jpg"
           className="sliderChild"
           alt='img1'
            />

        <img 
           src="https://wp.pavelmelnik.ru/wp-content/uploads/2021/07/сертификат.png"
           className="sliderChild"
           alt='img1'
            />

        

      </AliceCarousel>
      </>
    )
  
}

export default Slider;