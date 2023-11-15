import Modal from "../Modal";
import { CardBodyFullWidth } from "../ProductFullWidth";
import { ItemImage } from "../Card";
import tw from "tailwind-styled-components";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { LuGitCompare } from "react-icons/lu";
import ProductQuantity from "../ProductQTY";

export default function ProductModal({ onClose, isOpen }) {
  return (
    <Modal {...{ onClose, isOpen }}>
      <ModalContainer>
        {/* modal close button */}
        <CloseBtn onClick={onClose}>
          <AiOutlineClose />
        </CloseBtn>
        <ItemImage fullHImg="!h-full" imgH="h-[600px]" />
        {/* card body content */}
        <CardBodyFullWidth
          QTY={<ProductQuantity />}
          moreOptionBtns={<SingleProductOptinsBtns />}
        />
      </ModalContainer>
    </Modal>
  );
}

// wishlist && compare buttons
export const SingleProductOptinsBtns = () => {
  return (
    <>
      <OptionBtn>
        <AiOutlineHeart />
      </OptionBtn>
      <OptionBtn>
        <LuGitCompare />
      </OptionBtn>
    </>
  );
};

const OptionBtn = tw.button`
hover:bg-gray-500
hover:text-white
p-3
border
border-gray-500
`;

const CloseBtn = tw.button`
absolute 
top-5
right-6
text-4xl
hover:[&>svg]:rotate-90
`;

const ModalContainer = tw.div`
grid 
relative
items-center 
grid-cols-2 
gap-x-6
min-h-[600px] 
`;
