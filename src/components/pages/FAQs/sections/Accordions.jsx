import tw from "tailwind-styled-components";
import { data } from "../data";
import {
  Accordion,
  AccordionPanel,
  AccordionItem,
  AccordionButton,
} from "@chakra-ui/react";
import { Fragment } from "react";

export default function Accordions() {
  return (
    <Container>
      {data.map(({ title, Q_A }, i) => (
        <Fragment key={"topic" + i}>
          <div>
            <h1 className="font-semibold mb-6">{title}</h1>
            {/* questions and answers */}
            {Q_A.map(({ question, answer }, i) => (
              <Accordion ml={5} allowToggle key={"question" + i}>
                <AccordionItem mb={2} border={0}>
                  <AccordionButton
                    py={4}
                    color="#a8a8a8"
                    fontSize={23}
                    _hover={{ color: "black" }}
                    _expanded={{ bg: "#", color: "black" }}
                  >
                    {question}
                  </AccordionButton>
                  <AccordionPanel bg="#f8f8f8b9">
                    <small className="text-base font-semibold">{answer}</small>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          {i !== Q_A.length - 1 && (
            <h1 className="border-b-2 w-1/2 mx-auto border-[#aca8a8b9]"></h1>
          )}
        </Fragment>
      ))}
    </Container>
  );
}

const Container = tw.div`
space-y-20
my-28
w-[60%]
mx-auto
text-4xl
`;
