import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

// const items = [
//     <div className="item" data-value="1">1</div>,
//     <div className="item" data-value="2">2</div>,
//     <div className="item" data-value="3">3</div>,
//     <div className="item" data-value="4">4</div>,
//     <div className="item" data-value="5">5</div>,
// ];

// const items =  mainCarouselData.map((item) => {
//     return (
//         <div className="item" data-value={item.path}>
//             <img src={item.path} alt={item.alt || "carousel item"} />
//         </div>
//     );
// });

const items = mainCarouselData.map((item) => (
    <img className='cursor-pointer' src={item.image} alt='' />
));



const MainCarousel = () => {
  return (
      <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
      />
  )
}

export default MainCarousel



