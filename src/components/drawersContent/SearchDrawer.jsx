import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router";
import tw from "tailwind-styled-components";

export default function SearchDrawer({ handleClick }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/shop");
    handleClick();
  };

  return (
    <Container>
      <CloseBtn aria-label="close-search" onClick={handleClick}>
        <AiOutlineClose />
      </CloseBtn>
      {/* search input */}
      <SearchWrapper>
        <form onSubmit={handleSubmit} action="">
          <Input placeholder="Search Product..." type="search" />
          <button
            type="submit"
            className="bg-black hover:bg-gra-600 text-white p-2 flex"
          >
            Enter
          </button>
        </form>
      </SearchWrapper>
    </Container>
  );
}

const Input = tw.input`
sm:text-5xl
placeholder:text-gray-300
outline-none
border-b-2
border-black
`;

const Container = tw.div`
bg-white
sm:text-6xl 
text-3xl
`;

const CloseBtn = tw.button`
absolute 
top-0 
right-0 
hover:[&>svg]:rotate-90
sm:mr-20
mr-10
sm:mt-20
mt-10
`;

const SearchWrapper = tw.div`
absolute 
top-1/2
left-1/2
-translate-x-1/2
-translate-y-1/2
`;
