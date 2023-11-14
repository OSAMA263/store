import Slider from "./sections/Swiper";
import NewProducts from "./sections/NewProducts";
import Discount from "./sections/Discount";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../../state/slices/client/ProductsSlice";
import { fetchCategories } from "../../../state/slices/client/CategoriesSlice";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const categorieState = useSelector((state) => state.categories);

  // set categories in LS
  useEffect(() => {
    !localStorage.categories && dispatch(fetchCategories());
    localStorage.setItem("categories", JSON.stringify(categorieState));
  }, [categorieState]);

  return (
    <>
      <Slider />
      <NewProducts />
      <Discount />
    </>
  );
}

export default Home;
