import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import GooglePlaceAutoComplete from '../../components/GoogleAutoComplete'
import addressModel from '../../Models/AddressModel';
import { useSelector } from 'react-redux';

function ContactUs() {
  const user = useSelector((state)=>state.user)
  console.log(user,'===========================================Contactus')

  return (
<>
<Navbar/>
<section className="relative py-20 md:py-32 overflow-hidden">
  <img
    className="absolute top-0 right-0 -mt-24"
    src="https://shuffle.dev/saturn-assets/images/contact/light-orange-right.png"
    alt=""
  />
  <div className="relative container px-4 mx-auto">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-2xl mb-24">
        <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
          CONTACT US
        </span>
        <h1 className="max-w-md font-heading text-5xl xs:text-6xl font-bold text-gray-900 mb-4">
          <span>Don’t hesitate</span>
          <span className="font-serif italic">to talk with us</span>
        </h1>
        <p className="text-xl text-gray-500 font-semibold">
          Relax, we are ready to support 24/7 for you
        </p>
      </div>
      <div className="flex flex-wrap -mx-4 items-center">
        <div className="w-full lg:w-1/2 px-4 mb-20 lg:mb-0">
          <div className="flex mb-16 items-center">
            <div className="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-yellow-200">
              <img src="https://shuffle.dev/saturn-assets/images/contact/icon-email.svg" alt="" />
            </div>
            <div>
              <span className="sm:text-lg text-gray-500">Email</span>
              <span className="block text-lg sm:text-2xl font-semibold text-gray-900">
                hello@yourdomain.com
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-blue-200">
              <img src="https://shuffle.dev/saturn-assets/images/contact/icon-phone.svg" alt="" />
            </div>
            <div>
              <span className="sm:text-lg text-gray-500">Phone</span>
              <span className="block text-lg sm:text-2xl font-semibold text-gray-900">
                +1 891 4937
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <div className="max-w-lg lg:max-w-xl lg:ml-auto">
            <h4 className="text-2xl font-bold text-gray-900 mb-8">
              Drop us a line
            </h4>
            <form action="">
              <div className="flex flex-wrap -mx-4 mb-6">
                <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
                  <div>
                    <label
                      className="block mb-1.5 text-sm font-semibold"
                      htmlFor=""
                    >
                      <span>Full Name</span>
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                      type="text"
                      placeholder="Jovanca Azalea"
                      fdprocessedid="18m7y"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <div>
                    <label
                      className="block mb-1.5 text-sm font-semibold"
                      htmlFor=""
                    >
                      <span>Email</span>
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                      type="text"
                      placeholder="Type your email"
                      fdprocessedid="2fq1j9"
                    />
                     
                  </div>
                </div>
              </div>
              <div className="mb-9">
                <label
                  className="block mb-1.5 text-sm font-semibold"
                  htmlFor=""
                >
                  <span>Message</span>
                  <span className="text-red-600">*</span>
                </label>
                <textarea
                  className="w-full h-12 py-3 px-4 resize-none text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                  type="text"
                  placeholder="Type your email"
                  defaultValue={""}
                />
              </div>
              <button
                className="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-orange-50 bg-[#ff460c]  rounded-md overflow-hidden"
                type="submit"
                fdprocessedid="dyd5v"
              >
                <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
                <span className="relative">Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
</>
  )
}

export default ContactUs