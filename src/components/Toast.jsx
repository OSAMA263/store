import { createStandaloneToast } from "@chakra-ui/react";
import { FaCartShopping } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";

export default function Toast(props) {
  const { title, state, qty=1, action } = props;
  const { toast } = createStandaloneToast();

  const toastText = {
    add: {
      des: state === "cart" ? "Added to cart" : "Added to wihlist",
      status: "success",
    },
    added: {
      des: state === "cart" && `Increased qty x${qty}`,
      status: "info",
    },
    remove: {
      des: state === "cart" ? "Removed from cart" : "Removed from wishlist",
      status: "error",
    },
    maxmum: { des: state === "cart" && "Item out of stock", status: "warning" },
  };

  const toastProps = {
    title,
    description: toastText[action].des,
    status: toastText[action].status,
    isClosable: true,
    duration: 3000,
    position: "bottom-left",
    icon: state==="cart" ? <FaCartShopping />: <MdFavorite />
  };
  return toast(toastProps);
}
