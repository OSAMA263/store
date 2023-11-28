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
  }

  return (
    <div className="space-y-10 pe-6 sticky top-40 h-fit">
      {/* search input */}
      <SerachInput handleFilterName={handleFilterName} />
      <h1 className="text-2xl">Categories</h1>
      {/* categories options */}
      <Filters handleFilterCategory={handleFilterCategory} />
    </div>
  );
}

const Filters = ({ handleFilterCategory }) => {
  const categories = ["All Categories", ...JSON.parse(localStorage.categories)];

  return (
    <ul className="flex flex-col gap-y-4">
      {categories.map((cat) => (
        <li className="capitalize" key={cat}>
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

const SerachInput = ({ handleFilterName }) => {
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
            <SearchButton>
              <TfiSearch />
            </SearchButton>
          </InputRightElement>
        </Input>
      </InputGroup>
    </>
  );
};

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
