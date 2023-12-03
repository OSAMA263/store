import tw from "tailwind-styled-components";
import { contactData } from "../data";

export default function ContactDetails() {
  return (
    <Container>
        {contactData.map(({ content, title }) => (
          <div className="space-y-6" key={title}>
            <h1 className="font-semibold">{title}</h1>
            {content.map(({ icon, info },i) => (
              <GridCol key={"info"+i}>
                {/* icon */}
                <div className="text-2xl">{icon}</div>
                {/* text */}
                <div>
                  {info.map((text) => (
                    <h1 key={text+i}>{text}</h1>
                  ))}
                </div>
              </GridCol>
            ))}
          </div>
        ))}
    </Container>
  );
}

const Container = tw.div`
grid
sm:grid-cols-3
grid-cols-1
gap-y-8
justify-between
gap-x-4
`;

const GridCol = tw.div`
flex
text-lightGray
gap-x-4
`;
