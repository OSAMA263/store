import { data } from "../data";
import {
  Accordion,
  AccordionPanel,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
} from "@chakra-ui/react";
import { Fragment } from "react";
import ContentContainer from "../../../layout/ContentContainer";

export default function Accordions() {
  return (
    <ContentContainer>
        {data.map(({ title, Q_A }, i) => (
          <Fragment key={"topic" + i}>
            <div  className="text-4xl">
              <h1 className="font-semibold mb-6">{title}</h1>
              {/* questions and answers */}
              {Q_A.map(({ question, answer }, i) => (
                <Accordion ml={5} allowToggle key={"question" + i}>
                  <AccordionItem mb={2} border={0}>
                    <AccordionButton
                      py={4}
                      justifyContent="space-between"
                      color="#a8a8a8"
                      fontSize={23}
                      _hover={{ color: "black" }}
                      _expanded={{ bg: "#", color: "black" }}
                    >
                      {question}
                      <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel bg="#f8f8f8b9">
                      <small className="text-base font-semibold">
                        {answer}
                      </small>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
            {/* line between every question */}
            {i !== Q_A.length - 1 && (
              <h1 className="border-b-2 w-1/2 mx-auto border-[#aca8a8b9]"></h1>
            )}
          </Fragment>
        ))}
    </ContentContainer>
  );
}
