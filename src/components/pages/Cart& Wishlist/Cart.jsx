import ProductsTable from "../../ProductsTable";
import PageHero from "../../PageHero";
import { Td, Th } from "@chakra-ui/react";
import tw from "tailwind-styled-components";
import { FaCartShopping } from "react-icons/fa6";
import NoProductsAdded from "./NoProductsAdded";

export default function Cart() {
  return (
    <>
      <PageHero title="My cart">
        <h1 className="text-lightGray">cart</h1>
      </PageHero>
      <div className="my-28">
        <ProductsTable
          {...{
            TBodyContent,
            THeadContent,
            TFootContent,
            ClearAllBtn: "CLEAR CART",
          }}
        />
      </div>
      <NoProductsAdded
        title="No items found in cart"
        Icon={<FaCartShopping />}
      />
    </>
  );
}

const THeadContent = () => {
  return (
    <>
      <Th>QUANTITY</Th>
      <Th>TOTAL</Th>
    </>
  );
};
const TBodyContent = () => {
  return (
    <>
      <Td>
        <ProductQuantity />
      </Td>
      <Td className="font-semibold">$1000.0</Td>
    </>
  );
};

const TFootContent = () => {
  return (
    <>
      {/* subtotal */}
      <Td className="text-xl font-bold text-thickRed"></Td>
    </>
  );
};

const ProductQuantity = () => {
  return (
    <QuentityWrapper>
      <button>-</button>
      <h1>1</h1>
      <button>+</button>
    </QuentityWrapper>
  );
};

const QuentityWrapper = tw.div`
[&>button]:text-black
[&>button]:text-2xl
[&>button:hover]:text-thickRed
flex 
items-center 
justify-between 
text-xl 
font-semibold 
border-b 
border-black
`;
