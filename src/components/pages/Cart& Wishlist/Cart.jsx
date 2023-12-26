import ProductsTable from "../../ProductsTable";
import PageHero from "../../PageHero";
import { Td, Th } from "@chakra-ui/react";
import ProductQuantity from "../../ProductQTY";
import { useUserState } from "../../../state/useStates";
import NavigateAnimation from "../../layout/NavigateAnimation";
import ContentContainer from "../../layout/ContentContainer";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseProductQTY,
  removeFromCart,
} from "../../../state/slices/client/UsersSlice";
import MainButton from "../../shared/MainButton";
import { NavLink } from "react-router-dom";
import tw from "tailwind-styled-components";

export default function Cart() {
  const { auth } = useUserState();
  const Total = Math.floor(
    auth.cart.reduce((curr, pro) => curr + pro.price * pro.QTY, 0)
  ).toLocaleString("en");

  return (
    <NavigateAnimation>
      <PageHero title="My cart">
        <h1 className="text-lightGray">cart</h1>
      </PageHero>
      <ContentContainer>
        <ProductsTable
          {...{
            TBodyContent,
            THeadContent,
            TFootContent,
            products: auth.cart,
          }}
        />
        {/* GO TO CHECKOUT PRODUCTS */}
        <CartTotal>
          <h1 className="sm:text-4xl text-lg font-medium">Cart totals</h1>
          <div className="flex gap-y-5 items-center w-full justify-between ">
            <h1>SUBTOTAL:</h1>
            <h1 className="sm:text-4xl font-semibold">${Total}</h1>
          </div>
          <MainButton>
            <NavLink to="/checkout" className="tracking-wider">PROCEED TO CHECKOUT</NavLink>
          </MainButton>
        </CartTotal>
      </ContentContainer>
    </NavigateAnimation>
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
const TBodyContent = ({ product }) => {
  const dispatch = useDispatch();
  const availableQTY = product.stock - (product.QTY ?? 0);

  const cartMinus = () => {
    product.QTY === 1
      ? dispatch(removeFromCart(product.id))
      : dispatch(decreaseProductQTY(product.id));
  };
  const cartPlus = () => {
    dispatch(addToCart({ product }));
  };

  return (
    <>
      <Td>
        <ProductQuantity
          {...{
            cartMinus,
            cartPlus,
            cartQty: product.QTY,
            foundInCart: product,
            availableQTY,
          }}
        />
      </Td>
      <Td className="font-semibold">
        ${(product.QTY * product.price).toLocaleString("en")}
      </Td>
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

const CartTotal = tw.div`
bg-[#f7f7f7] 
tracking-widest
py-10 
px-20 
flex 
flex-col
items-center
md:w-fit 
justify-between 
space-y-10
`;
