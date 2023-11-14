import { AiOutlinePlayCircle } from "react-icons/ai";
import tw from "tailwind-styled-components";

export default function Video() {
  return (
    <Container>
      <Link className="-left-10 rotate-[-90deg]">link</Link>
      <Thumbnail>
        <img
          className="absolute h-full -z-10 brightness-50"
          src="/bg.png"
          alt=""
        />
        <button className="hover:[&>svg]:scale-125 text-6xl">
          <AiOutlinePlayCircle />
        </button>
        <h1 className="tracking-widest"> OUR STORY</h1>
      </Thumbnail>
      <Link className="rotate-[90deg] -right-10">link</Link>
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
`;

const Container = tw.div`
my-1
relative 
flex 
items-center 
gap-x-6 
h-[80dvh]
`;
