import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import tw from "tailwind-styled-components";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

const arr = Array.from({ length: 6 });

function Slider() {
  return (
    <>
      <Swiper
        className="relative custom-pagination h-[100dvh] [&>.swiper-slide]:h-full"
        {...swiperProps}
      >
        {arr.map((slide, i) => (
          <SwiperSlide key={i}>
            <img className="!h-full" src="public/bg.png" alt="" />
          </SwiperSlide>
        ))}

        <NavigationBtns />
      </Swiper>
    </>
  );
}

const NavigationBtns = () => {
  return (
    <>
      <NextBtn id="next">
        <MdKeyboardDoubleArrowRight />
      </NextBtn>
      <PrevBtn id="prev">
        <MdKeyboardDoubleArrowLeft />
      </PrevBtn>
    </>
  );
};

export default Slider;

const NextBtn = tw.button`
absolute
text-4xl
z-[6969]
right-0
top-1/2
mr-16
-translate-y-1/2
`;
const PrevBtn = tw.button`
absolute
z-[6969]
left-0
ml-16
text-4xl
top-1/2
-translate-y-1/2
`;

const swiperProps = {
  loop: true,
  speed: 1500,
  allowTouchMove:false,
  // autoplay:true,
  pagination: { clickable: true },
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
  modules: [Navigation, Pagination, Autoplay],
};
