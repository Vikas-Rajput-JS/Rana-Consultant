import React, { useEffect, useRef, useState } from "react";
import ApiClient from "../../Apis/ApiClient";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useDispatch } from "react-redux";
import { login_Success } from "../../Redux/Action/Action";

function Login() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const history = useNavigate();
  const ref = useRef(null);
  const [eye, setEye] = useState(false);
  useEffect(() => {
    ref.current.staticStart();
    ref.current.complete();

    if (localStorage.getItem("token")) {
      history("/");
    }
  }, []);

  const HandleSubmit = (e) => {
    e.preventDefault();
    ref.current.staticStart();
    ApiClient.post("login", form).then((res) => {
      if (res.success) {
        localStorage.setItem("token", res.token);
        toast.success(res.message);
        ApiClient.get("profile").then((res) => {
          if (res.success) {
            dispatch(login_Success(res?.data));
            history("/");
          }
        });
      }
      ref.current.complete();
    });
  };
  // toast.success('hello')
  return (
    <>
      <LoadingBar shadow={true} height={5} color="#ff460c" ref={ref} />

      <section className="relative py-20 lg:py-10 overflow-hidden mt-[10vh]">
        <div className="container px-4 mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap -mx-4 xl:items-center">
              <div className="w-full lg:w-1/2 xl:w-3/5 px-4 order-last lg:order-first">
                <div className="relative max-w-xl mx-auto lg:mx-0 lg:max-w-3xl h-full">
                  <img
                    className="block w-full h-166 lg:h-full object-cover rounded-3xl"
                    src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
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
                          fdprocessedid="i78xna"
                        />
                        <button
                          className="inline-block mr-2 h-1 w-5 rounded-full bg-white hover:bg-blue-100"
                          fdprocessedid="w0osrm"
                        />
                        <button
                          className="inline-block h-1 w-5 rounded-full bg-blue-900"
                          fdprocessedid="c50a6i"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 xl:w-2/5 px-4 mb-16 lg:mb-0">
                <div className="max-w-md lg:py-20 mx-auto lg:mr-0">
                  <h3 className="font-heading text-4xl text-gray-900 font-semibold mb-4">
                    Sign in to your account
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
                        Email
                      </label>
                      <input
                        className="w-full py-3 px-4 text-md text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                        type="email"
                        value={form?.email}
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                        }}
                        placeholder="pat@saturn.dev"
                        fdprocessedid="o9klcp"
                      />
                    </div>
                    <div className="mb-7">
                      <div className="flex mb-1.5 items-center justify-between">
                        <label
                          className="block text-md text-gray-900 font-semibold"
                          htmlFor=""
                        >
                          Password
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          className="w-full py-3 px-4 text-md text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                          type={eye ? "text" : "password"}
                          value={form?.password}
                          onChange={(e) => {
                            setForm({ ...form, password: e.target.value });
                          }}
                          placeholder="Enter your password"
                          fdprocessedid="j41x"
                        />
                        {eye ? (
                          <img
                            onClick={() => setEye(false)}
                            className="absolute w-6 cursor-pointer top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100"
                            fdprocessedid="txgt8n"
                            src="/public/close-eye.png"
                            alt=""
                          />
                        ) : (
                          <img
                            onClick={() => setEye(true)}
                            className="absolute cursor-pointer top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100"
                            fdprocessedid="txgt8n"
                            src="https://shuffle.dev/saturn-assets/images/sign-up/icon-eye.svg"
                            alt=""
                          />
                        )}
                      </div>
                      <a
                        className="inline-block cursor-pointer mt-2 text-sm font-semibold text-orange-600 hover:text-gray-900"
                        onClick={() => {
                          history("/forgot-password");
                        }}
                      >
                        Forget password?
                      </a>
                    </div>

                    <div className="flex mb-6 items-center">
                      <input type="checkbox" defaultValue="" id="" />
                      <label className="ml-2 text-md text-gray-800" htmlFor="">
                        Remember for 30 days
                      </label>
                    </div>
                    <button
                      className="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-[#ff460c] rounded-full overflow-hidden"
                      type="submit"
                      fdprocessedid="1lr4jv"
                    >
                      <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
                      <span className="relative text-lg">Login</span>
                    </button>
                    <span className="text-lg font-semibold text-gray-900">
                      <span>Don’t have an account?</span>
                      <a
                        className="ml-1 inline-block text-orange-600 hover:text-orange-700 cursor-pointer"
                        onClick={() => {
                          history("/signup");
                        }}
                      >
                        Sign up
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

export default Login;
