import { Tooltip, useDisclosure } from "@chakra-ui/react";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { LuGitCompare } from "react-icons/lu";
import tw from "tailwind-styled-components";
import ProductModal from "./shared/ProductModal";
import {
  addToWishlist,
  removeFromWishlist,
} from "../state/slices/client/UsersSlice";
import { useDispatch } from "react-redux";
import { useUserState } from "../state/useStates";
import Toast from "./Toast";

export default function CardElements({ product }) {
  return (
    <>
      <CardBadges isNew={product.new} discount={product.discountPercentage} />
      <CardOptions product={product} />
    </>
  );
}

export const CardBadges = ({ discount, isNew }) => {
  return (
    <BadgeWrapper>
      <Badge className="bg-[#7ab2a6]">-{Math.floor(discount)}%</Badge>
      {isNew && <Badge className="bg-[#c61932]">new</Badge>}
    </BadgeWrapper>
  );
};

export const CardOptions = ({ product }) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { wishlist } = useUserState();
  const inWishlist = wishlist.find((pro) => pro.id === Number(product.id));
  const toastProps = {
    title: product.title,
    state: "wishlist",
    action: "add",
  };

  const handleWishlist = () => {
    if (inWishlist) {
      Toast({ ...toastProps, action: "remove" });
      dispatch(removeFromWishlist(product.id));
    } else {
      Toast({ ...toastProps, action: "add" });
      dispatch(addToWishlist(product));
    }
  };

  const handleClick = (action) => {
    action === "view"
      ? onOpen()
      : action === "wishlist"
      ? handleWishlist()
      : console.log("compare");
  };

  return (
    <>
      <OptionsBtns>
        {options.map(({ icon, label, action }, i) => (
          <Tooltip
            zIndex="66"
            hasArrow
            placement="left"
            label={
              action === "wishlist" && inWishlist ? "Added in wishlist" : label
            }
            key={i}
          >
            <Btn
              $action={action}
              $inWishlist={inWishlist}
              onClick={() => handleClick(action)}
            >
              {icon}
            </Btn>
          </Tooltip>
        ))}
      </OptionsBtns>
      {/* product modal */}
      <ProductModal {...{ product, isOpen, onClose }} />
    </>
  );
};

const OptionsBtns = tw.div`
options 
duration-700 
transition-all 
text-xl 
right-[7%]
top-[4%]
z-[6969]
absolute
flex 
gap-y-10 
opacity-0 
flex-col
`;

const Btn = tw.span`
${({ $action, $inWishlist }) =>
  $action === "wishlist" && $inWishlist
    ? "bg-[#333333] text-white"
    : "bg-white "}
    cursor-pointer
    p-2
`;

const Badge = tw.span`
rounded-full
w-12
h-12
text-center
flex 
justify-center
items-center
text-xs
text-white
font-bold
`;

const BadgeWrapper = tw.div`
top-[5%]
left-[5%]
z-[69]
absolute
flex
gap-y-4 
flex-col
`;

const options = [
  { action: "wishlist", icon: <AiOutlineHeart />, label: "Add to wishlist" },
  { action: "view", icon: <AiOutlineSearch />, label: "Quick view" },
  { action: "compare", icon: <LuGitCompare />, label: "Add to compare" },
];
