import React from "react";

const VisitOurHackathon = (): JSX.Element => {
  return (
    <>
      <div className="bg-[url('/images/coding-bg.jpg')]  bg-cover backdrop-blur-2xl">
        <div className="bg-black bg-opacity-70">
          <div className="bg-primary bg-opacity-10 py-28">
            <div className="max-w-6xl m-auto p-5">
              <h2 className="text-white font-medium">
                If You Are a Coder & Want Interactive Practice & Challenge, Come
                Visit Our{" "}
                <span className="font-bold text-primary"> Hackathon!</span>
              </h2>
              <p className="text-white pt-6">
                {
                  "Working with your website's or your application's backend architecture is just as important as making sure that the wheelbase of your car is ok, before driving it. This is why we are sure that coding hackathon's such as the Codathon is, provides awesome practice for all of these skills!"
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisitOurHackathon;
