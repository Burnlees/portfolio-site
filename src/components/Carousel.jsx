import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = ({ project }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    // Ensure the slider updates when the component mounts
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0, true);
    }

    // Force a resize event to ensure proper initialization
    const handleResize = () => {
      window.dispatchEvent(new Event("resize"));
    };

    // Trigger the resize event after a delay to ensure images are loaded
    setTimeout(handleResize, 1000);
  }, [project.carouselImages]);
  
  return (
    <div className="slider-container max-w-64 rounded-xl">
      <Slider ref={sliderRef} {...settings}>
        {project.carouselImages.map((image) => (
          <div key={image.id} className="w-full h-[36rem]">
            <img
              src={image.imgPath}
              className="w-full h-full object-cover rounded-xl"
              alt={`Slide ${image.id}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

//   return (
//     <>
//       <div className="carousel rounded-box w-96">
//         {project.carouselImages.map((image) => {
//           return (
//             <div id={image.id} className="carousel-item w-full">
//               <img src={image.imgPath} className="object-cover"/>
//             </div>
//           );
//         })}
//       </div>
//       <div className="flex w-full justify-center gap-2 py-2">
//         {project.carouselImages.map((image) => {
//           return (
//             <a href={`#${image.id}`} className="btn btn-xs">
//               {image.id[image.id.length - 1]}
//             </a>
//           );
//         })}
//       </div>
//     </>
//   );
