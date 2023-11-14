import { useState } from "react";
import tw from "tailwind-styled-components";

export default function SpecialDeal() {
  return (
    <Container>
      {/* img of left */}
      <img
        src="public/bg.png"
        className="h-[400px] w-full"
        alt="countdown-img"
      />
      {/* the counter down */}
      <div className="text-center space-y-10 ">
        <h1 className="text-5xl">Deal of the day</h1>
        <Countdown />
      </div>
    </Container>
  );
}

const Countdown = () => {
  const [remainingTime, setRemainingTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const timeLabel = ["days", "hours", "minutes", "seconds"];

  return (
    <div className="flex justify-center">
      <div className="flex gap-x-8 items-center">
        {/* DAYS */}
        {timeLabel.map((time, i) => (
          <div className="flex gap-x-8" key={i}>
            <Number>
              <span className="text-3xl">{remainingTime[time]}</span>
              <span className="uppercase">{time}</span>
            </Number>
            {i !== timeLabel.length - 1 && <span className="text-2xl">:</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

const Number = tw.div`
flex 
flex-col 
gap-y-6 
text-center
text-[#7e7e7e]
`;

const Container = tw.div`
my-52
w-[95%]
mx-auto
grid
grid-cols-2
gap-x-20
bg-[#f5f5f5]
items-center
`;
