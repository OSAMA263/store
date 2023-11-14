import tw from "tailwind-styled-components";
import {
  TfiLayoutGrid3Alt,
  TfiLayoutGrid4Alt,
  TfiMenuAlt,
} from "react-icons/tfi";
import { useState } from "react";

export default function ShopHeader({ setGridCols }) {
  return (
    <Container>
      <Wrapper>
        <h1 className="text-lightGray">Showing 20 of 73 result</h1>
        {/* icons on the right */}
        <div className="flex items-center gap-x-10">
          <FilterPrice />
          <ChangeGridStyle setGridCols={setGridCols} />
        </div>
      </Wrapper>
    </Container>
  );
}

const ChangeGridStyle = ({ setGridCols }) => {
  // update grid state value
  const handleClick = (e) => {
    setGridCols(Number(e.target.value));
  };

  const icons = [
    { svg: <TfiLayoutGrid3Alt />, val: 3 },
    { svg: <TfiLayoutGrid4Alt />, val: 4 },
    { svg: <TfiMenuAlt />, val: 1 },
  ];

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
            defaultChecked={val === 3}
            id={val + "column"}
          />
          {svg}
        </GridBtn>
      ))}
    </div>
  );
};

const FilterPrice = () => {
  return (
    <>
      <select>
        <Option value={1}>Default</Option>
        <Option value={12}>recent products</Option>
        <Option value={13}>price - high to low</Option>
        <Option value={14}>price - low to high</Option>
      </select>
    </>
  );
};

const Option=tw.option`
checked:!text-black
`

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
