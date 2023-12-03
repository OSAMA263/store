import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import tw from "tailwind-styled-components";
import { sliderData } from "../data";
import { Autoplay } from "swiper/modules";

export default function Testimonial() {
  return (
    <Container>
      <div className="mx-auto 2xl:w-[65%] xl:w-[80%] lg:w-[90%] md:w-[95%] container space-y-16">
        <h1 className="text-3xl text-center sm:text-5xl">Testimonial</h1>
        <Slider />
      </div>
    </Container>
  );
}

const Slider = () => {
  return (
    <Swiper {...swiperProps}>
      {sliderData.map(({ description, name, role, img }) => (
        <SwiperSlide key={name}>
          <div className="grid grid-rows-2 space-y-10">
            <h1 className="font-semibold leading-loose text-lightGray">
              {description}
            </h1>
            <div className="flex gap-x-4">
              <img
                src={img}
                loading="lazy"
                className="w-16 h-16 rounded-full"
                alt={role}
              />
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
  centeredSlides: true,
  spaceBetween: 40,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    764: {
      slidesPerView: 2,
    },
  },
  modules: [Autoplay],
};

const Container = tw.div`
py-28
bg-[url('/about/testimonials-bg.webp')]
`;
