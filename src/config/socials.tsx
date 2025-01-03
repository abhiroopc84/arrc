import { MailIcon } from "lucide-react";
import { TbBrandGithub, TbBrandLinkedin, TbBrandX } from "react-icons/tb";

const socials = [
  {
    name: "mail",
    link: "mailto:abhiroopc84@gmail.com",
    icon: <MailIcon className="w-5 h-5" />,
  },
  {
    name: "github",
    link: "https://github.com/abhiroopc84",
    icon: <TbBrandGithub className="w-5 h-5" />,
  },
  {
    name: "twitter",
    link: "https://x.com/me_abhiroop",
    icon: <TbBrandX className="w-5 h-5" />,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/abhiroopreddyc/",
    icon: <TbBrandLinkedin className="w-5 h-5" />,
  },
];

export default socials;
