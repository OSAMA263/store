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
sm:p-4
p-1
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
sm:text-4xl
text-2xl
`;
