import React, { useRef, useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import LoadingBar from "react-top-loading-bar";
import ApiClient from "../../Apis/ApiClient";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function OTPVerify() {
  const [OTP, setOTP] = useState("");
  const email = localStorage.getItem("email");
  const history = useNavigate();
  const ref = useRef(null);
  const HandleSubmit = (e) => {
    ref.current.staticStart();
    e.preventDefault();

    ApiClient.post("otp-verify", { otp: OTP, email }).then((res)=>{
      if(res.success){
        toast.success(res.message )
        history('/reset-password')
      }
    })
    ref.current.complete();
  };

  const ResendOTP = () => {
    ref.current.staticStart();
    // e.preventDefault();
    ApiClient.post("forgot-password", { email }).then((res) => {
      if (res.success) {
        toast.success(res.message);

        ref.current.complete();
      }
    });
  };
  return (
    <>
      <div class="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-gray-50 py-12 w-[100%]">
        <LoadingBar shadow={true} height={5} color="red" ref={ref} />
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
                <p>We have sent a code to your email {email}</p>
              </div>
            </div>

            <div className="w-full flex justify-center items-center">
              <form onSubmit={HandleSubmit} method="post">
                <div class="flex flex-col space-y-16">
                  <div class="flex flex-row items-center justify-center mx-auto w-full max-w-xs">
                    <div class="w-16 h-16  flex justify-center">
                      <OTPInput
                        required
                        value={OTP}
                        onChange={setOTP}
                        autoFocus={true}
                        OTPLength={6}
                        otpType="number"
                        disabled={false}
                        inputStyles={{
                          border: "1px solid black",
                          borderRadius: "3px",
                          height: "7vh",
                          width: "7vh",
                          // padding: "5px",
                        }}
                        secure
                      />
                    </div>
                  </div>

                  <div class="flex flex-col space-y-5">
                    <div>
                      <button class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                        Verify Account
                      </button>
                    </div>

                    <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't recieve code?</p>{" "}
                      <button
                        class="flex cursor-pointer flex-row items-center text-blue-600"
                        rel="noopener noreferrer"
                        onClick={ResendOTP}
                      >
                        Resend
                      </button>
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

export default OTPVerify;
