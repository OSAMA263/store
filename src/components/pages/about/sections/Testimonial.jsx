import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import tw from "tailwind-styled-components";
import { sliderData } from "../data";

export default function Testimonial() {
  return (
    <Container>
      <div className="mx-auto w-[60%] space-y-16">
        <h1 className="text-5xl text-center">Testimonial</h1>
        <Slider />
      </div>
    </Container>
  );
}

const Slider = () => {
  return (
    <Swiper {...swiperProps}>
      {sliderData.map(({ description, name, role }, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-rows-2 space-y-10">
            <h1 className="font-semibold leading-loose text-lightGray">
              {description}
            </h1>
            <div className="flex gap-x-4">
              <img src="/bg.png" className="w-16 h-16 rounded-full" alt="" />
              <div className="font-semibold">
                <h1 className="font-bold">{name}</h1>
                <h1 className="text-lightGray">/ {role}</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const swiperProps = {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 40,
  loop: true,
  grabCursor: true,
};

const Container = tw.div`
py-28
bg-[url('/bg.png')]
`;