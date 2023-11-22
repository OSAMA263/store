import { Spinner } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import tw from "tailwind-styled-components";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

export default function LazyImage(props) {
  const { effect,src, placeholder,styles } = props;

  return (
    <LazyLoadImage
      src={src}
      alt={src}
      loading="lazy"
      placeholder={placeholder&&<Loader/>}
      effect={effect&&"black-and-white"}
      className={`${styles} `}
    />
  );
}

const Loader = () => {
  return (
    <Container>
      <Spinner
        w={20}
        h={20}
        speed=".4s"
        thickness="2px"
        emptyColor="#000000"
      />
    </Container>
  );
};

const Container = tw.div`
flex
justify-center
items-center
w-full 
h-full
bg-[#f0f0f0]
overflow-hidden
`;

// product modal swiper
// const [activeSlide, setActiveSlide] = useState(0);
// onTransitionEnd: (e) => setActiveSlide(e.activeIndex),
//
// `${
//   activeSlide === 0 && "[&_#prev]:!opacity-0 [&_#prev]:!invisible "
// } ${
//   activeSlide === swiperImages.length - 1 &&
//   "[&_#next]:!opacity-0 [&_#next]:!invisible "
// }
