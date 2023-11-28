import { useEffect, useState } from "react";
import ShopContext from "./ShopContext";
import { useDispatch } from "react-redux";
import { useProductsState } from "../../state/useStates";
import { fetchProducts } from "../../state/slices/client/ProductsSlice";

export default function ShopContextProvider({ children }) {
  const dispatch = useDispatch();
  const products = useProductsState();
  const [gridCols, setGridCols] = useState(4);
  const [shownProducts, setShownProducts] = useState([...products]);
  const [visibleCards, setVisibleCards] = useState(20);
  const [QTY, setQTY] = useState(1);
  // store the products in the ls
  // why?so we dont have to fetch the prodcut every time the user inther the fuckin page..iguess
  useEffect(() => {
    !localStorage.products && dispatch(fetchProducts());
    localStorage.setItem("products", JSON.stringify(products));
    setShownProducts([...products]);
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
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
