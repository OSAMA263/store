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
  const { users, auth } = useSelector((state) => state.user);
  return { users, auth };
};

export { useProductsState, useCategoriesState, useUserState };
