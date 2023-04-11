import FacebookIcon from "@/components/icons/FacebookIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

export type Social = {
  name: string;
  url: string;
  icon: Function;
};

export const Socials: Array<Social> = [
  {
    name: "Github",
    url: "https://github.com/xd-Abi",
    icon: GithubIcon,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/abinayan-sureskumar-987369233/",
    icon: LinkedinIcon,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/abitur.sureshkumar/",
    icon: FacebookIcon,
  },
];
