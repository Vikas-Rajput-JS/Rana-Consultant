import React from 'react'

function HowWeWork() {
  return (
<section className="py-32 bg-white overflow-hidden">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap lg:items-center -m-8">
      <div className="w-full md:w-1/2 p-8">
        <img
          className="mx-auto transform hover:-translate-y-4 transition ease-in-out duration-1000"
          src="https://shuffle.dev/flaro-assets/images/how-it-works/iphone.png"
          alt=""
        />
      </div>
      <div className="w-full md:w-1/2 p-8">
        <h2 className="mb-20 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight md:max-w-lg">
          How We helps you to launch your business in no time and grow.
        </h2>
        <div className="flex flex-wrap -m-1.5">
          <div className="w-full p-1.5">
            <div className="flex flex-wrap -m-6">
              <div className="w-auto p-6">
                <div className="relative mb-3 w-10 h-10 text-lg text-white font-bold bg-indigo-600 rounded-full">
                  <img
                    className="absolute top-0 left-0"
                    src="flaro-assets/images/how-it-works/gradient.svg"
                    alt=""
                  />
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    1
                  </span>
                </div>
                <img
                  className="relative left-3"
                  src="flaro-assets/images/how-it-works/line.svg"
                  alt=""
                />
              </div>
              <div className="flex-1 p-6">
                <div className="md:max-w-xs">
                  <h3 className="mb-3 text-2xl font-semibold leading-snug">
                    Connect
                  </h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    Lorem ipsum dolor sit amet, to the consectetur adipiscing
                    elit. Volutpat tempor condimentum.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-1.5">
            <div className="flex flex-wrap -m-6">
              <div className="w-auto p-6">
                <div className="relative -left-1 mb-3 w-10 h-10 text-lg text-white font-bold bg-indigo-600 rounded-full">
                  <img
                    className="absolute top-0 left-0"
                    src="flaro-assets/images/how-it-works/gradient.svg"
                    alt=""
                  />
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    2
                  </span>
                </div>
                <img
                  className="relative left-3"
                  src="flaro-assets/images/how-it-works/line2.svg"
                  alt=""
                />
              </div>
              <div className="flex-1 p-6">
                <div className="md:max-w-xs">
                  <h3 className="mb-3 text-2xl font-semibold leading-snug">
                    Store
                  </h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    Lorem ipsum dolor sit amet, to the consectetur adipiscing
                    elit. Volutpat tempor condimentum.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-1.5">
            <div className="flex flex-wrap -m-6">
              <div className="w-auto p-6">
                <div className="relative left-5 mb-3 w-10 h-10 text-lg text-white font-bold bg-indigo-600 rounded-full">
                  <img
                    className="absolute top-0 left-0"
                    src="flaro-assets/images/how-it-works/gradient.svg"
                    alt=""
                  />
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    3
                  </span>
                </div>
              </div>
              <div className="flex-1 p-6">
                <div className="md:max-w-xs">
                  <h3 className="mb-3 text-2xl font-semibold leading-snug">
                    Ship
                  </h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    Lorem ipsum dolor sit amet, to the consectetur adipiscing
                    elit. Volutpat tempor condimentum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default HowWeWork