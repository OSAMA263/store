import tw from "tailwind-styled-components";
import { Skeleton } from "@chakra-ui/react";
import CardElements from "./CardElements";

export default function Card({ imgH }) {
  // product from props

  return (
    <CardContainer>
      <ItemImage imgH={imgH} />
      <div className="flex flex-col gap-y-4 justify-end mt-4 h-[20%]">
        <ItemDetails
          btnText="+ Add to cart"
          name="a product name here"
          small1="$1250"
          small2="$10"
        />
      </div>
    </CardContainer>
  );
}

export const ItemImage = ({ imgH,shopOneColumn }) => {
  return (
    <div className={`${shopOneColumn} h-[80%] overflow-hidden relative`}>
      {/* images */}
      <div className={`${imgH} cursor-pointer relative`}>
        <Skeleton height="100%" isLoaded>
          <img
            className="img-1 z-[2] absolute w-full !h-full"
            src="/public/bg.png"
            alt=""
          />
          <img
            className="absolute top-0 img-2 opacity-0 w-full !h-full"
            src="/public/bg.png"
            alt=""
          />
        </Skeleton>
      </div>
      <CardElements />
    </div>
  );
};

export const ItemDetails = (props) => {
  const { btnText, name, small1, small2 } = props;

  return (
    <>
      {/*product name & buy btn */}
      <NameWrapper>
        <h1 className="text-lg text-lightGray font-semibold block">{name}</h1>
        <button className="min-w-max font-bold text-lg -bottom-4 absolute opacity-0 text-[#d7122a]">
          {btnText}
        </button>
      </NameWrapper>
      {/* price */}
      <p className="flex items-center space-x-2 font-bold">
        <small className="line-through opacity-50">
          {small1 ?? <Smallline />}
        </small>
        <small>{small2}</small>
      </p>
    </>
  );
};

const Smallline = tw.span`
w-10
h-[1px]
bg-[#777777]
block
`;

const NameWrapper = tw.div`
btn-visible
duration-700 
transition-all 
relative
[&>*]:transition-all
[&>*]:duration-700
`;

export const CardContainer = tw.div`
[&_.img-1]:hover:opacity-0
[&_.img-2]:hover:!opacity-100
[&_.img-2]:hover:brightness-95
[&_.options]:hover:!opacity-100
[&_.options]:hover:gap-y-4
[&_.options]:hover:mt-4
[&_.btn-visible]:hover:-translate-y-4
[&_h1]:hover:opacity-0
[&_h1]:hover:invisible
[&_button]:hover:!opacity-100
rounded-sm
h-fit
overflow-hidden
${({ $oneColumn }) => $oneColumn && $oneColumn}
`;
// wrap around memo?
