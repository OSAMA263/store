import PageHero from "../../PageHero";
import Accordions from "./sections/Accordions";
import NavigateAnimation from "../../layout/NavigateAnimation";

export default function FAQs() {
  return (
    <NavigateAnimation>
      <PageHero title="F.A.Q">
        <h1 className="text-lightGray">F.A.Q</h1>
      </PageHero>
      <Accordions />
    </NavigateAnimation>
  );
}
