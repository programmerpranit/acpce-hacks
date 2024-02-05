import Characteristics from "@/sections/Characteristics";
import TopSection from "@/sections/TopSection";
import VisitOurHackathon from "@/sections/VisitOurHackathon";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <TopSection />
      <Characteristics />
      <VisitOurHackathon />
      {/* <div className="h-screen bg-red-100"></div> */}
      {/* <div className="h-screen bg-red-100"></div> */}
    </>
  );
}
