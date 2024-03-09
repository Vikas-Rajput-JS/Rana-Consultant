import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import ApiClient from "../../Apis/ApiClient";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
function Signup() {
  const Navigate = useNavigate();
  const [form, setform] = useState({});
  const ref = useRef(null);
  const [eye, setEye] = useState("password");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      Navigate("/");
    }
  }, []);

  useEffect(() => {
    ref.current.staticStart();
    ref.current.complete();
  }, []);

  const HandleSubmit = (e) => {
    ref.current.staticStart();
    e.preventDefault();
    ApiClient.post("register", form).then((res) => {
      if (res.success) {
        toast.success(res?.message);
        ref.current.complete();
      } else {
        //   toast.error(res?.message)
        ref.current.complete();
      }
    });
  };

  return (
    <>
      <LoadingBar shadow={true} height={3} color="#ff460c" ref={ref} />
      <section className="relative py-20 lg:py-10 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap -mx-4 xl:items-center">
              <div className="w-full lg:w-1/2 xl:w-3/5 px-4 order-last lg:order-first">
                <div className="relative max-w-xl mx-auto lg:mx-0 lg:max-w-3xl h-full">
                  <img
                    className="block w-full h-166 lg:h-full object-cover rounded-3xl"
                    src="https://shuffle.dev/saturn-assets/images/sign-up/image-face.png"
                    alt=""
                  />
                  <div className="absolute bottom-0 w-full left-0 p-4 sm:p-6">
                    <div className="p-6 sm:p-10 backdrop-blur-md backdrop-filter bg-black bg-opacity-30 rounded-5xl">
                      <h5 className="text-3xl text-white font-semibold mb-2">
                        Selina Destin
                      </h5>
                      <span className="block text-sm text-white font-semibold mb-6">
                        Web Development Agency
                      </span>
                      <p className="max-w-xl text-2xl text-white font-semibold mb-15">
                        "Untitled has become essential in starting every new
                        project, we can't imagine working without it."
                      </p>
                      <div>
                        <button
                          className="inline-block mr-2 h-1 w-5 rounded-full bg-white hover:bg-blue-100"
                          fdprocessedid="yf603o"
                        />
                        <button
                          className="inline-block mr-2 h-1 w-5 rounded-full bg-white hover:bg-blue-100"
                          fdprocessedid="xrr668"
                        />
                        <button
                          className="inline-block h-1 w-5 rounded-full bg-blue-900"
                          fdprocessedid="vq3zoh"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 xl:w-2/5 px-4 mb-16 lg:mb-0">
                <div className="max-w-md lg:py-20 mx-auto lg:mr-0">
                  <h3 className="font-heading text-4xl text-gray-900 font-semibold mb-4">
                    Sign up to your account
                  </h3>
                  <p className="text-lg text-gray-500 mb-10">
                    Greetings on your return! We kindly request you to enter
                    your details.
                  </p>
                  <div className="flex flex-wrap mb-6 items-center -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-3 md:mb-0">
                      <a
                        className="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition duration-100"
                        href="#"
                      >
                        <img
                          src="https://shuffle.dev/saturn-assets/images/sign-up/icon-facebook.svg"
                          alt=""
                        />
                        <span className="ml-4 text-sm font-semibold text-gray-500">
                          Login with Facebook
                        </span>
                      </a>
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                      <a
                        className="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition duration-100"
                        href="#"
                      >
                        <img
                          src="https://shuffle.dev/saturn-assets/images/sign-up/icon-apple.svg"
                          alt=""
                        />
                        <span className="ml-4 text-sm font-semibold text-gray-500">
                          Login with Apple
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="flex mb-6 items-center">
                    <div className="w-full h-px bg-gray-300" />
                    <span className="mx-4 text-sm font-semibold text-gray-500">
                      Or
                    </span>
                    <div className="w-full h-px bg-gray-300" />
                  </div>
                  <form onSubmit={HandleSubmit}>
                    <div className="mb-6">
                      <label
                        className="block mb-1.5 text-sm text-gray-900 font-semibold"
                        htmlFor=""
                      >
                        First Name
                      </label>
                      <input
                        className="w-full py-3 px-4 text-lg text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                        type="text"
                        value={form?.firstName}
                        onChange={(e) => {
                          setform({ ...form, firstName: e.target.value });
                        }}
                        placeholder="First  Name"
                        fdprocessedid="r2dwz"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="block mb-1.5 text-sm text-gray-900 font-semibold"
                        htmlFor=""
                      >
                        Last Name
                      </label>
                      <input
                        className="w-full py-3 px-4 text-lg text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                        type="text"
                        value={form?.lastName}
                        onChange={(e) => {
                          setform({
                            ...form,
                            firstlastNameName: e.target.value,
                          });
                        }}
                        placeholder="Last Name"
                        fdprocessedid="r2dwz"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="block mb-1.5 text-lg text-gray-900 font-semibold"
                        htmlFor=""
                      >
                        Email
                      </label>
                      <input
                        className="w-full py-3 px-4 text-lg text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                        type="email"
                        value={form?.email}
                        onChange={(e) => {
                          setform({ ...form, email: e.target.value });
                        }}
                        placeholder="pat@saturn.dev"
                        required
                        fdprocessedid="9kv2vg"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="block mb-1.5 text-lg text-gray-900 font-semibold"
                        htmlFor=""
                      >
                        Email
                      </label>
                        <div className="w-[100%]">

                      <PhoneInput
                        inputClass="form-control"
                        country={"us"}
                        containerClass="ml-1"
                        value={form?.mobileNo}
                        onChange={(phone,country) =>
                          {
                            console.log(country)
                            setform({ ...form, mobileNo: phone,dialCode:country?.dialCode })
                          }
                        }
                        />
                        </div>
                    </div>
                    <div className="mb-6">
                      <label
                        className="block mb-1.5 text-lg text-gray-900 font-semibold"
                        htmlFor=""
                      >
                        Password
                      </label>
                      <div className="relative">
                        <input
                          className="w-full py-3 px-4 text-lg text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                          type="password"
                          value={form?.password}
                          onChange={(e) => {
                            setform({ ...form, password: e.target.value });
                          }}
                          placeholder="min 12 cars"
                          fdprocessedid="1kvujq"
                          required
                        />
                        <button
                          className="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100"
                          fdprocessedid="c3494"
                        >
                          <img
                            src="https://shuffle.dev/saturn-assets/images/sign-up/icon-eye.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                    <div className="flex mb-6 items-center">
                      <input type="checkbox" defaultValue="" id="" />
                      <label className="ml-2 text-md text-gray-800" htmlFor="">
                        Remember me
                      </label>
                    </div>
                    <button
                      className="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-[#ff460c] rounded-full overflow-hidden"
                      type="submit"
                      fdprocessedid="4173m8"
                    >
                      <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
                      <span className="relative">Login</span>
                    </button>
                    <span className="text-lg font-semibold text-gray-900">
                      <span>Already have an account?</span>
                      <a
                        className="inline-block ml-1 text-orange-900 hover:text-orange-700"
                        onClick={() => {
                          Navigate("/login");
                        }}
                      >
                        Sign in
                      </a>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
