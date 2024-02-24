import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function Review() {
  return (
<>
<Navbar/>
<section className="py-24 2xl:py-44 bg-blueGray-100 rounded-t-10xl overflow-hidden">
  <div className="container px-4 mx-auto">
    <span className="text-xs text-gray-300 uppercase tracking-wide">
      What people say
    </span>
    <h1 className="mt-8 mb-14 md:mb-24 text-8xl md:text-10xl xl:text-11xl font-heading font-medium leading-tight">
      Testimonials
    </h1>
    <div className="flex flex-wrap -mx-2 mb-14">
      <div className="w-full xl:w-3/5 px-2 mb-4 xl:mb-0">
        <div className="flex items-center h-full py-12 px-8 bg-white rounded-3xl">
          <div className="flex flex-wrap items-center justify-between w-full -mx-2">
            <div className="w-full md:w-auto px-2 mb-4 md:mb-0">
              <a className="block mx-auto max-w-max" href="#">
                <img
                  className="h-24 object-cover"
                  src="https://shuffle.dev/uinel-assets/images/ecommerce-reviews/product-phone1.png"
                  alt=""
                />
              </a>
            </div>
            <div className="w-full md:w-auto px-2 mb-8 md:mb-0">
              <a
                className="block mb-2 text-2xl xl:text-3xl font-heading font-medium hover:underline"
                href="#"
              >
                Apple iPhone 12 Pro
              </a>
              <div className="flex">
                <p className="text-sm font-heading font-medium mr-2">
                  <span>Color:</span>
                  <span className="text-darkBlueGray-300">Silver</span>
                </p>
                <p className="text-sm font-heading font-medium">
                  <span>Memory storage:</span>
                  <span className="text-darkBlueGray-300">128GB</span>
                </p>
              </div>
            </div>
            <div className="w-full md:w-auto px-2 mb-8 md:mb-0">
              <p className="text-xl text-blue-500 font-heading font-medium">
                $ 720,70
              </p>
            </div>
            <div className="w-full md:w-auto px-2">
              <a
                className="inline-block w-full md:w-auto py-4 px-6 text-center leading-8 font-heading font-medium tracking-tighter text-xl text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                href="#"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/5 px-2 mb-4 md:mb-0">
        <div className="py-12 px-12 h-full bg-white rounded-3xl">
          <p className="font-heading font-medium">
            <span className="text-9xl">4.3</span>
            <span className="text-gray-300">/5</span>
          </p>
          <div className="flex mb-3">
            <a className="inline-block mr-1" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                />
              </svg>
            </a>
            <a className="inline-block mr-1" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                />
              </svg>
            </a>
            <a className="inline-block mr-1" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                />
              </svg>
            </a>
            <a className="inline-block mr-1" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                />
              </svg>
            </a>
            <a className="inline-block text-gray-200" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <p className="text-sm text-gray-300 font-medium">1 218 reviews</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/5 px-2">
        <div className="py-12 px-12 h-full bg-white rounded-3xl">
          <p className="font-heading font-medium">
            <span className="text-9xl">4.1</span>
            <span className="text-gray-300">/5</span>
          </p>
          <div className="flex mb-3">
            <a className="inline-block mr-1" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                />
              </svg>
            </a>
            <a className="inline-block mr-1" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                />
              </svg>
            </a>
            <a className="inline-block mr-1" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                />
              </svg>
            </a>
            <a className="inline-block mr-1" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                />
              </svg>
            </a>
            <a className="inline-block text-gray-200" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <p className="text-sm text-gray-300 font-medium">Uistore</p>
        </div>
      </div>
    </div>
    <a
      className="inline-block mb-14 text-3xl font-heading font-medium underline hover:text-darkBlueGray-700"
      href="#"
    >
      1,218 reviews
    </a>
    <div className="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
      <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
        <div className="flex flex-wrap items-center">
          <img
            className="mr-6"
            src="https://shuffle.dev/uinel-assets/images/ecommerce-reviews/user.png"
            alt=""
          />
          <h4 className="w-full md:w-auto text-xl font-heading font-medium">
            Faustina H. Fawn
          </h4>
          <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200" />
          <span className="mr-4 text-xl font-heading font-medium">5.0</span>
          <div className="inline-flex">
            <a className="inline-block mr-1" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                />
              </svg>
            </a>
            <a className="inline-block mr-1" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                />
              </svg>
            </a>
            <a className="inline-block mr-1" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                />
              </svg>
            </a>
            <a className="inline-block mr-1" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                />
              </svg>
            </a>
            <a className="inline-block text-gray-200" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-white">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/3 mb-6 md:mb-0">
            <p className="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">
              I haretra neque non mi aliquam, finibus hart bibendum molestie.
              Vestibulum suscipit sagittis dignissim mauris.
            </p>
            <div className="-mb-2">
              <div className="inline-flex w-full md:w-auto md:mr-2 mb-2">
                <div className="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div className="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span className="text-green-500 font-heading font-medium">
                    battery life
                  </span>
                </div>
              </div>
              <div className="inline-flex w-full md:w-auto md:mr-2 mb-2">
                <div className="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div className="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span className="text-green-500 font-heading font-medium">
                    functionality
                  </span>
                </div>
              </div>
              <div className="inline-flex w-full md:w-auto mb-2">
                <div className="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div className="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span className="text-green-500 font-heading font-medium">
                    ease of use
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 text-right">
            <p className="mb-8 text-sm text-gray-300">Added 2 months ago</p>
          </div>
        </div>
      </div>
    </div>
    <div className="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
      <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
        <div className="flex flex-wrap items-center">
          <img
            className="mr-6"
            src="https://shuffle.dev/uinel-assets/images/ecommerce-reviews/user2.png"
            alt=""
          />
          <h4 className="w-full md:w-auto text-xl font-heading font-medium">
            Ainsley Stones
          </h4>
          <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200" />
          <span className="mr-4 text-xl font-heading font-medium">4.3</span>
          <div className="flex">
            <a className="inline-block mr-1" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                />
              </svg>
            </a>
            <a className="inline-block mr-1" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                />
              </svg>
            </a>
            <a className="inline-block mr-1" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                />
              </svg>
            </a>
            <a className="inline-block mr-1" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                />
              </svg>
            </a>
            <a className="inline-block text-gray-200" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-16 pt-8 pb-12 bg-white">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/3 mb-6 md:mb-0">
            <p className="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">
              I haretra neque non mi aliquam, finibus hart bibendum molestie.
              Morbi facilisis neque in condimentum malesuada. Vestibulum
              suscipit sagittis dignissim mauris.
            </p>
            <div className="-mb-2">
              <div className="inline-flex w-full md:w-auto md:mr-2 mb-2">
                <div className="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div className="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span className="text-green-500 font-heading font-medium">
                    battery life
                  </span>
                </div>
              </div>
              <div className="inline-flex w-full md:w-auto md:mr-2 mb-2">
                <div className="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div className="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span className="text-green-500 font-heading font-medium">
                    functionality
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 text-right">
            <p className="mb-8 text-sm text-gray-300">Added 2 months ago</p>
          </div>
        </div>
      </div>
    </div>
    <div className="mb-14 md:mb-24 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
      <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
        <div className="flex flex-wrap items-center">
          <img
            className="mr-6"
            src="https://shuffle.dev/uinel-assets/images/ecommerce-reviews/user3.png"
            alt=""
          />
          <h4 className="w-full md:w-auto text-xl font-heading font-medium">
            Jasmine Joy
          </h4>
          <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200" />
          <span className="mr-4 text-xl font-heading font-medium">5.0</span>
          <div className="flex">
            <a className="inline-block mr-1" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                />
              </svg>
            </a>
            <a className="inline-block mr-1" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                />
              </svg>
            </a>
            <a className="inline-block mr-1" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                />
              </svg>
            </a>
            <a className="inline-block mr-1" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="#FFCB00"
                />
              </svg>
            </a>
            <a className="inline-block text-gray-200" href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-16 pt-8 pb-12 bg-white">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/3 mb-6 md:mb-0">
            <p className="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">
              I haretra neque non mi aliquam, finibus hart bibendum molestie.
              Vestibulum suscipit sagittis dignissim mauris.
            </p>
            <div className="-mb-2">
              <div className="inline-flex w-full md:w-auto md:mr-2 mb-2">
                <div className="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div className="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span className="text-green-500 font-heading font-medium">
                    battery life
                  </span>
                </div>
              </div>
              <div className="inline-flex w-full md:w-auto md:mr-2 mb-2">
                <div className="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div className="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span className="text-green-500 font-heading font-medium">
                    functionality
                  </span>
                </div>
              </div>
              <div className="inline-flex w-full md:w-auto mb-2">
                <div className="flex items-center h-12 pl-2 pr-6 bg-green-100 border-2 border-green-500 rounded-full">
                  <div className="flex mr-2 w-8 h-8 items-center justify-center bg-white rounded-full text-green-500">
                    <svg
                      width={11}
                      height={11}
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span className="text-green-500 font-heading font-medium">
                    ease of use
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 text-right">
            <p className="mb-8 text-sm text-gray-300">Added 2 months ago</p>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center">
      <button className="inline-block w-full md:w-auto h-full py-4 px-10 leading-8 font-heading font-medium tracking-tighter text-xl text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">
        See all
      </button>
    </div>
  </div>
</section>
<Footer/>
</>
  )
}

export default Review