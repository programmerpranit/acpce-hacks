import React from "react";

const TopSection = (): JSX.Element => {
  return (
    <>
      <div className="bg-[url('/images/hackathon.jpg')] bg-cover">
        <div className="bg-primary bg-opacity-25 ">
          <div className="bg-black bg-opacity-10">
            <div className="max-w-6xl m-auto py-40">
              <div className="md:w-3/5 p-5 ">
                <h1 className="text-white">Annual Hackathon</h1>
                <h1 className="text-white">For Devs ...</h1>
                <br />
                <p className="text-white">
                  For the last 20 years the Codathon hackathon’s been the main
                  staple for coders from across the niches and different parts
                  of the US. This year, with more than 2500 tickets sold out
                  already, it looks to be the biggest one!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSection;
