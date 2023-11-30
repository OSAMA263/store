import tw from "tailwind-styled-components";
import {BsArrowUpShort} from "react-icons/bs"

export default function ScrollTopButton({ isSticky }) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button aria-label="top-page" onClick={handleClick} $isSticky={isSticky}>
      <BsArrowUpShort/>
    </Button>
  );
}

const Button = tw.button`
${({ $isSticky }) =>
  $isSticky ? "opacity-100 visible" : "opacity-0 invisible"}
fixed
bg-[#333333]
w-14
h-14
rounded-full
bottom-10
right-10
z-[69696969696969]
[&>svg]:hover:mb-1
hover:bg-[#abb8c0]
hover:text-[#333333]
text-white
flex
justify-center
items-center
text-4xl
`;
