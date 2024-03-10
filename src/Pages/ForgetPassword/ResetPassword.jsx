import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ApiClient from "../../Apis/ApiClient";
import toast from "react-hot-toast";
import LoadingBar from "react-top-loading-bar";

function ResetPassword() {
  const history = useNavigate();
  const [form, setform] = useState({});
  const [eye, setEye] = useState(false);
  const [eye2, setEye2] = useState(false);
  const [submitErr, setSubmiterr] = useState(false);
  const email = localStorage.getItem('email')
  const ref = useRef(null);
  const HandleSubmit = (e) => {
    e.preventDefault();
    setSubmiterr(true);
    if (
      form?.newPassword?.length < 8 ||
      form?.newPassword != form?.confirmPassword
    )
      return false;
    ref.current.staticStart();
    ApiClient.put("reset-password", { email: email,newPassword:form?.newPassword }).then((res) => {
      if (res.success) {
        toast.success(res.message);
        localStorage.removeItem('email');
        history("/login");
      }
      ref.current.complete();
    });
  };
  return (
    <>
      {/* <Navbar/> */}
      <div class="relative flex min-h-screen  flex-col justify-center overflow-hidden bg-gray-50 py-12 w-[100%]">
        <LoadingBar shadow={true} height={4} color="#ff460c" ref={ref} />
        <div class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto  max-w-[40%] dark:border-amber-300 flex  rounded-2xl w-[100%]">
          <div
            class="mx-auto flex w-[100%] max-w-md flex-col  
         justify-center"
          >
            <div class="flex flex-col w-full items-center justify-center text-center space-y-4 ">
              <div class="font-semibold text-3xl">
                <p>Reset Your Password</p>
              </div>
              <div class="flex flex-row text-sm font-medium text-gray-400">
                {/* <p>We have sent a code to your email {email}</p> */}
              </div>
            </div>

            <div className="w-full flex justify-center items-center">
              <form onSubmit={HandleSubmit}>
                <div class="flex flex-col space-y-16">
                  <div class="flex flex-col items-center justify-evenly mx-auto w-full max-w-xs h-72">
                    <div class="w-96 h-12 relative  ">
                      <label>New Password</label>
                      <input
                        value={form?.newPassword}
                        onChange={(e) => {
                          setform({ ...form, newPassword: e.target.value });
                        }}
                        required
                        class="w-full mt-3 h-full animation duration-200 flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type={eye2 ? "text" : "password"}
                        name=""
                        id=""
                      />
                      {eye2 ? (
                        <img
                          onClick={() => setEye2(false)}
                          className="absolute w-6 cursor-pointer right-[0vh] top-[60px] mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100"
                          fdprocessedid="txgt8n"
                          src="/public/close-eye.png"
                          alt=""
                        />
                      ) : (
                        <img
                          onClick={() => setEye2(true)}
                          className="absolute w-6 cursor-pointer  right-[0vh] top-[60px] mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100"
                          fdprocessedid="txgt8n"
                          src="https://shuffle.dev/saturn-assets/images/sign-up/icon-eye.svg"
                          alt=""
                        />
                      )}
                    </div>
                    <div class="w-96 h-12  relative">
                      <span>Confirm Password</span>
                      <input
                        value={form?.confirmPassword}
                        onChange={(e) => {
                          setform({ ...form, confirmPassword: e.target.value });
                        }}
                        required
                        class="w-full animation duration-200 mt-3 h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type={eye ? "text" : "password"}
                        name=""
                        id=""
                      />
                      {eye ? (
                        <img
                          onClick={() => setEye(false)}
                          className="absolute w-6 cursor-pointer right-[0vh] top-[60px] mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100"
                          fdprocessedid="txgt8n"
                          src="/public/close-eye.png"
                          alt=""
                        />
                      ) : (
                        <img
                          onClick={() => setEye(true)}
                          className="absolute w-6 cursor-pointer right-[0vh] top-[60px] mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100"
                          fdprocessedid="txgt8n"
                          src="https://shuffle.dev/saturn-assets/images/sign-up/icon-eye.svg"
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                  {submitErr && form?.newPassword != form?.confirmPassword && (
                    <label className="text-red-600 mt-2">
                      Confirm Password is not matched with Password
                    </label>
                  )}
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

export default ResetPassword;
