import dayjs from "dayjs";

export default function GetRemainingTime(timeStampMS) {
  const timeStampDayjs = dayjs(timeStampMS);
  const nowDayjs = dayjs();
  return {
    seconds: getRemainingSeconds(nowDayjs, timeStampDayjs),
    minutes: getRemainingMinutes(nowDayjs, timeStampDayjs),
    hours: getRemainingHours(nowDayjs, timeStampDayjs),
    days: getRemainingDays(nowDayjs, timeStampDayjs),
  };
}

const getRemainingSeconds = (nowDayjs, timestampDayjs) => {
  const seconds =timestampDayjs.diff(nowDayjs,"seconds")%60
  return seconds
};
const getRemainingMinutes = (nowDayjs, timestampDayjs) => {
    const minutes =timestampDayjs.diff(nowDayjs,"minutes")%60
  return minutes
};
const getRemainingHours = (nowDayjs, timestampDayjs) => {
    const hours =timestampDayjs.diff(nowDayjs,"hours")%24
  return hours
};
const getRemainingDays = (nowDayjs, timestampDayjs) => {
    const days=timestampDayjs.diff(nowDayjs,"days")
  return days
};
