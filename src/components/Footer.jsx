import logo from "../assets/logo.png";

// social icons
import fb from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import twiteer from '../assets/twiter.png'
import linkdin from '../assets/linkedIn.png'

const Footer = () => {
  return (
    <section className="py-20">
    <div className="container px-4 mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap -mx-4 pb-28">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-md mx-auto lg:mx-0">
              <h3 className="max-w-sm font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                <span>Ready to get</span>
                <span className="font-serif italic">started</span>
                <span>?</span>
              </h3>
              <p className="max-w-sm text-gray-500 mb-16">
                If there are questions you want to ask, we will answer all your
                question
              </p>
              <div className="sm:flex mb-2 items-center">
                <input
                  className="w-full mb-3 sm:mb-0 sm:mr-4 pb-4 bg-transparent border-b border-gray-200 text-sm text-gray-900 placeholder-gray-400 outline-none"
                  type="email"
                  placeholder="Enter your email"
                  fdprocessedid="rfyq3i"
                />
                <button
                  className="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-orange-50 bg-[#ff460c] rounded-full overflow-hidden"
                  type="submit"
                  fdprocessedid="0m1gia"
                >
                  <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
                  <span className="relative">Subscribe</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-md mx-auto lg:mr-0">
              <p className="text-2xl font-semibold text-gray-900 mb-16">
                Maybe your question is have been answered, check this out.
              </p>
              <div className="pb-5 mb-5 border-b border-gray-200">
                <a className="group flex items-center justify-between" href="#">
                  <span className="text-lg text-gray-500 group-hover:text-orange-900">
                    What is Coca Soft
                  </span>
                  <span>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 5L21 12M21 12L14 19M21 12L3 12"
                        stroke="#FF460C"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
              <div className="pb-5 mb-5 border-b border-gray-200">
                <a className="group flex items-center justify-between" href="#">
                  <span className="text-lg text-gray-500 group-hover:text-orange-900">
                    How can I get service from Coca Soft
                  </span>
                  <span>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 5L21 12M21 12L14 19M21 12L3 12"
                        stroke="#FF460C"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
              <div>
                <a className="group flex items-center justify-between" href="#">
                  <span className="text-lg text-gray-500 group-hover:text-orange-900">
                    What kind of service will I get
                  </span>
                  <span>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 5L21 12M21 12L14 19M21 12L3 12"
                        stroke="#FF460C"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-gray-200">
          <div className="lg:flex items-center">
            <div className="flex mb-6 lg:mb-0 lg:mr-18 items-center">
              <a
                className="inline-block mr-5 hover:bg-orange-50 rounded-md p-1"
                href="#"
              >
                <img
                  src="saturn-assets/images/footers/icon-facebook.svg"
                  alt=""
                />
              </a>
              <a
                className="inline-block mr-5 hover:bg-orange-50 rounded-md p-1"
                href="#"
              >
                <img
                  src="saturn-assets/images/footers/icon-instagram.svg"
                  alt=""
                />
              </a>
              <a
                className="inline-block mr-5 hover:bg-orange-50 rounded-md p-1"
                href="#"
              >
                <img src="saturn-assets/images/footers/icon-youtube.svg" alt="" />
              </a>
              <a
                className="inline-block hover:bg-orange-50 rounded-md p-1"
                href="#"
              >
                <img
                  src="saturn-assets/images/footers/icon-linkedin.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="flex mb-6 lg:mb-0 items-center">
              <a
                className="inline-block mr-4 sm:mr-10 text-sm font-semibold text-gray-500 hover:text-gray-600"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="inline-block mr-4 sm:mr-10 text-sm font-semibold text-gray-500 hover:text-gray-600"
                href="#"
              >
                Terms &amp; Conditions
              </a>
              <a
                className="inline-block text-sm font-semibold text-gray-500 hover:text-gray-600"
                href="#"
              >
                Support
              </a>
            </div>
            <span className="inline-block ml-auto text-sm text-gray-500">
              © All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Footer;
