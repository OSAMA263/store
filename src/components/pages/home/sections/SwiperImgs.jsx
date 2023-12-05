import SwiperImages, { SwiperNavigateBtns } from "../../../Swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import tw from "tailwind-styled-components";
import MainButton from "../../../shared/MainButton";
import { swiperImgs } from "../data";
import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import LazyImage from "../../../LazyImage";

export default function SwiperImgs() {
  const [activeSlide, setActiveSlide] = useState(0);
  //swiper props
  const swiperProps = {
    swiperVariants: {
      loop: true,
      speed: 1500,
      allowTouchMove: false,
      autoplay: {
        delay: 5000,
      },
      pagination: { clickable: true },
      navigation: {
        nextEl: "#next",
        prevEl: "#prev",
      },
      modules: [Navigation, Autoplay, Pagination],
      onTransitionStart: (e) => setActiveSlide(e.realIndex),
    },
    swiperStyles: "h-[100dvh]",
  };

  return (
    <SwiperImages swiperProps={swiperProps}>
      {swiperImgs.map(({ bg, title, src }, i) => (
        // lazyload component
        <SwiperSlide
          style={{
            backgroundImage: `url('${bg}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition:"center"
          }}
          key={i}
        >
          <SlideContainer>
            {/* text--------------- */}
            <SlideContent>
              <SlideElement custom={{ delay: 1, i, activeSlide }}>
                <h1 className="text-sm sm:text-base">{title}</h1>
              </SlideElement>
              <SlideElement custom={{ delay: 2, i, activeSlide }}>
                <h1 className="text-2xl sm:text-3xl xl:text-5xl">
                  Feeling relax day, <br className="max-[600px]:hidden" /> Enjoy weekend
                </h1>
              </SlideElement>
              <SlideElement custom={{ delay: 3, i, activeSlide }}>
                <MainButton>
                  <NavLink to="/shop">SHOP NOW</NavLink>
                </MainButton>
              </SlideElement>
            </SlideContent>
            {/* img------------- */}
            <motion.div {...ImgAnimation} custom={{ i, activeSlide }}>
              <LazyImage src={src} styles="xl:h-[460px] xl:w-[440px]" />
            </motion.div>
          </SlideContainer>
        </SwiperSlide>
      ))}
      {/* navigate buttons */}
      <SwiperNavigateBtns />
    </SwiperImages>
  );
}

const SlideElement = ({ children, custom }) => {
  return (
    <motion.div custom={custom} {...elementsAnimation}>
      {children}
    </motion.div>
  );
};
// animations variants-----
const elementsAnimation = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: ({ i, activeSlide, delay }) => ({
    y: i === activeSlide ? 0 : 80,
    opacity: i === activeSlide ? 1 : 0,
    transition: {
      duration: 0.6,
      delay: 0.4 * delay + 1.5,
    },
  }),
};
//imge variants animation
const ImgAnimation = {
  initial: {
    scale: 0.1,
    opacity: 0,
  },
  animate: ({ i, activeSlide }) => ({
    scale: i === activeSlide ? 1 : 0,
    opacity: i === activeSlide ? 1 : 0,
    transition: {
      duration: 1.3,
      delay: i !== activeSlide ? 1 : 0,
    },
  }),
};

const SlideContent = tw(motion.div)`
[&>*]:font-medium
[&>*]:tracking-widest 
space-y-6
`;

const SlideContainer = tw.div`
grid
grid-cols-2
sm:gap-x-20
h-full
items-center
2xl:w-[60%]
lg:w-[80%]
w-[95%]
mx-auto
`;
