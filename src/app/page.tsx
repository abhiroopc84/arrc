"use client";

import AsteriskCard from "@/components/asterisk-ui";
import MainCard from "@/components/main";
import MapCard from "@/components/map-card";
import Socials from "@/components/socials";

export default function Home() {
  return (
    <div className="flex flex-col xl:flex-row gap-8 min-h-dvh xl:h-dvh w-full p-8">
      <MainCard />
      <div className="flex flex-col gap-8 h-1/2 flex-1 xl:h-full xl:w-1/2 justify-between">
        <div className="flex flex-col md:flex-row gap-8 overflow-hidden h-fit w-full">
          <AsteriskCard />
          <MapCard />
        </div>
        {/* <div
            className="flex flex-col gap-4 w-full rounded-3xl p-10"
            style={{ backgroundImage: bgimageurl }}
          >
            <span className="text-lg font-semibold">Check out my blog!</span>
          </div> */}
        <Socials />
      </div>
    </div>
  );
}
