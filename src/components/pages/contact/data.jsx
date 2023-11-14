import {
  MdLocationOn,
  MdPhone,
  MdEmail,
  MdAccessTimeFilled,
} from "react-icons/md";

export const contactData = [
  {
    title: "ADDRESS",
    content: [
      {
        icon: <MdLocationOn />,
        info: ["1800 Abbot Kinney Blvd. Unit D & E Venice"],
      },
    ],
  },
  {
    title: "CONTACT",
    content: [
      {
        icon: <MdPhone />,
        info: ["Mobile: (+88) – 1990 – 6886", "Hotline: 1800 – 1102"],
      },
      { icon: <MdEmail />, info: ["Mail: contact@okipull.com"] },
    ],
  },
  {
    title: "HOUR OF OPERATION",
    content: [
      {
        icon: <MdAccessTimeFilled />,
        info: [
          "Sunday & Saturday: 10:30 – 22:00",
          "Monday – Friday : 09:00 – 20:00",
        ],
      },
    ],
  },
];
