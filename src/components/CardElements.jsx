import { Tooltip, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { LuGitCompare } from "react-icons/lu";
import tw from "tailwind-styled-components";
import ProductModal from "./shared/ProductModal";

export default function CardElements() {
  return (
    <>
      <CardBadges />
      <CardOptions />
    </>
  );
}

export const CardBadges = () => {
  return (
    <BadgeWrapper>
      <Badge className="bg-[#98d8ca]">-10%</Badge>
      <Badge className="bg-[#c61932]">new</Badge>
    </BadgeWrapper>
  );
};

export const CardOptions = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <OptionsBtns>
        {options.map(({ icon, label }, i) => (
          <Tooltip zIndex="66" hasArrow placement="left" label={label} key={i}>
            <span onClick={label === "Quick view" && onOpen}>{icon}</span>
          </Tooltip>
        ))}
      </OptionsBtns>
      {/* product modal */}
      <ProductModal {...{ isOpen, onClose }} />
    </>
  );
};

const OptionsBtns = tw.div`
options 
duration-700 
transition-all 
text-xl 
mt-8
mr-4
right-0
z-[6969]
top-0
absolute
flex 
gap-y-10 
opacity-0 
flex-col
[&>span]:bg-white
[&>span]:p-[6px]
[&>span]:cursor-pointer
`;

const Badge = tw.span`
rounded-full
w-10
h-10
text-center
flex 
justify-center
items-center
text-sm
text-white
font-bold
`;

const BadgeWrapper = tw.div`
top-0
z-[69]
mt-4
ml-4
left-0
absolute
flex
gap-y-4 
flex-col
`;

const options = [
  { icon: <AiOutlineHeart />, label: "Add to wishlist" },
  { icon: <AiOutlineSearch />, label: "Quick view" },
  { icon: <LuGitCompare />, label: "Add to compare" },
];
