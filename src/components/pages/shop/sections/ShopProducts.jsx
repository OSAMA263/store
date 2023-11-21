import { useContext } from "react";
import Card from "../../../Card";
import tw from "tailwind-styled-components";
import ShopContext from "../../../context/ShopContext";
import { AnimatePresence } from "framer-motion";

export default function ShopProducts() {
  const { shownProducts, gridCols } = useContext(ShopContext);

  return (
    <Container $columns={gridCols}>
      <AnimatePresence mode="sync">
        {shownProducts !== "" ? (
          // when filtering by title
          shownProducts.length > 0 ? (
            shownProducts
              .slice(0, 23)
              .map((product, i) => (
                <Card {...{ gridCols, product }} key={"one-column" + i} />
              ))
          ) : (
            <NoProducts>loading</NoProducts>
          )
        ) : (
          <NoProducts>no pro</NoProducts>
        )}
      </AnimatePresence>
    </Container>
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
gap-x-4
gap-y-8
w-[80%]
`;

const NoProducts = tw.div`
h-full
flex 
justify-center
items-start
text-4xl
col-span-full
`;
