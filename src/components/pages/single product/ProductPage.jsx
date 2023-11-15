import { NavLink } from "react-router-dom";
import PageHero from "../../PageHero";
import { CardBodyFullWidth } from "../../ProductFullWidth";
import ProductQuantity from "../../ProductQTY";
import { SingleProductOptinsBtns } from "../../shared/ProductModal";
import tw from "tailwind-styled-components";
import { CardBadges } from "../../CardElements";

export default function ProductPage() {
  return (
    <>
      <PageHero title="the peoduct name">
        <NavLink to="/shop">Shop</NavLink>
        <h1 className="!text-lightGray">the product name</h1>
      </PageHero>
      {/* container */}
      <Container>
        {/* swiper images */}
        <div className="relative">
          <img src="/bg.png" className="h-full" alt="" />
          <CardBadges />
        </div>
        {/* product details */}
        <ProductDetails />
        {/* product thumbnail swiper */}
        <div className="h-20 bg-black"></div>
      </Container>
    </>
  );
}

const ProductDetails = () => {
  return (
    <div className="space-y-8 h-fit">
      <CardBodyFullWidth
        QTY={<ProductQuantity />}
        moreOptionBtns={<SingleProductOptinsBtns />}
      ></CardBodyFullWidth>
      {/* ---- Social links and product type---- */}
      <div className="pt-10 border-t">
        <div className="flex-justify-between w-full">
          <h1>s</h1>
          <h1>s</h1>
        </div>
        <div className="flex-justify-between w-full">
          <h1>s</h1>
          <h1>s</h1>
        </div>
        <div className="flex justify-between w-full">
          <h1>s</h1>
          <h1>s</h1>
        </div>
      </div>
    </div>
  );
};

const Container = tw.div`
grid 
grid-cols-2 
grid-rows-
w-[60%] 
mx-auto 
gap-x-6 
my-28
`;
