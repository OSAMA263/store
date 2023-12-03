import { NavLink, useLocation } from "react-router-dom";
import MainButton from "../../shared/MainButton";
import { FaCartShopping } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";

export default function NoProductsAdded() {
const {pathname}=useLocation()

  return (
    <div className="w-[60%] mx-auto flex flex-col justify-center items-center space-y-8 my-28">
      <span className="sm:text-6xl text-4xl text-gray-800">
        {pathname === "/wishlist" ? <MdFavorite /> : <FaCartShopping />}
      </span>
      <h1 className="sm:text-2xl text-lg text-lightGray text-center">
        No items found in
        {pathname === "/wishlist"  ? " wishlist" : " cart"}
      </h1>
      <MainButton>
        <NavLink to="/shop">SHOP NOW</NavLink>
      </MainButton>
    </div>
  );
}
