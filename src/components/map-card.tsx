import Link from "next/link";
import { Button } from "./ui/button";
import { MapPinHouse } from "lucide-react";
import MapBoxLg from "./map-box-lg";

const MapCard = () => {
  return (
    <div className="flex flex-col rounded-3xl border p-10 md:w-1/2 gap-8">
      <div className="flex flex-row justify-between w-full items-center">
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 items-center">
            <span className="font-semibold text-lg">based in</span>
          </div>
          <span>hyderabad, telangana, india</span>
        </div>
        <Button size={"icon"} asChild>
          <Link href={"https://maps.app.goo.gl/nCpQP9Xv5szwbFzR8"}>
            <MapPinHouse className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <MapBoxLg />
    </div>
  );
};

export default MapCard;
