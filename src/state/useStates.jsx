import { useSelector } from "react-redux";

const useProductsState = () => {
  const products = useSelector((state) => state.products);
  return products;
};

const useCategoriesState = () => {
  const categories = useSelector((state) => state.categories);
  return categories;
};

const useUserState = () => {
  const { cart, wishlist, isLoggedIn } = useSelector((state) => state.user);
  return { cart, wishlist, isLoggedIn };
};

export { useProductsState, useCategoriesState, useUserState };
