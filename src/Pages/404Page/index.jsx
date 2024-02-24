import React from 'react'

function NotFound() {
  return (
<section className="relative py-20 md:py-32 overflow-hidden mt-[10vh]">
  <img
    className="absolute top-0 left-0 m-12"
    src="saturn-assets/images/http-codes/blue-light-left.png"
    alt=""
  />
  <img
    className="absolute bottom-0 right-0 m-12"
    src="saturn-assets/images/http-codes/orange-light-right.png"
    alt=""
  />
  <div className="relative container px-4 mx-auto">
    <div className="max-w-5xl mx-auto">
      <img
        className="block mb-4 mx-auto"
        src="saturn-assets/images/http-codes/alien-ship.png"
        alt=""
      />
      <div className="flex mb-8 items-end justify-center">
        <span className="text-9xl sm:text-11xl font-bold text-gray-900">4</span>
        <img
          className="block mx-4"
          src="https://shuffle.dev/saturn-assets/images/http-codes/cry-face-icon.png"
          alt=""
        />
        <span className="text-9xl sm:text-11xl font-bold text-gray-900">4</span>
      </div>
      <h2 className="font-heading text-center text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
        Oops! Can't Find That Page
      </h2>
      <p className="max-w-lg mx-auto text-xl font-semibold text-gray-500 mb-12 md:mb-20">
        Sorry, the page you are looking for doesn't exist or has been moved. Try
        searching our site:
      </p>
      <div className="text-center">
        <a
          className="relative group inline-block py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-orange-900 rounded-full overflow-hidden"
          href="/"
        >
          <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
          <span className="relative">Take me home</span>
        </a>
      </div>
    </div>
  </div>
</section>

  )
}

export default NotFound