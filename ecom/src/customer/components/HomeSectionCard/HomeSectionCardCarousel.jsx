import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "./HomeSectionCard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";


const HomeSectionCardCarousel = ({data,SectionName}) => {
  const carouselRef = useRef(null); // ✅ ref for AliceCarousel
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev(); // ✅ use built-in method
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext(); // ✅ use built-in method
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.slice(0,10)
    .map((item, i) => <HomeSectionCard key={i} product={item} />);

  return (
    <div className="border">
    <h2 className="text-3xl font-semibold text-gray-800 pt-5 pl-5">{SectionName ? SectionName : "Featured Products"}</h2>
      <div className="relative p-5 text-2xl font-semibold text-gray-800  ">
        <AliceCarousel
          ref={carouselRef} // ✅ attach ref
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
      

      
      {activeIndex !== 0 && (
        <button
          onClick={slidePrev}
          className="absolute top-1/2 -translate-y-1/2 left-0 bg-white p-2 rounded-full shadow-lg flex items-center justify-center"
        >
          <ChevronLeftIcon />
        </button>
      )}

      {activeIndex !== items.length - 5 && (
        <button
          onClick={slideNext}
          className="absolute top-1/2 -translate-y-1/2 right-0 bg-white p-2 rounded-full shadow-lg flex items-center justify-center"
        >
          <ChevronLeftIcon className="rotate-180" />
        </button>
      )}
    </div>
    </div>
  );
};

export default HomeSectionCardCarousel;
