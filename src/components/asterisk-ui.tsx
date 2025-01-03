import { Asterisk, MoveUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import EvervaultCard from "./evervault-card";

const AsteriskCard = () => {
  return (
    <div className="flex flex-col items-start p-10 rounded-3xl border gap-8 md:w-1/2 h-fit">
      <div className="flex flex-row justify-between w-full items-center">
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 items-center">
            <span className="text-lg font-semibold">asterisk/ui</span>
            <Asterisk className="h-5 w-5 animate-spin" />
          </div>

          <span>beautiful animated components</span>
        </div>
        <Button size={"icon"} asChild>
          <Link href={"https://ui.asterisk.uno/"}>
            <MoveUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="w-full">
        <EvervaultCard className="text-lg font-semibold">hover</EvervaultCard>
      </div>
    </div>
  );
};

export default AsteriskCard;
