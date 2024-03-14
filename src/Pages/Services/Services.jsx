import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ApiClient from "../../Apis/ApiClient";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "fa-icons";
import LoadingBar from "react-top-loading-bar";
function Services() {
  const [data, setdata] = useState([]);
  const history = useNavigate();
  const ref = useRef();
  const [filters, setfilters] = useState({ page: 1, count: 5, search: "" });
  const user = useSelector((state) => state?.user?.user);
  const GetCourses = (p = {}) => {
    ref.current.staticStart();
    const filter = { ...filters, ...p };
    ApiClient.get("courses", filters).then((res) => {
      if (res.success) {
        setdata(res?.data);
        ref.current.complete();
      }
    });
  };

  useEffect(() => {
    GetCourses();
  }, []);
  return (
    <>
      <LoadingBar shadow={true} loaderSpeed={1500} height={5} color="#ff460c" ref={ref} />
      <Navbar />
      <section className="relative py-12 md:py-24 bg-body overflow-hidden bg-gradient-to-t from-purple-600 via-darkBlue-900 to-transparent">
        <div className="relative container mx-auto px-4">
          <img
            className="absolute top-0 right-0 animate-spinStar z-10"
            src="https://shuffle.dev/casper-assets/services/blink-star.png"
            alt=""
          />
          <div className="absolute top-0 right-0 -mr-52 -mt-52 w-186 h-186 bg-gradient-to-t from-purple-600 via-darkBlue-900 to-transparent rounded-full filter blur-4xl" />
          <div className="relative max-w-lg lg:max-w-4xl mx-auto lg:mx-0 mb-14">
            <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-medium text-black tracking-tight mb-6">
              Look no further! Casper is here to revolutionize
            </h2>
            <p className="max-w-xl text-xl text-gray-500 tracking-tight">
              Casper is powered by state-of-the-art artificial intelligence and
              ensuring natural and meaningful interactions
            </p>
          </div>
          <div className="w-[100%] h-16 flex justify-end items-end relative">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                GetCourses();
              }}
            >
              <input
                onChange={(e) => {
                  setfilters({ ...filters, search: e.target.value });
                }}
                type="text"
                className="rounded-md px-4 focus:outline-none focus:ring focus:border-blue-500 animation duration-200 py-1 px-6 text-2xl"
                placeholder="Search here..."
              />
              <button type="submit">
                <fa-icon
                  class="fas fa-search relative right-6 top-[2px] ring-offset-current z-10 cursor-pointer"
                  color="#2980B9"
                  size="1.2em"
                ></fa-icon>
              </button>
            </form>
          </div>

          <div className="max-w-lg mx-auto lg:max-w-none">
            <div className="relative flex flex-wrap -mx-4">
              {data &&
                data?.map((itm) => {
                  return (
                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 mt-3">
                      <div className="relative h-full p-10 rounded-3xl overflow-hidden">
                        <img
                          className="absolute top-0 left-0 w-full h-full object-cover"
                          src="https://shuffle.dev/casper-assets/services/bg-gradient-square.png"
                          alt=""
                        />
                        <div className="relative flex flex-col h-full items-start max-w-md">
                          <img
                            className="block w-18 mb-16"
                            src="https://shuffle.dev/casper-assets/services/icon-white-1.png"
                            alt=""
                          />
                          <h4 className="text-3xl font-medium mt-auto mb-4">
                            Course - {itm?.name}
                          </h4>
                          <p className="leading-snug mb-4 text-black ">
                            ChatBotX is powered by state-of-the-art artificial
                            intelligence, ensuring natural interactions with
                            your users
                          </p>
                          <a
                            className="group inline-flex w-full cursor-pointer sm:w-auto h-14 px-7 items-center justify-center text-base font-medium text-black hover:text-violet-900 bg-violet-600 hover:bg-white transition duration-200 rounded-full"
                            onClick={() => {
                              history(`/course/${itm?.id}`);
                            }}
                          >
                            <span className="mr-2">SEE DETAILS</span>
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              <div className="w-full lg:w-1/2 px-4 mt-3">
                <div className="p-10 mb-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                  <div className="relative flex flex-col h-full items-start max-w-md">
                    <img
                      className="block w-18 mb-16"
                      src="https://shuffle.dev/casper-assets/services/icon-white-2.png"
                      alt=""
                    />
                    <h4 className="text-3xl font-medium text-white mt-auto mb-4">
                      Intelligent Conversations
                    </h4>
                    <p className="leading-snug text-white mb-4">
                      ChatBotX is powered by state-of-the-art artificial
                      intelligence, ensuring natural interactions with your
                      users
                    </p>
                    <a
                      className="group inline-flex w-full sm:w-auto h-14 px-7 items-center justify-center text-base font-medium text-black hover:text-violet-900 bg-violet-600 hover:bg-white transition duration-200 rounded-full"
                      href="#"
                    >
                      <span className="mr-2">SEE DETAILS</span>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="p-6 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                  <div className="relative sm:flex items-center">
                    <img
                      className="block w-18"
                      src="https://shuffle.dev/casper-assets/services/icon-white-3.png"
                      alt=""
                    />
                    <div className="my-8 sm:my-0 sm:ml-9">
                      <h4 className="text-3xl font-medium text-white leading-8">
                        <span className="block">Seamless</span>
                        <span className="block">Integration</span>
                      </h4>
                    </div>
                    <a
                      className="group inline-flex ml-auto h-14 w-14 items-center justify-center text-black hover:text-violet-900 bg-violet-600 hover:bg-white transition duration-200 rounded-full"
                      href="#"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Services;
