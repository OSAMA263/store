import { AiOutlinePlayCircle, AiOutlineClose } from "react-icons/ai";
import tw from "tailwind-styled-components";
import Modal from "../../../Modal";
import { useDisclosure } from "@chakra-ui/react";
import LazyImage from "../../../LazyImage";

export default function Video() {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <Container>
      <Link className="md:-left-6 rotate-[-90deg]">link</Link>
      <Thumbnail>
        <div className="absolute h-full img-wrapper -z-10">
          <LazyImage
            effect
            src="about/video-thumbnail.webp"
            styles="h-full -z-10"
          />
        </div>
        <button aria-label="open-video-modal" onClick={onOpen} className="hover:[&>svg]:scale-125 sm:text-8xl text-4xl">
          <AiOutlinePlayCircle />
        </button>
        <h1 className="tracking-widest"> OUR STORY</h1>
      </Thumbnail>
      <Link className="rotate-[90deg] md:-right-6 right-0">link</Link>
      {/* // modal viedo */}
      <Modal {...{ onOpen, isOpen, onClose }}>
        <div className="relative"></div>
        <button aria-label="close-video-modal"
          onClick={onClose}
          className="absolute right-0 text-4xl text-white -top-12"
        >
          <AiOutlineClose />
        </button>
        <div className="h-[70vh]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/QX43QTYyV-8?autoplay=1&quality=low"
            title="im sorry"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Modal>
    </Container>
  );
}

const Link = tw.button`
opinter
text-lightGray
hover:text-black
scale-125
transition-all
absolute
top-1/2
-translate-y-1/2
`;

const Thumbnail = tw.div`
relative
h-full 
w-full
flex 
flex-col
gap-y-10
sm:text-5xl
text-4xl
text-white
items-center
justify-center
[&>.img-wrapper]:brightness-75
[&>.img-wrapper]:transition-all
[&>.img-wrapper]:hover:!brightness-100
`;

const Container = tw.div`
my-1
relative 
flex 
items-center 
gap-x-6 
h-[80dvh]
`;
