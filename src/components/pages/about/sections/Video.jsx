import { AiOutlinePlayCircle, AiOutlineClose } from "react-icons/ai";
import tw from "tailwind-styled-components";
import Modal from "../../../Modal";
import { useDisclosure } from "@chakra-ui/react";
import LazyImage from "../../../LazyImage";

export default function Video() {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <Container>
      <Link className="-left-10 rotate-[-90deg]">link</Link>
      <Thumbnail>
        <div className="absolute img-wrapper -z-10 h-full">
          <LazyImage
            effect
            src="/about/video-thumbnail.png"
            styles="h-full -z-10"
          />
        </div>
        <button onClick={onOpen} className="hover:[&>svg]:scale-125 text-8xl">
          <AiOutlinePlayCircle />
        </button>
        <h1 className="tracking-widest"> OUR STORY</h1>
      </Thumbnail>
      <Link className="rotate-[90deg] -right-10">link</Link>
      {/* // modal viedo */}
      <Modal {...{ onOpen, isOpen, onClose }}>
        <div className="relative"></div>
        <button
          onClick={onClose}
          className="absolute -top-12 text-white right-0 text-4xl"
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
text-5xl
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
