/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Product from "./Product"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay } from 'swiper/modules';
const ExplorePopularDestinations = ({ sectionTitile }) => {

  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("/tourPackages.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => setTours(jsonData))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);


  return (
    <div className="max-w-screen-2xl lg:mx-auto mx-10 md:py-20 py-10" >
      <div className="">
        <h1 className="md:text-4xl text-3xl md:pb-10 pb-5 font-bold">{sectionTitile}</h1>
        <div className="">
          <div>
            <Swiper
              slidesPerView={2}
              spaceBetween={1}
              freeMode={true}
              autoplay={{
                delay: 1500,
              }}
              modules={[FreeMode, Autoplay]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 35,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              className="mySwiper"
            >
              {tours.map((tour, idx) => (
                <SwiperSlide className="" key={idx}>
                  <Product tour={tour} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExplorePopularDestinations