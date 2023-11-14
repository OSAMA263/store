import { InputGroup, InputRightElement } from "@chakra-ui/react";
import { TfiSearch } from "react-icons/tfi";
import tw from "tailwind-styled-components";

export default function FilterCategories() {
  return (
    <div className="space-y-10 w-[20%] sticky top-40 h-fit">
      {/* search input */}
      <SerachInput />
      <h1 className="text-2xl">Categories</h1>
      {/* categories options */}
      <Filters />
    </div>
  );
}

const Filters = () => {
  const categories = ["All Categories", ...JSON.parse(localStorage.categories)];

  return (
    <ul className="flex flex-col gap-y-4">
      {categories.map((cat) => (
        <li className="capitalize" key={cat}>
          <CategoryOption htmlFor={cat}>
            <input
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

const SerachInput = () => {
  return (
    <>
      <InputGroup>
        <Input>
          <input type="search" placeholder="Search products..." />
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
