import tw from "tailwind-styled-components";
import {
  TfiLayoutGrid3Alt,
  TfiLayoutGrid4Alt,
  TfiMenuAlt,
} from "react-icons/tfi";
import { useContext } from "react";
import ShopContext from "../../../context/ShopContext";
import { RiMenu5Fill } from "react-icons/ri";
import { Collapse, useDisclosure } from "@chakra-ui/react";
import FilterCategories from "./FilterCategories";

export default function ShopHeader() {
  const { visibleCards, products, isSmallDevice,isMdDevice } = useContext(ShopContext);
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container>
      <Wrapper>
        <h1 className="text-lightGray">
          Showing {visibleCards} of {products.length} result
        </h1>
        {/* icons on the right */}
        <div className="flex items-center gap-x-10">
          <FilterPrice onToggle={onToggle} />
          {!isSmallDevice && <ChangeGridStyle />}
        </div>
        {/* collapse filters in mobiles */}
        {isMdDevice && (
          <Collapse in={isOpen}>
            <FilterCategories />
          </Collapse>
        )}
      </Wrapper>
    </Container>
  );
}

const ChangeGridStyle = () => {
  const { setGridCols } = useContext(ShopContext);
  // update grid state value
  const handleClick = (e) => {
    setGridCols(Number(e.target.value));
  };

  return (
    <div className="flex gap-x-4 ">
      {gridIcons.map(({ svg, val }) => (
        <GridBtn htmlFor={val + "column"} key={val}>
          <input
            className="hidden"
            onClick={handleClick}
            type="radio"
            name="grid"
            value={val}
            defaultChecked={val === 4}
            id={val + "column"}
          />
          {svg}
        </GridBtn>
      ))}
    </div>
  );
};

const FilterPrice = ({ onToggle }) => {
  const { setShownProducts, shownProducts, products, isMdDevice } =
    useContext(ShopContext);
  const cloneproducts = [...products];
  
  const handleFilter = (e) => {
    const filteredProducts =
      e.target.value === "low"
        ? cloneproducts.sort((a, b) => a.price - b.price)
        : e.target.value === "high"
        ? cloneproducts.sort((a, b) => b.price - a.price)
        : e.target.value === "recent"
        ? shownProducts.filter((pro) => pro.new)
        : e.target.value === "low-stock"
        ? cloneproducts.sort((a, b) => a.stock - b.stock)
        : cloneproducts;

    setShownProducts([...filteredProducts]);
  };

  return (
    <>
      <div className="flex gap-x-4 items-center max-[770px]:justify-evenly w-full">
        <select className="cursor-pointer" onChange={handleFilter}>
          <Option value="default">Default</Option>
          <Option value="recent">recent</Option>
          <Option value="low-stock">stocks - low to high</Option>
          <Option value="high">price - high to low</Option>
          <Option value="low">price - low to high</Option>
        </select>
        {isMdDevice && (
          <FilterButton onClick={onToggle}>
            <RiMenu5Fill />
            Filter
          </FilterButton>
        )}
      </div>
    </>
  );
};

const FilterButton = tw.button`
border-b-2
border-lightGray
transition-all
duration-700
hover:border-black
flex 
gap-x-2
[&>svg]:text-lg
items-center
`;

const Option = tw.option`
checked:!text-black
`;

const GridBtn = tw.label`
cursor-pointer
[&_svg]:text-xl
[&_svg]:text-lightGray
hover:[&_svg]:text-black
[&>input:checked+svg]:text-black
`;

const Container = tw.div`
shadow-sm
py-6
max-[800px]:top-10
top-16
border-y
sticky
z-[66669]
bg-white
sm:text-base
text-sm
w-full
flex 
justify-center
`;

const Wrapper = tw.div`
2xl:w-[65%]
xl:w-[80%]
lg:w-[90%]
md:w-[95%]
mx-4
lg:flex
text-center
justify-between
w-full
items-center
space-y-4
`;

const gridIcons = [
  { svg: <TfiLayoutGrid3Alt />, val: 3 },
  { svg: <TfiLayoutGrid4Alt />, val: 4 },
  { svg: <TfiMenuAlt />, val: 1 },
];
