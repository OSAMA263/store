import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import tw from "tailwind-styled-components";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

export default function SwiperImages({ swiperProps, children }) {
  const { swiperVariants, swiperStyles } = swiperProps;

  return (
    <Swiper
      className={swiperStyles + " relative [&>.swiper-slide]:h-ful"}
      {...swiperVariants}
    >
      {children}
    </Swiper>
  );
}

export const SwiperNavigateBtns = () => {
  return (
    <>
      <Button aria-label="next-button" className="right-0 mr-16" id="next">
        <MdKeyboardDoubleArrowRight />
      </Button>
      <Button aria-label="prev-button" className="left-0 ml-16" id="prev">
        <MdKeyboardDoubleArrowLeft />
      </Button>
    </>
  );
};

const Button = tw.button`
absolute
text-3xl
z-[6969]
top-1/2
p-3
-translate-y-1/2
bg-white
hover:bg-gray-300
`;
