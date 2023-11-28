import { NavLink, useParams } from "react-router-dom";
import PageHero from "../../PageHero";
import ProductQuantity from "../../ProductQTY";
import tw from "tailwind-styled-components";
import { CardBadges } from "../../CardElements";
import { ProductBody } from "./sections/ProductFullDetails";
import { useSelector } from "react-redux";
import NavigateAnimation from "../../layout/NavigateAnimation";
import ContentContainer from "../../layout/ContentContainer";
import { SocialContact } from "../../shared/Footer";
import SwiperImages from "../../Swiper";
import { SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Pagination, EffectFade, Navigation } from "swiper/modules";
import LazyImage from "../../LazyImage";
// fetch single product?

export default function ProductPage() {
  const { productID } = useParams();
  const products = useSelector((state) => state.products);
  const findProduct = products.find(
    (product) => product.id === Number(productID)
  );
  const { title, brand, discountPercentage, images } = findProduct;

  // swiper props
  const swiperImgs = {
    swiperVariants: {
      // allowTouchMove: false,
      slidesPerView: 1,
      pagination: { clickable: true },
      effect: "fade",
      modules: [Pagination, EffectFade, Navigation],
      navigation: true,
    },
    swiperStyles: "h-[600px] [&_.swiper-pagination]:bg-[#35816e49]",
  };

  return (
    <NavigateAnimation>
      <PageHero title={title}>
        <NavLink to="/shop">Shop</NavLink>
        <h1 className="!text-lightGray">{brand}</h1>
      </PageHero>
      {/* container */}
      <ContentContainer>
        <Container>
          {/* swiper images */}
          <div className="relative">
            <SwiperImages swiperProps={swiperImgs}>
              {images.map((src) => (
                <SwiperSlide key={src}>
                  <LazyImage src={src} styles="h-full w-full" placeholder />
                </SwiperSlide>
              ))}
            </SwiperImages>
            {/* THUMBS FOR THE SWIPER */}
            <CardBadges discount={discountPercentage} />
          </div>
          {/* product details */}
          <ProductDetails product={findProduct} />
        </Container>
      </ContentContainer>
    </NavigateAnimation>
  );
}

const ProductDetails = ({ product }) => {
  return (
    <div className="space-y-8 h-fit">
      <ProductBody
        quantity={<ProductQuantity product={product} />}
        product={product}
      ></ProductBody>
      {/* ---- Social links and product type---- */}
      <ProductInfo>
        <div className="grid grid-cols-2 w-1/2">
          <h1>Brand :</h1>
          <h2>{product.brand}</h2>
        </div>
        <div className="grid grid-cols-2 w-1/2">
          <h1>Category :</h1>
          <h2>{product.category}</h2>
        </div>
        <div className="grid grid-cols-2 w-1/2 items-end">
          <h1>Share on :</h1>
          <SocialContact />
        </div>
      </ProductInfo>
    </div>
  );
};

const ProductInfo = tw.div`
pt-10 
space-y-2 
border-t 
font-medium
[&_h2]:text-lightGray 
[&_svg]:!text-lightGray 
[&_svg:hover]:!text-black 
`;

const Container = tw.div`
grid 
grid-cols-2
grid-rows-auto
gap-6
`;
