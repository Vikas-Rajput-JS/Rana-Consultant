import banner from '../assets/newsletter.png';
import Banner from '../shared/Banner';

const Newsletter = () => {
    return (
<section className="relative pt-24 overflow-hidden">
  <img
    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2"
    src="https://shuffle.dev/saturn-assets/images/newsletter/double-light.png"
    alt=""
  />
  <img
    className="absolute top-0 right-0"
    src="https://shuffle.dev/saturn-assets/images/newsletter/half-star-circle-top.png"
    alt=""
  />
  <div className="relative container px-4 mx-auto">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-wrap -mx-4 items-end">
        <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
          <div className="lg:pb-24 max-w-lg mx-auto">
            <span className="inline-block py-1 px-3 mb-10 text-xs uppercase font-semibold text-orange-900 bg-orange-50 rounded-full">
              Newsletter
            </span>
            <h4 className="font-heading text-4xl xs:text-5xl text-gray-900 font-bold mb-16">
              Sign up for our newsletter
            </h4>
            <div className="sm:flex mb-2 items-center">
              <input
                className="w-full mb-3 sm:mb-0 sm:mr-4 py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                type="email"
                placeholder="pat@saturn.dev"
                fdprocessedid="0pzsbk"
              />
              <button
                className="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-orange-50 bg-[#ff460c] rounded-md overflow-hidden"
                type="submit"
                fdprocessedid="0t8jth"
              >
                <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
                <div className="relative flex items-center justify-center">
                  <span className="mr-4">Subscribe</span>
                  <svg
                    width={8}
                    height={11}
                    viewBox="0 0 8 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.82994 5.04001L2.58994 0.80001C2.49698 0.706281 2.38638 0.631887 2.26452 0.581118C2.14266 0.530349 2.01195 0.504211 1.87994 0.504211C1.74793 0.504211 1.61723 0.530349 1.49537 0.581118C1.37351 0.631887 1.26291 0.706281 1.16994 0.80001C0.983692 0.987372 0.87915 1.24082 0.87915 1.50501C0.87915 1.7692 0.983692 2.02265 1.16994 2.21001L4.70994 5.75001L1.16994 9.29001C0.983692 9.47737 0.87915 9.73082 0.87915 9.99501C0.87915 10.2592 0.983692 10.5126 1.16994 10.7C1.26338 10.7927 1.3742 10.866 1.49604 10.9158C1.61787 10.9655 1.74834 10.9908 1.87994 10.99C2.01155 10.9908 2.14201 10.9655 2.26385 10.9158C2.38569 10.866 2.4965 10.7927 2.58994 10.7L6.82994 6.46001C6.92367 6.36705 6.99806 6.25645 7.04883 6.13459C7.0996 6.01273 7.12574 5.88202 7.12574 5.75001C7.12574 5.618 7.0996 5.48729 7.04883 5.36543C6.99806 5.24357 6.92367 5.13297 6.82994 5.04001Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <span className="block text-md font-semibold text-gray-400">
              <span>We care about your data in our</span>
              <a className="inline-block text-orange-900" href="#">
                privacy policy
              </a>
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <div className="max-w-lg mx-auto">
            <div className="md:flex">
              <div className="mb-6 md:mb-0 md:mr-8 pt-2 text-gray-600">
                <svg
                  width={84}
                  height={10}
                  viewBox="0 0 84 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4.5C0.585786 4.5 0.25 4.83579 0.25 5.25C0.25 5.66421 0.585786 6 1 6L1 4.5ZM84 5.25001L76.5 0.919879L76.5 9.58013L84 5.25001ZM1 6L77.25 6.00001L77.25 4.50001L1 4.5L1 6Z"
                    fill="#1E2238"
                  />
                </svg>
              </div>
              <div className="lg:max-w-md">
                <p className="text-lg font-semibold text-gray-400 mb-16">
                  Get insider access to our company by subscribing to our
                  newsletter and stay informed about our products, services, and
                  initiatives.
                </p>
                <div className="flex -mx-2 lg:-mx-4">
                  <div className="w-1/2 px-2 lg:px-4">
                    <img
                      className="w-full"
                      src="https://shuffle.dev/saturn-assets/images/newsletter/small-photo-1.png"
                      alt=""
                    />
                  </div>
                  <div className="w-1/2 px-2 lg:px-4">
                    <img
                      className="w-full"
                      src="https://shuffle.dev/saturn-assets/images/newsletter/small-photo-2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    );
};

export default Newsletter;