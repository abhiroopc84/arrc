import { bgimageurl } from "@/config/home";
import skills from "@/config/skills";
import { ModeToggle } from "./theme/mode-toggle";
import Image from "next/image";

const MarqueeIcons = () => {
  return (
    <div className="flex flex-row gap-12 text-lg py-4 px-6 animate-marquee z-50 group-hover:pause">
      {Object.keys(skills).map((skillCategory) => (
        <div key={skillCategory} className="flex flex-row gap-12">
          {skills[skillCategory].map((skill, index) => {
            return (
              <span
                key={skill.name}
                className="flex flex-row items-center gap-2"
              >
                {skill.icon}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};

const MainCard = () => {
  return (
    <div className="flex flex-col p-10 rounded-3xl text-foreground h-1/2 xl:h-full xl:w-1/2 relative overflow-hidden justify-between">
      <div className="aspect-square rounded-full bg-red-300 absolute top-0 -right-[20%] w-[50%] animate-cloud-bounce"></div>
      <div className="aspect-square rounded-full bg-yellow-300 absolute -bottom-[20%] -right-[10%] w-[50%] animate-cloud-bounce"></div>
      <div
        className="absolute top-0 right-0 w-full h-full rounded-3xl backdrop-blur-3xl"
        style={{
          backgroundImage: bgimageurl,
        }}
      ></div>

      <div className="z-50 font-semibold text-lg flex flex-row gap-2 items-center w-full justify-between">
        <Image src={"/arrc-logo.png"} width={40} height={40} alt={""}></Image>
        <span className="hidden md:flex">arrc</span>
      </div>
      <div className="absolute top-10 right-10 flex md:hidden z-50">
        <ModeToggle />
      </div>
      <div className="flex flex-col gap-10 pt-20 xl:pt-0">
        <p className="text-4xl font-semibold leading-[50px] z-50">
          <span>Hello,</span>
          <span> I’m Abhiroop Reddy,</span>
          <span> cs undergrad and a Frontend Developer</span>
          <span> contributing to Open Source Projects.</span>
        </p>
        <div className="flex flex-row left-0 group">
          <MarqueeIcons />
          <MarqueeIcons />
          <MarqueeIcons />
          <MarqueeIcons />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
