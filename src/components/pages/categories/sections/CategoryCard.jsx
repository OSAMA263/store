import { ItemDetails } from "../../../Card";
import tw from "tailwind-styled-components";

export default function CategoryCard(props) {
  const { name, productsAmount } = props;

  return (
    <>
      <ProductImg />
      <div className="flex items-center justify-between h-[20%]">
        <ItemDetails
          btnText="+ Online store"
          small2={productsAmount}
          name={name}
        />
      </div>
    </>
  );
}

const ProductImg = () => {
  return (
    <a href="" className="h-[80%] relative overflow-hidden">
      <Border></Border>
      <div className="h-[600px] relative">
        <img
          src="public/bg.png"
          className="object-center absolute top-0 !w-full !h-full"
          alt=""
        />
      </div>
    </a>
  );
};

const Border = tw.div`
img-border
w-[80%]
h-[80%]
absolute
left-1/2
top-1/2
z-[69]
-translate-x-1/2
-translate-y-1/2
transition-all
duration-500
border
border-transparent
`;
