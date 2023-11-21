import { useDispatch } from "react-redux";
import MainButton from "../../../shared/MainButton";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../../../state/slices/client/UsersSlice";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { LuGitCompare } from "react-icons/lu";
import tw from "tailwind-styled-components";
import { useUserState } from "../../../../state/useStates";

export default function ProductFullDetails() {
  const product = {
    title: "sad",
    discountPercentage: "sad",
    price: "sad",
    description: "sad",
  };
  return (
    <div>
      <img src="/bg.png" alt="" />
      <ProductBody product={product} />
    </div>
  );
}

export const ProductBody = ({ QTY, product }) => {
  const { title, discountPercentage, price, description, rating, brand } =
    product;
  const orignalPrice = Math.floor(
    price / (1 - Math.floor(discountPercentage) / 100)
  );

  return (
    <div className="space-y-10">
      {/* product name & price */}
      <div className="flex flex-col font-semibold gap-y-2">
        <Rating rating={rating} />
        <h2 className="text-3xl">{title}</h2>
        <small>{brand}</small>
      </div>
      <p className="space-x-3 font-semibold">
        <span className="line-through text-lightGray">${orignalPrice}</span>
        <span>${price}</span>
      </p>
      {/* product description */}
      <p className="font-medium leading-relaxed text-lightGray">
        {description}
      </p>
      {/* prodcut button options */}
      <div className="flex items-center gap-x-20">
        {QTY && (
          <>
            <h1 className="font-semibold">Quantity</h1>
            <div>{QTY}</div>
          </>
        )}
      </div>
      <ModalButtons product={product} />
    </div>
  );
};

// modal buttons--------
const ModalButtons = ({ product }) => {
  const dispatch = useDispatch();
  const { cart, wishlist } = useUserState();
  const inCart = cart.find((pro) => pro.id === Number(product.id));
  const inWishlist = wishlist.find((pro) => pro.id === Number(product.id));

  const handleWishlist = () => {
    inWishlist
      ? dispatch(removeFromWishlist(product))
      : dispatch(addToWishlist(product));
  };

  return (
    <div className="flex justify-start gap-x-3">
      <MainButton>
        <button onClick={() => dispatch(addToCart(product))}>
          {inCart ? "ADDED TO CART" : "ADD TO CART"}
        </button>
      </MainButton>
      <OptionBtn
        className={inWishlist && "bg-[#333333] text-white"}
        onClick={handleWishlist}
      >
        <AiOutlineHeart />
      </OptionBtn>
      <OptionBtn>
        <LuGitCompare />
      </OptionBtn>
    </div>
  );
};

// rating stars
const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 });
  const rate = Math.floor(Number(rating));

  return (
    <span className="flex text-2xl gap--1">
      {stars.slice(0, rate).map((_, i) => (
        <small key={"star" + i}>
          <IoIosStar className="!text-yellow-300" />
        </small>
      ))}
      {stars.slice(rate, stars.length).map((_, i) => (
        <small key={"unfilled" + i}>
          <IoIosStarOutline />
        </small>
      ))}
    </span>
  );
};

const OptionBtn = tw.button`
p-3
border
border-gray-500
`;
