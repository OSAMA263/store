import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import GetRemainingTime from "./GetRemainingTime";

export default function SpecialDeal() {
  return (
    <Container>
      {/* img of left */}
      <img
        src="categories/countdown.webp"
        className="max-h-[360px] lg:block hidden"
        loading="lazy"
        alt="countdown-img"
      />
      {/* the counter down */}
      <div className="space-y-10 text-center ">
        <h1 className="text-3xl md:text-5xl">Deal of the day</h1>
        <Countdown timeStamp={1735682400000}/>
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
// update the time every 1sec
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
      <div className="flex items-center md:gap-x-8">
        {/* DAYS */}
        {timeLabel.map((time, i) => (
          <div className="flex gap-x-8" key={i}>
            <Number>
              <span>{remainingTime[time]}</span>
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
text-lg 
md:text-3xl
`;

const Container = tw.div`
my-52
w-[95%]
mx-auto
py-4
flex
justify-evenly
bg-[#f8f8f8]
items-center
`;
