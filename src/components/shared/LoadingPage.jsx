import { Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import tw from "tailwind-styled-components";

export default function LoadingPage() {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return()=>{
      document.body.style.overflowY=""
    }
  }, []);

  return (
    <Container>
      <Spinner
        w={20}
        h={20}
        speed=".7s"
        thickness="8px"
        emptyColor="#2c313a32"
      />
    </Container>
  );
}

const Container = tw.div`
flex
justify-center
items-center
w-full 
h-[100dvh]
bg-[#dddfe0]
overflow-hidden
`;
