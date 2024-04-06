import { useEffect, useState } from "react";
import ShopContext from "./ShopContext";
import { useProductsState } from "../../state/useStates";
import { useMediaQuery } from "@chakra-ui/react";

export default function ShopContextProvider({ children }) {
  const products = useProductsState();
  const [isSmallDevice] = useMediaQuery("(max-width: 770px)", {
    ssr: false,
  });
  const [isMdDevice] = useMediaQuery("(max-width: 1024px)", {
    ssr: false,
  });
  const [gridCols, setGridCols] = useState(isSmallDevice?1:4);
  const [shownProducts, setShownProducts] = useState([...products]);
  const [visibleCards, setVisibleCards] = useState(20);
  const [QTY, setQTY] = useState(1);

  // change the productsshop for small devices
  useEffect(() => {
    isSmallDevice ? setGridCols(1) : setGridCols(4);
  }, [isSmallDevice]);

  // update the displayed products
  useEffect(() => {
    localStorage.products && setShownProducts([...products]);
  }, [products]);

  return (
    <ShopContext.Provider
      value={{
        gridCols,
        setGridCols,
        shownProducts,
        setShownProducts,
        QTY,
        setQTY,
        visibleCards,
        setVisibleCards,
        products,
        isSmallDevice,
        isMdDevice,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
