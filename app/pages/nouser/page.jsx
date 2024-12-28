"use client";
import { TbFaceIdError } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SendEmail from "../../components/SendEmail";
import { IoCloseCircleOutline } from "react-icons/io5";
import { usePrefetchPages } from "../../hooks/usePrefetchPages";

function NoUserFound({ message }) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  usePrefetchPages(["/pages/signup"]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="m-10 flex flex-col items-center justify-center">
      <div className="rounded-3xl shadow-2xl  sm:w-3/5 md:w-3/6">
        <div className="py-12 px-4 text-center sm:p-12">
          <div className="flex items-center justify-center gap-2  text-blue-950">
            <p className="md:text-lg font-semibold uppercase text-md">
              Oops, something went wrong
            </p>
            <TbFaceIdError size={24} />
          </div>
          <h2 className="mt-5 text-md ">{message || "No user was found."}</h2>
          <div className="flex flex-col items-center sm:px-0 mt-5 px-8">
            <button
              onClick={() => router.replace("/pages/signup")}
              className="mt-5 w-4/5 rounded-full bg-teal-900 py-2 text-lg text-white shadow-xl"
            >
              Sign up now
            </button>
            <button
              onClick={toggleModal}
              className="mt-5 sm:w-4/5 rounded-full bg-sky-900 py-2 px-3 text-md  text-white shadow-xl"
            >
              Send email to get help
            </button>
          </div>
        </div>
      </div>
      {/* Modal popup for SendEmail */}
      {isModalOpen && (
        <div className="fixed flex items-center justify-center inset-0 z-50 bg-black bg-opacity-50 p-10">
          <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 w-full max-w-lg h-4/5 shadow-lg relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-600  p-2"
            >
              <IoCloseCircleOutline size={24} />
            </button>
            <SendEmail style={{ padding: 20 }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default NoUserFound;
