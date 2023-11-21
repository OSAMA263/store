import Modal from "../Modal";
import tw from "tailwind-styled-components";
import { AiOutlineClose } from "react-icons/ai";
import ProductQuantity from "../ProductQTY";
import { ProductBody } from "../pages/single product/sections/ProductFullDetails";
import SwiperImages from "../Swiper";
import { Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import LazyImage from "../LazyImage";
import React from "react";

function ProductModal({ product, onClose, isOpen }) {
  const swiperProps = {
    swiperVariants: {
      grabCursor: true,
      slidesPerView: 1,
      pagination: { clickable: true },
      modules: [Pagination],
    },
    swiperStyles: "h-full [&_.swiper-pagination]:bg-[#35816eb8]",
    swiperImages: [...product.images],
  };

  return (
    <Modal {...{ onClose, isOpen }}>
      <ModalContainer>
        {/* modal close button */}
        <CloseBtn onClick={onClose}>
          <AiOutlineClose />
        </CloseBtn>
        {/* swiper images */}
        <div className="h-full">
          <SwiperImages swiperProps={swiperProps}>
            {product.images.map((src) => (
              <SwiperSlide key={src}>
                <LazyImage src={src} placeholder="placeholder" />
              </SwiperSlide>
            ))}
          </SwiperImages>
        </div>
        {/* card body content */}
        <ProductBody product={product} QTY={<ProductQuantity />} />
      </ModalContainer>
    </Modal>
  );
}

const CloseBtn = tw.button`
absolute 
top-5
right-6
text-4xl
hover:[&>svg]:rotate-90
`;

const ModalContainer = tw.div`
relative
grid 
grid-cols-2 
items-center 
gap-x-6
min-h-[600px] 
`;
export default React.memo(ProductModal)