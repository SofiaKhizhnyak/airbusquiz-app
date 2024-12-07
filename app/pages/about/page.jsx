import React from "react";

function About() {
  return (
    <div className="poppins p-6 h-full flex justify-center ">
      <div className="  relative block rounded-lg border border-gray-100 p-4 max-w-lg">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-sky-50 via-blue-500 to-blue-900"></span>

        <div>
          <h3 className="text-lg sm:text-xl  font-bold text-blue-900 text-center uppercase text-shadow-md">
            Fasten your seatbelt and quiz on!
          </h3>
        </div>

        <div className="rounded-xl border-2  border-gray-100 bg-white mt-3">
          <div className="flex justify-center items-center gap-3 p-4">
            <img
              alt="thommy from little britain show"
              src="/images/pilot.png"
              className="size-24 rounded-lg object-cover"
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
            <img
              alt="fly with us show crew"
              src="/images/flywithus.jpg"
              className="size-24 rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="rounded-xl border-2  border-gray-100 bg-white mt-2">
          <div className="flex justify-center items-center gap-3 p-3">
            <img
              alt="sofia portrait"
              src="/images/minime.png"
              className="size-24 rounded-lg object-fill opacity-90"
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
        </div>
      </div>
    </div>
  );
}

export default About;
