import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import tw from "tailwind-styled-components";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

export default function SwiperImages({ swiperProps, children }) {
  const { swiperVariants, swiperStyles } = swiperProps;

  return (
    <Swiper
      className={swiperStyles + " relative"}
      {...swiperVariants}
    >
      {children}
    </Swiper>
  );
}

export const SwiperNavigateBtns = () => {
  return (
    <>
      <Button aria-label="next-button" className="right-0 mr-2 xl:mr-16" id="next">
        <MdKeyboardDoubleArrowRight />
      </Button>
      <Button aria-label="prev-button" className="left-0 ml-2 xl:ml-16" id="prev">
        <MdKeyboardDoubleArrowLeft />
      </Button>
    </>
  );
};

const Button = tw.button`
absolute
sm:text-3xl
text-xl
z-[6969]
lg:top-1/2
top-[90%]
p-3
-translate-y-1/2
bg-white
hover:bg-gray-300
`;
