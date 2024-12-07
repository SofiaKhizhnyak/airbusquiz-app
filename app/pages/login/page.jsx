"use client";
import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { LiaPlaneArrivalSolid } from "react-icons/lia";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbLogin2 } from "react-icons/tb";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Spinner = dynamic(() =>
  import("@nextui-org/react").then((mod) => mod.Spinner)
);

export default function Login() {
  const { login, error, isLoading } = useAuth();
  const [email, setUemail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const router = useRouter();

  useEffect(() => {
    router.prefetch("/pages/start");
    router.prefetch("/pages/nouser");
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setFormError("");

      if (!email.trim() || !password.trim()) {
        setFormError("Both fields are required.");
        return;
      }

      await login(email, password);
    },
    [email, password, login]
  );

  return (
    <div className="md:m-20 mt-8 px-5 py-6 max-h-fit w-auto poppins text-center">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-4 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <div className="flex items-center justify-center gap-2">
              <h1 className="max-w-xl text-xl poppins-semibold">
                Welcome Back!
              </h1>
              <LiaPlaneArrivalSolid size={26} />
            </div>

            <p className="max-w-xl text-lg mt-3 text-wrap">
              Ready to continue your journey?
            </p>
            <div className="flex flex-row gap-2 items-center justify-center text-lg text-blue-950 ">
              <p>Please login </p>
              <TbLogin2 size={26} />
            </div>

            <div className="mt-6">
              <p className="text-sm mb-1 md:text-lg">
                If you have any issues, feel free to reach out!
              </p>
              <div className="flex justify-center items-center gap-2">
                <RiLockPasswordLine className="text-gray-500" />
                <p className="text-md text-pink-600 tracking-widest md:text-lg">
                  sofiehij@hotmail.co.il
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-10 shadow-lg lg:col-span-3 lg:p-12 mt-3">
            <form onSubmit={handleSubmit} className="space-y-2 lg:space-y-4">
              {formError && (
                <p className="text-red-500 text-sm" aria-live="polite">
                  {formError}
                </p>
              )}
              {error && (
                <p className="text-red-500 text-sm" aria-live="polite">
                  {error}
                </p>
              )}

              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm custom-input"
                  placeholder="Email"
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setUemail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm custom-input"
                  placeholder="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-block  rounded-lg bg-blue-950 px-5 py-3 font-medium text-white w-full"
                >
                  {isLoading ? <Spinner color="blue" size="sm" /> : "Log In"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
