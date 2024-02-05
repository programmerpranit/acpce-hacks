import Image from "next/image";
import React from "react";

const Characteristics = (): JSX.Element => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row my-20 items-baseline
       max-w-7xl m-auto"
      >
        <Characteristic
          img="/images/participants.png"
          title="Participants"
          desc="Attended by thousands of coders from all walks of life and literally all states of America, our hackathon is huge"
        />
        <Characteristic
          img="/images/annual.png"
          title="Annual"
          desc="Having been the biggest thing in the industry for the last 20 years, the Codathon now carries on into its 21st edition."
        />
        <Characteristic
          img="/images/schedule.png"
          title="Schedule"
          desc="Spread over the course of 4 full days, the Codathon starts at 6am every day and goes on until 2am - 20 hours straight!"
        />
        <Characteristic
          img="/images/tickets.png"
          title="Tickets"
          desc="We have never lowered our tickets pricing policy lower than this year. Ultimately this means that it is cheaper this year!"
        />
      </div>
    </>
  );
};

export default Characteristics;

const Characteristic = ({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}): JSX.Element => {
  return (
    <>
      <div className="md:w-1/4 p-5">
        <Image src={img} alt="" width={70} height={70} />
        <h3 className="py-2">{title}</h3>
        <p className="text-sm">{desc}</p>
      </div>
    </>
  );
};
