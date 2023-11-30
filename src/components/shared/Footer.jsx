import { NavLink } from "react-router-dom";
import tw from "tailwind-styled-components";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoYoutube,
  BiLogoTwitter,
} from "react-icons/bi";
import { Tooltip } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Toes>
      <div className="w-[60%] space-y-6 mx-auto">
        {/* footer links & social links  */}
        <Div>
          <ul className="flex gap-x-8">
            {navigation.map(({ label, url }) => (
              <Link key={"fotter"+url}>
                <NavLink to={url}>{label}</NavLink>
              </Link>
            ))}
          </ul>
          <SocialContact />
        </Div>
        {/*Rights and imgs */}
        <Div>
          <h1 className="text-[#7e7e7e] text-sm">
            © 2023 lezada. All Rights Reserved |
            <span className="font-bold text-black"> (+20) 123 567890</span> |
            <a href="/"> contact@osama.com</a>
          </h1>
          <img src="public/pay.png" alt="ways-to-pay" />
        </Div>
      </div>
    </Toes>
  );
}

export const SocialContact = () => {
  return (
    <div className="flex gap-x-3 text-[#333333] text-xl">
      {social.map(({ icon, label, url }, i) => (
        <Tooltip label={label} hasArrow placement="top" key={"social"+i}>
          <a
            href={url}
            rel="noreferrer"
            target="_blank"
            aria-label={label + "link"}
          >
            {icon}
          </a>
        </Tooltip>
      ))}
    </div>
  );
};

const Link = tw.li`
text-[#7e7e7e]
hover:text-black
[&>a.active]:text-[#414040]
[&>a]:border-b
[&>a]:border-transparent
[&>a.active]:!border-black
text-sm
font-semibold
`;

const Div = tw.div`
flex
justify-between
items-center
w-full
`;

const Toes = tw.footer`
py-28
space-y-4
bg-[#f8f8f8]
`;

const navigation = [
  { label: "HOME", url: "/" },
  { label: "FAQS", url: "/FAQ" },
  { label: "ABOUT US", url: "/about-us" },
  { label: "CONTACT US", url: "/contact-us" },
];

const social = [
  {
    icon: <BiLogoFacebook />,
    label: "Facebook",
    url: "https://www.facebook.com/",
  },
  {
    icon: <BiLogoInstagram />,
    label: "Instagram",
    url: "https://www.instagram.com/",
  },
  {
    icon: <BiLogoYoutube />,
    label: "Youtube",
    url: "https://www.youtube.com/",
  },
  {
    icon: <BiLogoTwitter />,
    label: "Twitter",
    url: "https://www.twitter.com/",
  },
];
