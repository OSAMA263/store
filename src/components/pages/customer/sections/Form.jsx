import React, { useRef, useState } from "react";
import tw from "tailwind-styled-components";
import MainButton from "../../../shared/MainButton";

export default function Form(props) {
  const { bg, title, text, btn, children } = props;
  const [user, setUser] = useState({});
  const inpRefs = useRef([]);
  // collect form inputs data
  const handleSubmit = (e) => {
    e.preventDefault();
    inpRefs.current.map((inp) => {
      setUser((prev) => ({ ...prev, [inp.name]: inp.value }));
    });
  };

  return (
    <Container className={bg}>
      {/* header text */}
        <h1 className="text-4xl">{title}</h1>
        <h1 className="text-lightGray">{text}</h1>
      {/* form inputs */}
      <form onSubmit={handleSubmit} className="flex w-[80%] flex-col">
        <InputsWrapper>
          {React.Children.map(children, (child, ind) => {
            return React.cloneElement(child, {
              ref: (inp) => (inpRefs.current[ind] = inp),
            });
          })}
        </InputsWrapper>
        <MainButton>{btn}</MainButton>
      </form>
    </Container>
  );
}

const Container = tw.div`
p-10
flex
flex-col
items-center
space-y-12
`;

const InputsWrapper = tw.div`
[&>input]:outline-none
[&>input]:border-b-2
[&>input]:bg-transparent
[&>input:hover]:border-black
[&>input:focus]:border-black
flex 
flex-col
gap-y-14
mt-8
mb-16
`;

