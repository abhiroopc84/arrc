import socials from "@/config/socials";
import { Button } from "./ui/button";
import Link from "next/link";
import { FileIcon, MoveUpRight } from "lucide-react";

const Socials = () => {
  return (
    <div className="flex flex-row gap-4 w-full rounded-3xl items-center justify-center p-2 border md:justify-normal md:p-0 md:border-none">
      {socials.map((social) =>
        social.name === "mail" ? (
          <Button key={social.name} asChild className="flex flex-row gap-2">
            <Link href={social.link}>
              <span className="md:hidden">{social.icon}</span>
              <span className="md:flex hidden font-semibold">Contact me</span>
            </Link>
          </Button>
        ) : (
          <Button
            key={social.name}
            size={"icon"}
            asChild
            className="flex flex-row gap-2"
          >
            <Link href={social.link}>{social.icon}</Link>
          </Button>
        )
      )}
      <Button asChild>
        <Link
          href={
            "https://drive.google.com/file/d/1QFyU1NBgrg4B7cD_XR1kNqUmFdjYC0M7/view?usp=sharing"
          }
          className="font-semibold flex flex-row items-center text-lg"
        >
          <FileIcon className="h-5 w-5 md:hidden" />
          <span className="md:flex hidden">resume </span>{" "}
          <MoveUpRight className="h-4 w-4 md:flex hidden" />
        </Link>
      </Button>
    </div>
  );
};

export default Socials;
