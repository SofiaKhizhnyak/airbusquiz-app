"use client";
import React from "react";
import Card from "../../components/Card";

function About() {
  return (
    <div className="poppins p-6 max-h-screen flex justify-center mt-2 max-w-lg">
      <div className="  relative block rounded-lg border border-gray-100 p-4 ">
        {/* Top Gradient Span */}
        <span className="absolute rounded-t-lg inset-x-0 top-0 h-2 bg-gradient-to-r from-blue-900 via-blue-500 to-sky-50"></span>

        {/* Bottom Gradient Span */}
        <span className="absolute rounded-b-lg inset-x-0 bottom-0 h-2 bg-gradient-to-r from-sky-50 via-blue-500 to-blue-900"></span>

        <div>
          <h3 className="text-lg sm:text-xl  font-bold text-blue-900 text-center uppercase text-shadow-md">
            Fasten your seatbelt and quiz on!
          </h3>
        </div>
        <Card
          src="/images/pilot.png"
          alt="Cartoon pilot icon"
          content="With quick rounds and a user-friendly layout, this app is your trusty co-pilot, ready to help you soar through your studies."
        />

        <Card
          src="/images/flywithus.jpg"
          alt="Fly with us show crew"
          content="Whether tackling ATAs, grabbing some tips or cruising through trivia, this app’s got your back for a smooth landing on exam day!"
          imageFirst
        />

        <Card
          src="/images/minime.png"
          alt="Portrait of Sofia"
          content="I built this quiz to help you succeed and get that license — let’s make it happen!"
        />

        {/* <div className="rounded-xl border-2  border-gray-100 bg-white mt-3">
          <div className="flex justify-center items-center gap-3 p-4">
            <Image
              src="/images/pilot.png"
              width={96}
              height={96}
              priority
              className="rounded-lg object-cover"
              alt="thommy from little britain show"
            />

            <div>
              <p className="text-sm text-gray-700 limited-lines">
                With quick rounds and a user-friendly layout, this app is your
                trusty co-pilot, ready to help you soar through your studies.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border-2  border-gray-100 bg-white mt-2">
          <div className="flex justify-center items-center gap-3 p-4">
            <div>
              <p className="text-sm text-gray-700 limited-lines">
                Whether tackling ATAs, grabbing some tips or cruising through
                trivia, this app’s got your back for a smooth landing on exam
                day!
              </p>
            </div>
            <Image
              src="/images/flywithus.jpg"
              width={96}
              height={96}
              className="rounded-lg object-cover"
              alt="fly with us show crew"
            />
          </div>
        </div>
        <div className="rounded-xl border-2  border-gray-100 bg-white mt-2">
          <div className="flex justify-center items-center gap-3 p-3">
            <Image
              src="/images/minime.png"
              width={96}
              height={96}
              className="rounded-lg object-fill opacity-90"
              alt="sofia portrait"
            />
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-sm text-indigo-900 ">
                I built this quiz to help you succeed and get that license —
              </p>
              <p className="text-sm text-sky-900 uppercase font-semibold">
                let’s make it happen!
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default About;
