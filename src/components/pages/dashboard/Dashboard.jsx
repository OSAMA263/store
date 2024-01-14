import tw from "tailwind-styled-components";
import NavigateAnimation from "../../layout/NavigateAnimation";
import { FaPencilRuler, FaUsers } from "react-icons/fa";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { BsFiles } from "react-icons/bs";
import Products from "./panels/Products";

export default function Dashboard() {
  // build the table with futures
  // add the filtering ? and the actions

  return (
    <NavigateAnimation>
      <Hero>Admin</Hero>
      <ContentSection>
        <Tabs>
          <TabsListWrapper>
            <TabList columnGap={8} border={0}>
              {tabs.map(({ icon, title }, i) => (
                <Tab
                  _selected={{
                    bg: "#d4d2d2",
                    borderBottom: "2px solid #5f6df1",
                  }}
                  p={0}
                  flexDirection="column"
                  rowGap={2}
                  key={i}
                >
                  <i>{icon}</i>
                  <h1>{title}</h1>
                </Tab>
              ))}
            </TabList>
          </TabsListWrapper>
          <TabPanels pt={20}>
            <TabPanel>
              <Products />
            </TabPanel>
            <TabPanel>working on it mate</TabPanel>
            <TabPanel>working on it mate</TabPanel>
          </TabPanels>
        </Tabs>
      </ContentSection>
    </NavigateAnimation>
  );
}

const TabsListWrapper = tw.section`
absolute
left-1/2
-translate-y-1/2
-translate-x-1/2
[&_button]:py-4
[&_button]:px-8
[&_button]:text-[#5f6df1]
[&_button]:bg-white
[&_button]:rounded-xl
[&_button]:shadow-[0px_1px_10px_gray]
flex 
flex-col
items-center
gap-y-4
[&_i]:md:text-3xl
[&_i]:text-xl
[&_h1]:font-medium
`;

const ContentSection = tw.section`
2xl:w-[60%]
xl:w-[70%]
lg:w-[90%]
md:w-[95%]
sm:mx-auto
mx-4`;

const Hero = tw.div`
text-3xl 
font-bold 
text-white 
tracking-wide 
h-[40dvh] 
flex 
justify-center 
items-center 
bg-gradient-to-br 
from-[#6366f1] 
to-[#2e92f0ea]
relative
`;

const tabs = [
  { title: "products", icon: <FaPencilRuler /> },
  { title: "orders", icon: <BsFiles /> },
  { title: "customers", icon: <FaUsers /> },
];
