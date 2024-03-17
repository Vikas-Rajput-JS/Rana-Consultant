import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Environment from "../../environment/environment";
import toast from "react-hot-toast";
import ApiClient from "../../Apis/ApiClient";
import { useSelector } from "react-redux";
import addressModel from "../../Models/AddressModel";
import GooglePlaceAutoComplete from "../../components/GoogleAutoComplete";
import { useParams } from "react-router-dom";

function Payment() {
  const [form, setform] = useState({ expiryMonth: "", expiryYear: "" });
  const [ShowDocumet, setShowdocument] = useState(false);
  const user = useSelector((state) => state?.user?.user);
  const { id } = useParams();
  console.log(user);
  const DestinationAddress = async (e) => {
    console.log(e);
    let address = {};
    if (e.place) {
      address = await addressModel.getAddress(e.place);
    }

    setform({
      ...form,
      address: e.value || "",
      city: address.city || "",
      state: address.state || "",
      country: address.country || "",
      pincode: address.zipcode || "",
      // lat: `${address.lat}` || "",
      // lng: `${address.lng}` || "",
    });
  };
  const Handle12DMC = async (e) => {
    let file = e.target.files[0];
    let Fileform = new FormData();

    Fileform.append("file", file);

    let Upload = await fetch(`${Environment.LocalURL}common/imageUpload`, {
      method: "post",
      // headers:{"Content-Type":"multipart/form-data; boundary=--------------------------"},
      body: Fileform,
    });
    let res = await Upload.json();
    if (res.success) {
      setform({ ...form, dmc12th: res?.data?.fullPath });
    }
  };
  const Handle10DMC = async (e) => {
    let file = e.target.files[0];
    let Fileform = new FormData();

    Fileform.append("file", file);

    let Upload = await fetch(`${Environment.LocalURL}common/imageUpload`, {
      method: "post",
      // headers:{"Content-Type":"multipart/form-data; boundary=--------------------------"},
      body: Fileform,
    });
    let res = await Upload.json();
    if (res.success) {
      setform({ ...form, dmc10th: res?.data?.fullPath });
    }
  };
  const HandleADHAAR = async (e) => {
    let file = e.target.files[0];
    let Fileform = new FormData();

    Fileform.append("file", file);

    let Upload = await fetch(`${Environment.LocalURL}common/imageUpload`, {
      method: "post",
      // headers:{"Content-Type":"multipart/form-data; boundary=--------------------------"},
      body: Fileform,
    });
    let res = await Upload.json();
    if (res.success) {
      setform({ ...form, adhaar: res?.data?.fullPath });
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    ApiClient.put("edit-profile", form).then((res) => {
      if (res.success) {
        setShowdocument(false);
        toast.success("Documents updated successfuly");
      }
    });
  };

  const HandleSubmitPayment = (e) => {
    e.preventDefault();
    let value = {
      ...form,
      course_id: id,
      user_id: user?.id,
      price: 2500,
    };

    ApiClient.post("payment", value).then((res) => {
      if (res.success) {
        toast.success(res.message);
      
      }
    });
  };

  return (
    <>
      <Navbar />
      <section className="bg-coolGray-50 py-4">
        <div className="container px-4 mx-auto">
          <div className="shadow-dashboard">
            <form onSubmit={HandleSubmitPayment}>
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
                <div className="p-6 bg-coolGray-50 bg-opacity-60 rounded-b-md">
                  <div className="w-full md:w-10/12">
                    <div className="flex flex-wrap justify-end -m-1.5">
                      <div className="w-full md:w-auto p-1.5">
                        <a
                          onClick={() => {
                            setShowdocument(true);
                          }}
                          class="relative cursor-pointer p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
                        >
                          <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                          <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                            <span class="relative text-white">
                              Upload Documents
                            </span>
                          </span>
                        </a>
                      </div>
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
                          onChange={(e) => {
                            setform({ ...form, cardHolder: e.target.value });
                          }}
                          value={form?.cardHolder}
                          placeholder="John Doe"
                          fdprocessedid="st9a3w"
                          required
                        />
                      </div>
                      <div className="w-full md:w-40 p-3">
                        <p className="mb-1.5 font-medium text-base text-coolGray-800">
                          Expiry Month
                        </p>
                        <input
                          className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                          type="tel"
                          maxLength={2}
                          placeholder="12"
                          onChange={(e) => {
                            setform({
                              ...form,
                              expiryMonth: e.target.value,
                            });
                          }}
                          value={form?.expiryMonth || ""}
                          fdprocessedid="54x5z"
                          required
                        />
                      </div>
                      <div className="w-full md:w-40 p-3">
                        <p className="mb-1.5 font-medium text-base text-coolGray-800">
                          Expiry Year
                        </p>
                        <input
                          className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                          type="tel"
                          maxLength={4}
                          placeholder="2029"
                          onChange={(e) => {
                            setform({
                              ...form,
                              expiryYear: e.target.value,
                            });
                          }}
                          value={form?.expiryYear || ""}
                          fdprocessedid="54x5z"
                          required
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
                              src="	https://shuffle.dev/flex-ui-assets/images/dashboard/forms/card.png"
                              alt=""
                            />
                          </div>
                          <input
                            className="w-full pr-4 py-2.5 text-base text-coolGray-900 font-normal outline-none"
                            type="tel"
                            maxLength={12}
                            onChange={(e) => {
                              setform({
                                ...form,
                                cardNo: e.target.value,
                              });
                            }}
                            value={form?.cardNo || ""}
                            placeholder="John Doe"
                            required
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
                          maxLength={3}
                          required
                          onChange={(e) => {
                            setform({
                              ...form,
                              cvc: e.target.value,
                            });
                          }}
                          value={form?.cvc || ""}
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
                          value={user?.email}

                          disabled
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
                      <div className="w-full p-3">
                        <p className="mb-1.5 font-medium text-base text-coolGray-800">
                          Street address
                        </p>
                        <GooglePlaceAutoComplete
                          value={form?.address}
                          result={DestinationAddress}
                          placeholder="Your Location"
                        />
                      </div>
                      <div className="w-full md:flex-1 p-3">
                        <div className="flex flex-wrap -m-3">
                          <div className="w-full md:w-1/2 p-3">
                            <p className="mb-1.5 font-medium text-base text-coolGray-800">
                              City
                            </p>
                            <input
                              className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                              type="text"
                              value={form?.city}
                              required
                              onChange={(e) => {
                                setform({ ...form, city: e.target.value });
                              }}
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
                              required
                              placeholder="State / Province"
                              fdprocessedid="d2z5v"
                              value={form?.state}
                              onChange={(e) => {
                                setform({ ...form, state: e.target.value });
                              }}
                            />
                          </div>
                          <div className="w-full md:w-1/2 p-3">
                            <p className="mb-1.5 font-medium text-base text-coolGray-800">
                              ZIP / Postal code
                            </p>
                            <input
                              className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                              type="number"
                              value={form?.pincode}
                              required
                              onChange={(e) => {
                                setform({ ...form, pincode: e.target.value });
                              }}
                              placeholder="ZIP / Postal code"
                              fdprocessedid="y8xckr"
                            />
                          </div>
                          <div className="w-full md:w-1/2 p-3">
                            <p className="mb-1.5 font-medium text-base text-coolGray-800">
                              Country
                            </p>
                            <input
                              className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                              type="text"
                              value={form?.country}
                              onChange={(e) => {
                                setform({ ...form, country: e.target.value });
                              }}
                              placeholder="Country"
                              required
                              fdprocessedid="y8xckr"
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
                      type="reset"
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
            </form>
          </div>
        </div>
      </section>
      <div class="z-50 fixed top-0 hidden left-0 right-0 bottom-0 flex items-center w-full h-full p-4 bg-gray-800 bg-opacity-80 overflow-y-auto">
        <div class="max-w-xl w-full mx-auto pt-6 px-6 pb-8 bg-gray-500 rounded-xl">
          <div class="flex flex-wrap items-center mb-6">
            <div class="flex items-center justify-center h-14 w-14 mb-4 sm:mb-0 bg-gray-600 rounded-xl mr-4">
              <svg
                width="20"
                height="15"
                viewbox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 10H8C8.26522 10 8.51957 9.89464 8.70711 9.70711C8.89464 9.51957 9 9.26522 9 9C9 8.73478 8.89464 8.48043 8.70711 8.29289C8.51957 8.10536 8.26522 8 8 8H5C4.73478 8 4.48043 8.10536 4.29289 8.29289C4.10536 8.48043 4 8.73478 4 9C4 9.26522 4.10536 9.51957 4.29289 9.70711C4.48043 9.89464 4.73478 10 5 10ZM17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V12C0 12.7956 0.316071 13.5587 0.87868 14.1213C1.44129 14.6839 2.20435 15 3 15H17C17.7956 15 18.5587 14.6839 19.1213 14.1213C19.6839 13.5587 20 12.7956 20 12V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM18 12C18 12.2652 17.8946 12.5196 17.7071 12.7071C17.5196 12.8946 17.2652 13 17 13H3C2.73478 13 2.48043 12.8946 2.29289 12.7071C2.10536 12.5196 2 12.2652 2 12V6H18V12ZM18 4H2V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V4Z"
                  fill="#194BFB"
                ></path>
              </svg>
            </div>
            <div class="w-full sm:w-auto">
              <h4 class="text-xl text-gray-100 leading-6 font-semibold">
                Change your payment account
              </h4>
              <span class="text-xs text-gray-300 font-semibold">
                Update your plan payment details
              </span>
            </div>
          </div>
          <div class="relative mb-4 bg-gray-600 border-2 border-blue-500 rounded-xl">
            <div class="absolute top-0 right-0 m-6 w-6 h-6">
              <input type="checkbox" checked="" />
              <div class="absolute top-0 left-0 -ml-1 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full">
                <svg
                  width="16"
                  height="16"
                  viewbox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.473 4.80657C12.411 4.74409 12.3373 4.69449 12.256 4.66065C12.1748 4.6268 12.0876 4.60938 11.9996 4.60938C11.9116 4.60938 11.8245 4.6268 11.7433 4.66065C11.662 4.69449 11.5883 4.74409 11.5263 4.80657L6.55964 9.77991L4.47297 7.68657C4.40863 7.62441 4.33267 7.57554 4.24943 7.54274C4.16619 7.50993 4.07731 7.49385 3.98786 7.49539C3.8984 7.49694 3.81013 7.51609 3.72808 7.55176C3.64602 7.58742 3.5718 7.63889 3.50964 7.70324C3.44748 7.76759 3.39861 7.84355 3.3658 7.92679C3.333 8.01002 3.31691 8.09891 3.31846 8.18836C3.32001 8.27781 3.33916 8.36609 3.37482 8.44814C3.41049 8.53019 3.46196 8.60441 3.52631 8.66657L6.08631 11.2266C6.14828 11.2891 6.22202 11.3387 6.30326 11.3725C6.3845 11.4063 6.47163 11.4238 6.55964 11.4238C6.64765 11.4238 6.73479 11.4063 6.81603 11.3725C6.89727 11.3387 6.971 11.2891 7.03297 11.2266L12.473 5.78657C12.5406 5.72415 12.5946 5.64838 12.6316 5.56404C12.6685 5.47971 12.6876 5.38864 12.6876 5.29657C12.6876 5.20451 12.6685 5.11344 12.6316 5.0291C12.5946 4.94477 12.5406 4.869 12.473 4.80657Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="pt-6 px-6 pb-5">
              <div class="flex flex-wrap items-start">
                <img
                  class="mr-4"
                  src="	https://shuffle.dev/trizzle-assets/logos/visa-card-white-logo.png"
                  alt=""
                />
                <div class="w-full sm:w-auto">
                  <h5 class="text-sm font-semibold leading-5 text-gray-300">
                    Visa ending in 1234
                  </h5>
                  <span class="block text-xs font-medium text-gray-300 mb-3">
                    Expiry 10/2025
                  </span>
                  <div>
                    <a
                      class="inline-block py-1 px-2 mr-3 text-xs font-semibold text-gray-300 bg-gray-500 hover:bg-gray-700 rounded-lg"
                      href="#"
                    >
                      Set as default
                    </a>
                    <a
                      class="inline-block py-1 px-2 mr-3 text-xs font-semibold text-gray-300 bg-gray-500 hover:bg-gray-700 rounded-lg"
                      href="#"
                    >
                      Edit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative mb-4 bg-gray-600 rounded-xl">
            <div class="absolute top-0 right-0 m-6 w-6 h-6">
              <input type="checkbox" />
              <div class="absolute top-0 left-0 -ml-1 w-6 h-6 bg-gray-600 border border-gray-400 rounded-full"></div>
            </div>
            <div class="pt-6 px-6 pb-5">
              <div class="flex flex-wrap items-start">
                <img
                  class="mr-4 mb-1"
                  src="	https://shuffle.dev/trizzle-assets/logos/paypal-logo-white.png"
                  alt=""
                />
                <div class="w-full sm:w-auto">
                  <h5 class="text-sm font-semibold leading-5 text-gray-300">
                    Mastercard ending in 1234
                  </h5>
                  <span class="block text-xs font-medium text-gray-300 mb-3">
                    Expiry 10/2025
                  </span>
                  <div>
                    <a
                      class="inline-block py-1 px-2 mr-3 text-xs font-semibold text-gray-300 bg-gray-500 hover:bg-gray-700 rounded-lg"
                      href="#"
                    >
                      Set as default
                    </a>
                    <a
                      class="inline-block py-1 px-2 mr-3 text-xs font-semibold text-gray-300 bg-gray-500 hover:bg-gray-700 rounded-lg"
                      href="#"
                    >
                      Edit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative mb-6 bg-gray-600 rounded-xl">
            <div class="absolute top-0 right-0 m-6 w-6 h-6">
              <input type="checkbox" />
              <div class="absolute top-0 left-0 -ml-1 w-6 h-6 bg-gray-600 border border-gray-400 rounded-full"></div>
            </div>
            <div class="pt-6 px-6 pb-5">
              <div class="flex flex-wrap items-start">
                <img
                  class="mr-4 mb-1"
                  src="	https://shuffle.dev/trizzle-assets/logos/mastercard-logo-white.png"
                  alt=""
                />
                <div class="w-full sm:w-auto">
                  <h5 class="text-sm font-semibold leading-5 text-gray-300">
                    Visa ending in 1234
                  </h5>
                  <span class="block text-xs font-medium text-gray-300 mb-3">
                    Expiry 10/2025
                  </span>
                  <div>
                    <a
                      class="inline-block py-1 px-2 mr-3 text-xs font-semibold text-gray-300 bg-gray-500 hover:bg-gray-700 rounded-lg"
                      href="#"
                    >
                      Set as default
                    </a>
                    <a
                      class="inline-block py-1 px-2 mr-3 text-xs font-semibold text-gray-300 bg-gray-500 hover:bg-gray-700 rounded-lg"
                      href="#"
                    >
                      Edit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3">
            <div class="w-full sm:w-1/2 px-3 mb-2 sm:mb-0">
              <a
                class="inline-block w-full py-3 px-5 text-center font-semibold leading-6 text-gray-200 bg-gray-600 hover:bg-gray-700 rounded-lg transition duration-200"
                href="#"
              >
                Cancel
              </a>
            </div>
            <div class="w-full sm:w-1/2 px-3">
              <a
                class="inline-block w-full py-3 px-5 text-center font-semibold leading-6 text-blue-50 bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200"
                href="#"
              >
                Confirm
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="z-50 fixed top-0 hidden left-0 right-0 bottom-0 flex items-center w-full h-full p-4 bg-gray-800 bg-opacity-80 overflow-y-auto">
        <div class="max-w-xl w-full mx-auto pt-6 px-6 pb-8 bg-gray-500 rounded-xl">
          <div class="flex flex-wrap items-center mb-6">
            <div class="flex items-center justify-center h-14 w-14 mb-4 sm:mb-0 bg-gray-600 rounded-xl mr-4">
              <svg
                width="20"
                height="18"
                viewbox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.707 8.29291L11.707 0.292914C11.5672 0.153061 11.389 0.0578154 11.195 0.019223C11.0011 -0.0193694 10.8 0.000424638 10.6173 0.076102C10.4346 0.151779 10.2784 0.279941 10.1685 0.444379C10.0586 0.608817 10 0.802145 10 0.999914V4.54483C7.2683 4.79768 4.72926 6.06078 2.87973 8.08695C1.0302 10.1131 0.0033085 12.7565 2.93403e-09 15.4999V16.9999C-1.59013e-05 17.2076 0.0646263 17.4101 0.184952 17.5794C0.305279 17.7486 0.475319 17.8763 0.671467 17.9445C0.867616 18.0127 1.08014 18.0182 1.27954 17.9601C1.47893 17.9021 1.65531 17.7834 1.78418 17.6205C2.76383 16.4555 3.96583 15.4973 5.31997 14.802C6.6741 14.1068 8.15322 13.6884 9.6709 13.5712C9.7207 13.5649 9.8457 13.5551 10 13.5453V16.9999C10 17.1977 10.0586 17.391 10.1685 17.5555C10.2784 17.7199 10.4346 17.848 10.6173 17.9237C10.8 17.9994 11.0011 18.0192 11.195 17.9806C11.389 17.942 11.5672 17.8468 11.707 17.7069L19.707 9.70691C19.7999 9.61408 19.8735 9.50387 19.9238 9.38256C19.9741 9.26125 19.9999 9.13122 19.9999 8.99991C19.9999 8.8686 19.9741 8.73858 19.9238 8.61727C19.8735 8.49596 19.7999 8.38574 19.707 8.29291ZM12 14.5859V12.4999C12 12.3686 11.9742 12.2385 11.9239 12.1172C11.8737 11.9958 11.8 11.8856 11.7072 11.7927C11.6143 11.6999 11.5041 11.6262 11.3827 11.576C11.2614 11.5257 11.1313 11.4999 11 11.4999C10.7451 11.4999 9.7041 11.5492 9.43848 11.5849C6.74307 11.8332 4.17736 12.8572 2.05176 14.5331C2.29289 12.3274 3.33918 10.2882 4.99026 8.80598C6.64135 7.32373 8.78119 6.50263 11 6.49991C11.1313 6.49995 11.2614 6.47411 11.3827 6.42386C11.5041 6.37362 11.6143 6.29996 11.7072 6.2071C11.8 6.11423 11.8737 6.00398 11.9239 5.88264C11.9742 5.7613 12 5.63125 12 5.49991V3.41397L17.5859 8.99991L12 14.5859Z"
                  fill="#194BFB"
                ></path>
              </svg>
            </div>
            <div class="w-full sm:w-auto">
              <h4 class="text-xl text-gray-100 leading-6 font-semibold">
                Share to web
              </h4>
              <span class="text-xs text-gray-300 font-semibold">
                Publish and share link with anyone
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <img
              class="block w-full mb-12"
              src="/public/toppng.com-visa-debit-hologram-emv-gold6-credit-card-hologram-1053x665.png"
              alt=""
            />
          </div>
          <form action="">
            <div class="flex flex-wrap -mx-3 mb-10">
              <div class="w-full sm:w-2/4 px-3 mb-10 sm:mb-0">
                <div class="relative w-full h-14 py-4 px-3 border border-gray-400 focus-within:border-green-500 rounded-lg">
                  <span class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                    Card number
                  </span>
                  <input
                    class="block w-full outline-none bg-transparent text-sm text-gray-100 font-medium"
                    id="modalInput9-1"
                    type="text"
                    fdprocessedid="8b10ko"
                  />
                </div>
              </div>
              <div class="w-1/2 sm:w-1/4 px-3">
                <div class="relative w-full h-14 py-4 px-3 border border-gray-400 focus-within:border-green-500 rounded-lg">
                  <span class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                    Expiry
                  </span>
                  <input
                    class="block w-full outline-none bg-transparent text-sm text-gray-100 font-medium"
                    id="modalInput9-2"
                    type="text"
                    fdprocessedid="wqfvqm"
                  />
                </div>
              </div>
              <div class="w-1/2 sm:w-1/4 px-3">
                <div class="relative w-full h-14 py-4 px-3 border border-gray-400 focus-within:border-green-500 rounded-lg">
                  <span class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                    CVC
                  </span>
                  <input
                    class="block w-full outline-none bg-transparent text-sm text-gray-100 font-medium"
                    id="modalInput9-3"
                    type="text"
                    fdprocessedid="13jwgf"
                  />
                </div>
              </div>
            </div>
            <div class="relative w-full h-14 py-4 px-3 mb-6 border border-gray-400 focus-within:border-green-500 rounded-lg">
              <span class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                Cardholder name
              </span>
              <input
                class="block w-full outline-none bg-transparent text-sm text-gray-100 font-medium"
                id="modalInput9-4"
                type="text"
                fdprocessedid="w9iktk"
              />
            </div>
            <button
              class="block w-full py-3 px-6 text-center text-blue-50 font-semibold leading-6 bg-blue-500 hover:bg-blue-600 rounded-xl transition duration-200"
              fdprocessedid="2c8hi"
            >
              Update credit card
            </button>
          </form>
        </div>
      </div>

      {/* Document UploaD Model */}
      {ShowDocumet && (
        <div class="z-50 fixed top-0 left-0 right-0  bottom-0 flex items-center w-full h-full p-4 bg-gray-800 bg-opacity-80 overflow-y-auto">
          <form
            className="absolute inset-x-0 top-[20%] origin-top-right transform p-2 transition duration-1000 ease-out"
            onSubmit={HandleSubmit}
          >
            <div class="max-w-xl w-full mx-auto p-6 bg-gray-500 rounded-xl">
              <div class="flex items-center justify-between pb-6 mb-6 border-b border-gray-600">
                <div class="flex flex-wrap items-center">
                  <div class="flex items-center justify-center h-14 w-14 mb-4 sm:mb-0 bg-gray-600 rounded-xl mr-4">
                    <svg
                      width="20"
                      height="18"
                      viewbox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.707 8.29291L11.707 0.292914C11.5672 0.153061 11.389 0.0578154 11.195 0.019223C11.0011 -0.0193694 10.8 0.000424638 10.6173 0.076102C10.4346 0.151779 10.2784 0.279941 10.1685 0.444379C10.0586 0.608817 10 0.802145 10 0.999914V4.54483C7.2683 4.79768 4.72926 6.06078 2.87973 8.08695C1.0302 10.1131 0.0033085 12.7565 2.93403e-09 15.4999V16.9999C-1.59013e-05 17.2076 0.0646263 17.4101 0.184952 17.5794C0.305279 17.7486 0.475319 17.8763 0.671467 17.9445C0.867616 18.0127 1.08014 18.0182 1.27954 17.9601C1.47893 17.9021 1.65531 17.7834 1.78418 17.6205C2.76383 16.4555 3.96583 15.4973 5.31997 14.802C6.6741 14.1068 8.15322 13.6884 9.6709 13.5712C9.7207 13.5649 9.8457 13.5551 10 13.5453V16.9999C10 17.1977 10.0586 17.391 10.1685 17.5555C10.2784 17.7199 10.4346 17.848 10.6173 17.9237C10.8 17.9994 11.0011 18.0192 11.195 17.9806C11.389 17.942 11.5672 17.8468 11.707 17.7069L19.707 9.70691C19.7999 9.61408 19.8735 9.50387 19.9238 9.38256C19.9741 9.26125 19.9999 9.13122 19.9999 8.99991C19.9999 8.8686 19.9741 8.73858 19.9238 8.61727C19.8735 8.49596 19.7999 8.38574 19.707 8.29291ZM12 14.5859V12.4999C12 12.3686 11.9742 12.2385 11.9239 12.1172C11.8737 11.9958 11.8 11.8856 11.7072 11.7927C11.6143 11.6999 11.5041 11.6262 11.3827 11.576C11.2614 11.5257 11.1313 11.4999 11 11.4999C10.7451 11.4999 9.7041 11.5492 9.43848 11.5849C6.74307 11.8332 4.17736 12.8572 2.05176 14.5331C2.29289 12.3274 3.33918 10.2882 4.99026 8.80598C6.64135 7.32373 8.78119 6.50263 11 6.49991C11.1313 6.49995 11.2614 6.47411 11.3827 6.42386C11.5041 6.37362 11.6143 6.29996 11.7072 6.2071C11.8 6.11423 11.8737 6.00398 11.9239 5.88264C11.9742 5.7613 12 5.63125 12 5.49991V3.41397L17.5859 8.99991L12 14.5859Z"
                        fill="#194BFB"
                      ></path>
                    </svg>
                  </div>
                  <div class="w-full sm:w-auto">
                    <h4 class="text-xl text-gray-100 leading-6 font-semibold">
                      Upload Documents
                    </h4>
                    <span class="text-xs text-gray-300 font-semibold">
                      Share documents to help us to verify you
                    </span>
                  </div>
                </div>
              </div>
              <div class="pb-6 mb-6 border-b border-gray-600">
                <div class="flex flex-wrap items-center justify-between mb-6">
                  <h5 class="text-sm text-gray-300">
                    <span></span>
                    <span class="font-semibold">12th DMC *</span>
                  </h5>
                </div>
                <div class="relative flex items-center px-6 py-4 border border-gray-400 rounded-lg">
                  <input
                    onChange={Handle12DMC}
                    class="block w-full text-gray-100 placeholder-gray-100 bg-transparent outline-none"
                    id="modalInput5-1"
                    type="file"
                    placeholder="https://shuffle.dev/trizzle-ui/random-link"
                    fdprocessedid="y164k"
                  />
                  <button
                    class="inline-block ml-4 text-gray-200 hover:text-gray-300"
                    fdprocessedid="utg1bf"
                  >
                    <svg
                      width="18"
                      height="20"
                      viewbox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6.94C17.9896 6.84813 17.9695 6.75763 17.94 6.67V6.58C17.8919 6.47718 17.8278 6.38267 17.75 6.3L11.75 0.3C11.6673 0.222216 11.5728 0.158081 11.47 0.11C11.4402 0.10576 11.4099 0.10576 11.38 0.11C11.2784 0.0517412 11.1662 0.0143442 11.05 0H7C6.20435 0 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3V4H3C2.20435 4 1.44129 4.31607 0.87868 4.87868C0.316071 5.44129 0 6.20435 0 7V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H11C11.7956 20 12.5587 19.6839 13.1213 19.1213C13.6839 18.5587 14 17.7956 14 17V16H15C15.7956 16 16.5587 15.6839 17.1213 15.1213C17.6839 14.5587 18 13.7956 18 13V7C18 7 18 7 18 6.94ZM12 3.41L14.59 6H13C12.7348 6 12.4804 5.89464 12.2929 5.70711C12.1054 5.51957 12 5.26522 12 5V3.41ZM12 17C12 17.2652 11.8946 17.5196 11.7071 17.7071C11.5196 17.8946 11.2652 18 11 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6H4V13C4 13.7956 4.31607 14.5587 4.87868 15.1213C5.44129 15.6839 6.20435 16 7 16H12V17ZM16 13C16 13.2652 15.8946 13.5196 15.7071 13.7071C15.5196 13.8946 15.2652 14 15 14H7C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2H10V5C10 5.79565 10.3161 6.55871 10.8787 7.12132C11.4413 7.68393 12.2044 8 13 8H16V13Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="pb-6 mb-6 border-b border-gray-600">
                <div class="flex flex-wrap items-center justify-between mb-6">
                  <h5 class="text-sm text-gray-300">
                    <span></span>
                    <span class="font-semibold">10th DMC *</span>
                  </h5>
                </div>
                <div class="relative flex items-center px-6 py-4 border border-gray-400 rounded-lg">
                  <input
                    onChange={Handle10DMC}
                    class="block w-full text-gray-100 placeholder-gray-100 bg-transparent outline-none"
                    id="modalInput5-1"
                    type="file"
                    placeholder="https://shuffle.dev/trizzle-ui/random-link"
                    fdprocessedid="y164k"
                  />
                  <button
                    class="inline-block ml-4 text-gray-200 hover:text-gray-300"
                    fdprocessedid="utg1bf"
                  >
                    <svg
                      width="18"
                      height="20"
                      viewbox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6.94C17.9896 6.84813 17.9695 6.75763 17.94 6.67V6.58C17.8919 6.47718 17.8278 6.38267 17.75 6.3L11.75 0.3C11.6673 0.222216 11.5728 0.158081 11.47 0.11C11.4402 0.10576 11.4099 0.10576 11.38 0.11C11.2784 0.0517412 11.1662 0.0143442 11.05 0H7C6.20435 0 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3V4H3C2.20435 4 1.44129 4.31607 0.87868 4.87868C0.316071 5.44129 0 6.20435 0 7V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H11C11.7956 20 12.5587 19.6839 13.1213 19.1213C13.6839 18.5587 14 17.7956 14 17V16H15C15.7956 16 16.5587 15.6839 17.1213 15.1213C17.6839 14.5587 18 13.7956 18 13V7C18 7 18 7 18 6.94ZM12 3.41L14.59 6H13C12.7348 6 12.4804 5.89464 12.2929 5.70711C12.1054 5.51957 12 5.26522 12 5V3.41ZM12 17C12 17.2652 11.8946 17.5196 11.7071 17.7071C11.5196 17.8946 11.2652 18 11 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6H4V13C4 13.7956 4.31607 14.5587 4.87868 15.1213C5.44129 15.6839 6.20435 16 7 16H12V17ZM16 13C16 13.2652 15.8946 13.5196 15.7071 13.7071C15.5196 13.8946 15.2652 14 15 14H7C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2H10V5C10 5.79565 10.3161 6.55871 10.8787 7.12132C11.4413 7.68393 12.2044 8 13 8H16V13Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="pb-6 mb-6 border-b border-gray-600">
                <div class="flex flex-wrap items-center justify-between mb-6">
                  <h5 class="text-sm text-gray-300">
                    <span></span>
                    <span class="font-semibold">Adhaar Card *</span>
                  </h5>
                </div>
                <div class="relative flex items-center px-6 py-4 border border-gray-400 rounded-lg">
                  <input
                    onChange={HandleADHAAR}
                    class="block w-full text-gray-100 placeholder-gray-100 bg-transparent outline-none"
                    id="modalInput5-1"
                    type="file"
                    placeholder="https://shuffle.dev/trizzle-ui/random-link"
                    fdprocessedid="y164k"
                  />
                  <button
                    class="inline-block ml-4 text-gray-200 hover:text-gray-300"
                    fdprocessedid="utg1bf"
                  >
                    <svg
                      width="18"
                      height="20"
                      viewbox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6.94C17.9896 6.84813 17.9695 6.75763 17.94 6.67V6.58C17.8919 6.47718 17.8278 6.38267 17.75 6.3L11.75 0.3C11.6673 0.222216 11.5728 0.158081 11.47 0.11C11.4402 0.10576 11.4099 0.10576 11.38 0.11C11.2784 0.0517412 11.1662 0.0143442 11.05 0H7C6.20435 0 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3V4H3C2.20435 4 1.44129 4.31607 0.87868 4.87868C0.316071 5.44129 0 6.20435 0 7V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H11C11.7956 20 12.5587 19.6839 13.1213 19.1213C13.6839 18.5587 14 17.7956 14 17V16H15C15.7956 16 16.5587 15.6839 17.1213 15.1213C17.6839 14.5587 18 13.7956 18 13V7C18 7 18 7 18 6.94ZM12 3.41L14.59 6H13C12.7348 6 12.4804 5.89464 12.2929 5.70711C12.1054 5.51957 12 5.26522 12 5V3.41ZM12 17C12 17.2652 11.8946 17.5196 11.7071 17.7071C11.5196 17.8946 11.2652 18 11 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6H4V13C4 13.7956 4.31607 14.5587 4.87868 15.1213C5.44129 15.6839 6.20435 16 7 16H12V17ZM16 13C16 13.2652 15.8946 13.5196 15.7071 13.7071C15.5196 13.8946 15.2652 14 15 14H7C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2H10V5C10 5.79565 10.3161 6.55871 10.8787 7.12132C11.4413 7.68393 12.2044 8 13 8H16V13Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="flex flex-wrap items-center justify-between">
                <a
                  class="inline-flex items-center text-sm font-semibold text-blue-500 hover:text-blue-600"
                  href="#"
                >
                  <svg
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 8.94C20.9896 8.84813 20.9695 8.75763 20.94 8.67V8.58C20.8919 8.47718 20.8278 8.38267 20.75 8.3L14.75 2.3C14.6673 2.22222 14.5728 2.15808 14.47 2.11C14.4402 2.10576 14.4099 2.10576 14.38 2.11C14.2784 2.05174 14.1662 2.01434 14.05 2H10C9.20435 2 8.44129 2.31607 7.87868 2.87868C7.31607 3.44129 7 4.20435 7 5V6H6C5.20435 6 4.44129 6.31607 3.87868 6.87868C3.31607 7.44129 3 8.20435 3 9V19C3 19.7956 3.31607 20.5587 3.87868 21.1213C4.44129 21.6839 5.20435 22 6 22H14C14.7956 22 15.5587 21.6839 16.1213 21.1213C16.6839 20.5587 17 19.7956 17 19V18H18C18.7956 18 19.5587 17.6839 20.1213 17.1213C20.6839 16.5587 21 15.7956 21 15V9C21 9 21 9 21 8.94ZM15 5.41L17.59 8H16C15.7348 8 15.4804 7.89464 15.2929 7.70711C15.1054 7.51957 15 7.26522 15 7V5.41ZM15 19C15 19.2652 14.8946 19.5196 14.7071 19.7071C14.5196 19.8946 14.2652 20 14 20H6C5.73478 20 5.48043 19.8946 5.29289 19.7071C5.10536 19.5196 5 19.2652 5 19V9C5 8.73478 5.10536 8.48043 5.29289 8.29289C5.48043 8.10536 5.73478 8 6 8H7V15C7 15.7956 7.31607 16.5587 7.87868 17.1213C8.44129 17.6839 9.20435 18 10 18H15V19ZM19 15C19 15.2652 18.8946 15.5196 18.7071 15.7071C18.5196 15.8946 18.2652 16 18 16H10C9.73478 16 9.48043 15.8946 9.29289 15.7071C9.10536 15.5196 9 15.2652 9 15V5C9 4.73478 9.10536 4.48043 9.29289 4.29289C9.48043 4.10536 9.73478 4 10 4H13V7C13 7.79565 13.3161 8.55871 13.8787 9.12132C14.4413 9.68393 15.2044 10 16 10H19V15Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span class="ml-2">Copy link</span>
                </a>
                <div class="w-full sm:w-auto mt-6 sm:mt-0 -mb-2">
                  <a
                  
                    class="inline-block w-full cursor-pointer sm:w-auto py-3 px-5 mb-2 mr-6 text-center font-semibold leading-6 text-gray-200 bg-gray-600 hover:bg-gray-700 rounded-lg transition duration-200"
                    onClick={() => {
                      setShowdocument(false);
                    }}
                  >
                    Close
                  </a>
                  <button
                    class="inline-block w-full sm:w-auto py-3 px-5 mb-2 text-center font-semibold leading-6 text-blue-50 bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200"
                    type="submit"
                  >
                    Share file
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Payment;
