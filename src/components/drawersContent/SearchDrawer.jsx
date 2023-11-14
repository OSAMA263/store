import { AiOutlineClose } from "react-icons/ai";
import tw from "tailwind-styled-components";

export default function SearchDrawer({ handleClick }) {
  return (
    <Container>
      <CloseBtn aria-label="close" onClick={handleClick}>
        <AiOutlineClose />
      </CloseBtn>
      {/* search input */}
      <SearchWrapper>
        <Input placeholder="Search Product..." type="search" />
        <h1 className="mt-2 text-lg text-lightGray"># Hit enter to search</h1>
      </SearchWrapper>
    </Container>
  );
}

const Input = tw.input`
text-5xl
placeholder:text-gray-300
outline-none
border-b-2
border-black
`;

const Container = tw.div`
bg-white
text-6xl 
`;

const CloseBtn = tw.button`
absolute 
top-0 
right-0 
hover:[&>svg]:rotate-90
mr-20
mt-20
`;

const SearchWrapper = tw.div`
absolute 
top-1/2
left-1/2
-translate-x-1/2
-translate-y-1/2
`;
