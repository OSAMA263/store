import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import GetRemainingTime from "./GetRemainingTime";

export default function SpecialDeal() {
  return (
    <Container>
      {/* img of left */}
      <img
        src="/categories/countdown.jpg"
        className="h-[400px] "
        alt="countdown-img"
      />
      {/* the counter down */}
      <div className="text-center space-y-10 ">
        <h1 className="text-5xl">Deal of the day</h1>
        <Countdown timeStamp={1731276000000}/>
      </div>
    </Container>
  );
}

const Countdown = ({timeStamp}) => {
  const [remainingTime, setRemainingTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateTime = setInterval(() => {
      updateRemainingTime(timeStamp);
    }, 1000);
    return () => {
      clearInterval(updateTime);
    };
  }, [timeStamp]);

  const updateRemainingTime = (countdown) => {
    setRemainingTime(GetRemainingTime(countdown))
  };

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
flex
justify-evenly
gap-x-20
bg-[#f8f8f8]
items-center
`;
