import tw from "tailwind-styled-components";
import {
  TfiLayoutGrid3Alt,
  TfiLayoutGrid4Alt,
  TfiMenuAlt,
} from "react-icons/tfi";
import { useContext } from "react";
import ShopContext from "../../../context/ShopContext";

export default function ShopHeader() {
  return (
    <Container>
      <Wrapper>
        <h1 className="text-lightGray">Showing 20 of 73 result</h1>
        {/* icons on the right */}
        <div className="flex items-center gap-x-10">
          <FilterPrice />
          <ChangeGridStyle />
        </div>
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
      {icons.map(({ svg, val }) => (
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

const FilterPrice = () => {
  const { setShownProducts, shownProducts, products } = useContext(ShopContext);
  const cloneproducts = [...products];

  const handleFilter = (e) => {
    const filteredProducts =
      e.target.value === "low"
        ? cloneproducts.sort((a, b) => a.price - b.price)
        : e.target.value === "high"
        ? cloneproducts.sort((a, b) => b.price - a.price)
        : e.target.value === "recent"
        ? shownProducts.filter((pro) => pro.new)
        : cloneproducts;

    setShownProducts([...filteredProducts]);
  };

  return (
    <select className="cursor-pointer" onChange={handleFilter}>
      <Option value="default">Default</Option>
      <Option value="recent">recent products</Option>
      <Option value="high">price - high to low</Option>
      <Option value="low">price - low to high</Option>
    </select>
  );
};

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
top-16
border-y
mb-20
sticky
z-[66669]
bg-white
`;

const Wrapper = tw.div`
w-[60%]
mx-auto
flex
justify-between
items-center
`;
const icons = [
  { svg: <TfiLayoutGrid3Alt />, val: 3 },
  { svg: <TfiLayoutGrid4Alt />, val: 4 },
  { svg: <TfiMenuAlt />, val: 1 },
];
