import React from 'react'
import Navbar from '../../components/Navbar'

function Payment() {
  return (
<>
<Navbar/>
<section className="bg-coolGray-50 py-4">
  <div className="container px-4 mx-auto">
    <div className="shadow-dashboard">
      <div className="p-6 pb-0 h-full border border-coolGray-100 overflow-hidden bg-white rounded-t-md">
        <div className="pb-6 border-b border-coolGray-100">
          <div className="flex flex-wrap items-center justify-between -m-2">
            <div className="w-full p-2">
              <h2 className="text-coolGray-900 text-lg font-semibold">
                Payment method
              </h2>
              <p className="text-xs text-coolGray-500 font-medium">
                Update your billing details and address.
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 border-b border-coolGray-100">
          <div className="w-full md:w-10/12">
            <div className="flex flex-wrap -m-3 mb-2">
              <div className="w-full md:w-1/3 p-3">
                <p className="text-sm text-coolGray-800 font-semibold">
                  Card details
                </p>
              </div>
              <div className="w-full md:flex-1 p-3">
                <p className="mb-1.5 font-medium text-base text-coolGray-800">
                  Name on card
                </p>
                <input
                  className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                  type="text"
                  placeholder="John Doe"
                  fdprocessedid="st9a3w"
                />
              </div>
              <div className="w-full md:w-40 p-3">
                <p className="mb-1.5 font-medium text-base text-coolGray-800">
                  Expiry
                </p>
                <input
                  className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                  type="text"
                  placeholder="06/24"
                  fdprocessedid="54x5z"
                />
              </div>
            </div>
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/3 p-3" />
              <div className="w-full md:flex-1 p-3">
                <p className="mb-1.5 font-medium text-base text-coolGray-800">
                  Card Number
                </p>
                <div className="flex items-center focus-within:border-green-500 overflow-hidden border border-coolGray-200 rounded-lg shadow-input">
                  <div className="flex-shrink-0 pl-3.5 pr-2">
                    <img
                      src="flex-ui-assets/images/dashboard/forms/card.png"
                      alt=""
                    />
                  </div>
                  <input
                    className="w-full pr-4 py-2.5 text-base text-coolGray-900 font-normal outline-none"
                    type="text"
                    placeholder="John Doe"
                    fdprocessedid="vejc3"
                  />
                </div>
              </div>
              <div className="w-full md:w-40 p-3">
                <p className="mb-1.5 font-medium text-base text-coolGray-800">
                  CVV
                </p>
                <input
                  className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                  type="password"
                  placeholder="CVV"
                  fdprocessedid="4o2ph6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 border-b border-coolGray-100">
          <div className="w-full md:w-10/12">
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/3 p-3">
                <p className="text-sm text-coolGray-800 font-semibold">
                  Email address
                </p>
              </div>
              <div className="w-full md:flex-1 p-3">
                <input
                  className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                  type="text"
                  placeholder="johndoe@flex.co"
                  fdprocessedid="bc4hr"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 border-b border-coolGray-100">
          <div className="w-full md:w-10/12">
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/3 p-3">
                <p className="text-sm text-coolGray-800 font-semibold">
                  Address
                </p>
              </div>
              <div className="w-full md:flex-1 p-3">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/2 p-3">
                    <p className="mb-1.5 font-medium text-base text-coolGray-800">
                      Country
                    </p>
                    <div className="relative">
                      <svg
                        className="absolute right-4 top-1/2 transform -translate-y-1/2"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.3333 6.1133C11.2084 5.98913 11.0395 5.91943 10.8633 5.91943C10.6872 5.91943 10.5182 5.98913 10.3933 6.1133L8.00001 8.47329L5.64001 6.1133C5.5151 5.98913 5.34613 5.91943 5.17001 5.91943C4.99388 5.91943 4.82491 5.98913 4.70001 6.1133C4.63752 6.17527 4.58792 6.249 4.55408 6.33024C4.52023 6.41148 4.50281 6.49862 4.50281 6.58663C4.50281 6.67464 4.52023 6.76177 4.55408 6.84301C4.58792 6.92425 4.63752 6.99799 4.70001 7.05996L7.52667 9.88663C7.58865 9.94911 7.66238 9.99871 7.74362 10.0326C7.82486 10.0664 7.912 10.0838 8.00001 10.0838C8.08801 10.0838 8.17515 10.0664 8.25639 10.0326C8.33763 9.99871 8.41136 9.94911 8.47334 9.88663L11.3333 7.05996C11.3958 6.99799 11.4454 6.92425 11.4793 6.84301C11.5131 6.76177 11.5305 6.67464 11.5305 6.58663C11.5305 6.49862 11.5131 6.41148 11.4793 6.33024C11.4454 6.249 11.3958 6.17527 11.3333 6.1133Z"
                          fill="#8896AB"
                        />
                      </svg>
                      <select
                        className="appearance-none w-full py-2.5 px-4 text-coolGray-900 text-base font-normal bg-white border outline-none border-coolGray-200 focus:border-green-500 rounded-lg shadow-input"
                        fdprocessedid="ezaa1h"
                      >
                        <option>United States</option>
                        <option>Poland</option>
                        <option>France</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-3">
                    <p className="mb-1.5 font-medium text-base text-coolGray-800">
                      City
                    </p>
                    <input
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="City"
                      fdprocessedid="emmq2i"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-3">
                    <p className="mb-1.5 font-medium text-base text-coolGray-800">
                      State / Province
                    </p>
                    <input
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="State / Province"
                      fdprocessedid="d2z5v"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-3">
                    <p className="mb-1.5 font-medium text-base text-coolGray-800">
                      ZIP / Postal code
                    </p>
                    <input
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="ZIP / Postal code"
                      fdprocessedid="y8xckr"
                    />
                  </div>
                  <div className="w-full p-3">
                    <p className="mb-1.5 font-medium text-base text-coolGray-800">
                      Street address
                    </p>
                    <input
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="Street address"
                      fdprocessedid="rserxm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 bg-coolGray-50 bg-opacity-60 rounded-b-md">
        <div className="w-full md:w-10/12">
          <div className="flex flex-wrap justify-end -m-1.5">
            <div className="w-full md:w-auto p-1.5">
              <button
                className="flex flex-wrap justify-center w-full px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button"
                fdprocessedid="4o9y9"
              >
                <p>Cancel</p>
              </button>
            </div>
            <div className="w-full md:w-auto p-1.5">
              <button
                className="flex flex-wrap justify-center w-full px-4 py-2 bg-green-500 hover:bg-green-600 font-medium text-sm text-white border border-green-500 rounded-md shadow-button"
                fdprocessedid="gt45fp"
              >
                <p>Save</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default Payment