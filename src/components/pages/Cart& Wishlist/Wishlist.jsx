import { Td, Th } from "@chakra-ui/react";
import PageHero from "../../PageHero";
import ProductsTable from "../../ProductsTable";
import { useUserState } from "../../../state/useStates";
import MainButton from "../../shared/MainButton";
import NavigateAnimation from "../../layout/NavigateAnimation";
import ContentContainer from "../../layout/ContentContainer";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../state/slices/client/UsersSlice";
import Toast from "../../Toast";

export default function Wishlist() {
  const { auth } = useUserState();

  return (
    <NavigateAnimation>
      <PageHero title="My wishlist">
        <h1 className="text-lightGray">wishlist</h1>
      </PageHero>
      <ContentContainer>
        <ProductsTable
          {...{
            TBodyContent,
            THeadContent,
            TFootContent,
            products: auth.wishlist,
          }}
        />
      </ContentContainer>
    </NavigateAnimation>
  );
}

const THeadContent = () => {
  return (
    <>
      <Th></Th>
      <Th></Th>
    </>
  );
};
const TBodyContent = ({ product }) => {
  const dispatch = useDispatch();
  const { auth } = useUserState();
  const productInCart = auth.cart.find((pro) => pro.id === product.id);
  const toastProps = {
    title: product.title,
    state: "cart",
    action: "add",
  };

  const handleClick = () => {
    if (productInCart) {
      return;
    } else {
      dispatch(addToCart({ product }));
      Toast(toastProps);
    }
  };
  return (
    <>
      {/* ADD BUTTON */}
      <Td>
        <span className="flex justify-center">
          <MainButton>
            <button onClick={handleClick}>
              {productInCart ? "ALREADY IN CART" : "ADD TO CART"}
            </button>
          </MainButton>
        </span>
      </Td>
    </>
  );
};

const TFootContent = () => {
  return null;
};
