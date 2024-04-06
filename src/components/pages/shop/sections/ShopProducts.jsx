import { useContext } from "react";
import Card from "../../../Card";
import tw from "tailwind-styled-components";
import ShopContext from "../../../context/ShopContext";
import { AnimatePresence } from "framer-motion";
import { Spinner } from "@chakra-ui/react";

export default function ShopProducts() {
  const { shownProducts, gridCols, products, visibleCards, setVisibleCards } =
    useContext(ShopContext);

  return (
    <AnimatePresence>
      <Container $columns={gridCols}>
        {products.length > 0 ? (
          shownProducts.length > 0 ? (
            <>
              {shownProducts.slice(0, visibleCards).map((product, i) => (
                <Card {...{ gridCols, product }} key={"one-column" + i} />
              ))}
              {shownProducts.length > visibleCards && (
                <LoadMore>
                  <button onClick={() => setVisibleCards((prev) => prev + 20)}>
                    load more +
                  </button>
                </LoadMore>
              )}
            </>
          ) : (
            <NoProducts>no products were found.</NoProducts>
          )
        ) : (
          <NoProducts>
            <Spinner />
          </NoProducts>
        )}
      </Container>
    </AnimatePresence>
  );
}

const Container = tw.div`
${({ $columns }) =>
  $columns === 3
    ? "grid-cols-3"
    : $columns === 4
    ? "grid-cols-4"
    : "grid-cols-1"}
grid 
lg:gap-x-4
gap-x-2
gap-y-8
lg:w-[80%]
`;

const NoProducts = tw.div`
h-full
flex 
justify-center
items-start
text-4xl
col-span-full
`;

const LoadMore = tw.div`
[&>button]:text-thickRed
[&>button:hover]:text-black
flex 
justify-center 
items-center 
col-span-full
text-lg 
font-medium
`;
