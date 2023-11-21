import { NavLink, useParams } from "react-router-dom";
import PageHero from "../../PageHero";
import ProductQuantity from "../../ProductQTY";
import tw from "tailwind-styled-components";
import { CardBadges } from "../../CardElements";
import { ProductBody } from "./sections/ProductFullDetails";
import { useSelector } from "react-redux";
// fetch single product
export default function ProductPage() {
  const { productID } = useParams();
  const products = useSelector((state) => state.products);
  const findProduct = products.find(
    (product) => product.id === Number(productID)
  );

  return (
    <>
      <PageHero title={findProduct.title}>
        <NavLink to="/shop">Shop</NavLink>
        <h1 className="!text-lightGray">{findProduct.brand}</h1>
      </PageHero>
      {/* container */}
      <Container>
        {/* swiper images */}
        <div className="relative">
          <img src="/bg.png" className="h-full" alt="" />
          <CardBadges />
        </div>
        {/* product details */}
        <ProductDetails  product={findProduct}/>
        {/* product thumbnail swiper */}
        <div className="h-20 bg-black"></div>
      </Container>
    </>
  );
}

const ProductDetails = ({ product }) => {
  return (
    <div className="space-y-8 h-fit">
      <ProductBody QTY={<ProductQuantity />} product={product}></ProductBody>
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
