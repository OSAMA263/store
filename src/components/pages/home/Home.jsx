import NewProducts from "./sections/NewProducts";
import Discount from "./sections/Discount";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../../state/slices/client/CategoriesSlice";
import SwiperImgs from "./sections/SwiperImgs";
import NavigateAnimation from "../../layout/NavigateAnimation";
import ContentContainer from "../../layout/ContentContainer";

export default function Home() {
  const dispatch = useDispatch();
  const categorieState = useSelector((state) => state.categories);
  // set categories in LS
  useEffect(() => {
    !localStorage.categories && dispatch(fetchCategories());
    localStorage.setItem("categories", JSON.stringify(categorieState));
  }, [categorieState]);

  return (
    <NavigateAnimation>
      <SwiperImgs />
      <ContentContainer>
        <NewProducts />
        <Discount />
      </ContentContainer>
    </NavigateAnimation>
  );
}
