import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ApiClient from "../../Apis/ApiClient";
import toast from "react-hot-toast";
import LoadingBar from "react-top-loading-bar";

function ForgotPassword() {
  const history = useNavigate();
  const [form, setform] = useState({});
  const ref = useRef(null);
  const HandleSubmit = (e) => {
    ref.current.staticStart();
    e.preventDefault();
    ApiClient.post("forgot-password", { email: form?.email }).then((res) => {
      if (res.success) {
        toast.success(res.message);
        localStorage.setItem("email", form?.email);
        history("/otp-verify");
        ref.current.complete();
      }
    });
  };
  return (
    <>
      {/* <Navbar/> */}
      <div class="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-gray-50 py-12 w-[100%]">
        <LoadingBar shadow={true} height={4} color="#ff460c" ref={ref} />
        <div class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-[40%] flex justify-center items-center rounded-2xl w-[100%]">
          <div
            class="mx-auto flex w-[100%] max-w-md flex-col space-y-16 flex
         justify-center"
          >
            <div class="flex flex-col w-full items-center justify-center text-center space-y-4 ">
              <div class="font-semibold text-3xl">
                <p>Email Verification</p>
              </div>
              <div class="flex flex-row text-sm font-medium text-gray-400">
                {/* <p>We have sent a code to your email {email}</p> */}
              </div>
            </div>

            <div className="w-full flex justify-center items-center">
              <form onSubmit={HandleSubmit}>
                <div class="flex flex-col space-y-16">
                  <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <div class="w-80 h-12  ">
                      <input
                        value={form?.email}
                        onChange={(e) => {
                          setform({ ...form, email: e.target.value });
                        }}
                        required
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name=""
                        placeholder="Enter your Email"
                        id=""
                      />
                    </div>
                  </div>

                  <div class="flex flex-col space-y-5 justify-center">
                    <div>
                      <button
                        type="submit"
                        class="flex flex-row items-center justify-center text-center w-[70%] ml-16 border rounded-xl outline-none py-3 bg-blue-700 border-none text-white text-sm shadow-sm"
                      >
                        Send OTP
                      </button>
                    </div>

                    <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Remembered Password ?</p>{" "}
                      <p
                        onClick={() => {
                          history("/login");
                        }}
                        class="flex flex-row items-center text-blue-600 cursor-pointer hover:underline"
                        rel="noopener noreferrer"
                      >
                        Log In
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
