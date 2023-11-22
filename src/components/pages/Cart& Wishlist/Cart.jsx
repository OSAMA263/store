import ProductsTable from "../../ProductsTable";
import PageHero from "../../PageHero";
import { Td, Th } from "@chakra-ui/react";
import ProductQuantity from "../../ProductQTY";
import { useUserState } from "../../../state/useStates";

export default function Cart() {
  const { cart } = useUserState();

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
            products: cart,
          }}
        />
      </div>
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
const TBodyContent = ({product}) => {

  return (
    <>
      <Td>
        <ProductQuantity product={product} />
      </Td>
      <Td className="font-semibold">${product.QTY*product.price}</Td>
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
