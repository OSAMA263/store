import Modal from "../Modal";
import tw from "tailwind-styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { ProductBody } from "../pages/single product/sections/ProductFullDetails";
import SwiperImages from "../Swiper";
import { Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import LazyImage from "../LazyImage";

export default function ProductModal({ product, onClose, isOpen }) {
  return (
    <Modal {...{ onClose, isOpen }}>
      <ModalContainer>
        {/* modal close button */}
        <CloseBtn aria-label="close-product-modal" onClick={onClose}>
          <AiOutlineClose />
        </CloseBtn>
        {/* swiper images */}
        <div className="h-full">
          <SwiperImages swiperProps={swiperModalProps}>
            {product.images.map((src) => (
              <SwiperSlide key={src}>
                <LazyImage src={src} styles="h-full w-full md:object-fill !object-cover" placeholder />
              </SwiperSlide>
            ))}
          </SwiperImages>
        </div>
        {/* card body content */}
        <ProductBody product={product} quantity />
      </ModalContainer>
    </Modal>
  );
}

const swiperModalProps = {
  swiperVariants: {
    grabCursor: true,
    slidesPerView: 1,
    pagination: { clickable: true },
    modules: [Pagination],
  },
  swiperStyles: "h-full [&_.swiper-pagination]:bg-[#35816eb8]",
};

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

