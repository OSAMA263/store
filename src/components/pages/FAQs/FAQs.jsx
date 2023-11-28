import PageHero from "../../PageHero";
import { BreadcrumbItem } from "@chakra-ui/react";
import Accordions from "./sections/Accordions"
import NavigateAnimation from "../../layout/NavigateAnimation";

export default function FAQs() {
  return (
    <NavigateAnimation>
      <PageHero title="F.A.Q">
        <BreadcrumbItem>
          <h1 className="text-lightGray">F.A.Q</h1>
        </BreadcrumbItem>
      </PageHero>
      <Accordions/>
    </NavigateAnimation>
  );
}
