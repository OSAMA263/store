import { InputGroup, InputRightElement } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import tw from "tailwind-styled-components";
import ShopContext from "../../../context/ShopContext";

export default function FilterCategories() {
  const { setShownProducts, products } = useContext(ShopContext);
  const [cat, setCat] = useState("All Categories");
  // filter by category handler
  const handleFilterCategory = (e) => {
    setCat(e.target.value);
    const FilteredProducts = products.filter(
      (pro) => pro.category === e.target.value
    );
    e.target.value === "All Categories"
      ? setShownProducts(products)
      : setShownProducts(FilteredProducts);
  };

  // filter product by name handler
  const handleFilterName = (e) => {
    const FilteredProducts =
      cat !== "All Categories"
        ? products.filter(
            (pro) =>
              pro.category === cat &&
              pro.title.toLowerCase().includes(e.target.value.toLowerCase())
          )
        : products.filter((pro) =>
            pro.title.toLowerCase().includes(e.target.value.toLowerCase())
          );

    e.target.value === "" && cat === "All Categories"
      ? setShownProducts(products)
      : setShownProducts(FilteredProducts);
  };

  return (
    <Wrapper>
      <SearchInput handleFilterName={handleFilterName} />
      <h1 className="text-lg md:text-2xl">Categories</h1>
      <Filters handleFilterCategory={handleFilterCategory} />
    </Wrapper>
  );
}

const Filters = ({ handleFilterCategory }) => {
  const categories = ["All Categories", ...JSON.parse(localStorage.categories)];

  return (
    <ul className="flex flex-col text-sm capitalize md:text-base gap-y-4 ">
      {categories.map((cat) => (
        <li key={cat}>
          <CategoryOption htmlFor={cat}>
            <input
              onClick={handleFilterCategory}
              defaultChecked={cat === "All Categories"}
              type="radio"
              name="catrgory"
              value={cat}
              id={cat}
            />
            <h2 className="transition-all duration-300">{cat}</h2>
          </CategoryOption>
        </li>
      ))}
    </ul>
  );
};

const SearchInput = ({ handleFilterName }) => {
  return (
    <>
      <InputGroup>
        <Input>
          <input
            onChange={handleFilterName}
            type="search"
            placeholder="Search products..."
          />
          <InputRightElement className="!justify-end !w-fit">
            <SearchButton aria-label="search-button">
              <TfiSearch />
            </SearchButton>
          </InputRightElement>
        </Input>
      </InputGroup>
    </>
  );
};

const Wrapper = tw.div`
lg:overflow-y-hidden
overflow-y-scroll
sticky 
space-y-10 
lg:pe-6 
top-44
lg:h-fit 
h-[400px]
`;

const SearchButton = tw.button`
text-lightGray 
text-lg 
hover:text-black 
!duration-[.1s]
`;

const Input = tw.div`
transition-all
relative
flex 
py-1
justify-between
items-center 
gap-x-2
[&_svg]:font-bold
[&>input]:pe-5
[&>input]:pb-2
`;

const CategoryOption = tw.label`
[&>input]:hidden
[&>h2]:text-lightGray
[&>h2]:border-b-transparent
[&>h2]:border-b
[&>h2]:w-fit
[&>input:checked+h2]:ml-2
[&>input:checked+h2]:mb-1
[&>input:checked+h2]:border-b-black
[&>input:checked+h2]:text-black
hover:[&>h2]:text-black
hover:[&>h2]:ml-2
cursor-pointer
`;
