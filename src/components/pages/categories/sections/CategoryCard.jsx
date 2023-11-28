import { useProductsState } from "../../../../state/useStates";
import tw from "tailwind-styled-components";
import LazyImage from "../../../LazyImage";
import { NavLink } from "react-router-dom";

export default function CategoryCard(props) {
  const { cat, thumbnail } = props;
  const products = useProductsState();
  const amountOfProducts = products.filter((pro) => pro.category === cat);

  return (
    <>
      <ProductImg thumbnail={thumbnail} />
      <div className="flex items-center justify-between h-[20%]">
        <div className="text-xl btn-visible transition-all duration-700 leading-6">
          <h1 className="text-lightGray duration-700 transition-all">{cat}</h1>
          <NavLink to="/shop" className="text-thickRed opacity-0 duration-700">
            + Online store
          </NavLink>
        </div>
        {/* amount of product in the cat */}
        <div className="flex items-center gap-x-4">
          <Smallline />
          <small>{amountOfProducts.length}</small>
        </div>
      </div>
    </>
  );
}

const ProductImg = ({ thumbnail }) => {
  return (
    <NavLink to="/shop" className="h-[80%] relative overflow-hidden">
      <Border></Border>
      <div className="h-[600px] relative">
        <LazyImage
          styles="!object-center !absolute !top-0 !w-full !h-full !transition-all !duration-700"
          placeholder
          effect
          src={thumbnail}
        />
      </div>
    </NavLink>
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

const Smallline = tw.span`
w-10
h-[1px]
bg-[#777777]
block
`;
