import PageHero from "../../PageHero";
import { BreadcrumbItem } from "@chakra-ui/react";
import Accordions from "./sections/Accordions"

export default function FAQs() {
  return (
    <>
      <PageHero title="F.A.Q">
        <BreadcrumbItem>
          <h1 className="text-lightGray">F.A.Q</h1>
        </BreadcrumbItem>
      </PageHero>
      <Accordions/>
    </>
  );
}
