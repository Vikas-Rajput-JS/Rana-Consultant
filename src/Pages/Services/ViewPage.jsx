import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import ApiClient from "../../Apis/ApiClient";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import Footer from "../../components/Footer";
import GooglePayButton from "@google-pay/button-react";
import toast from "react-hot-toast";
import LoadingBar from "react-top-loading-bar";

function ViewPage() {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const history = useNavigate();
  const ref = useRef();
  const getDetials = () => {
    ApiClient.get("course", { id: id }).then((res) => {
      if (res.success) {
        setDetails(res?.data);
      }
    });
  };

  useEffect(() => {
    getDetials();
  }, []);
  return (
    <>
      <LoadingBar
        shadow={true}
        loaderSpeed={1500}
        height={5}
        color="#ff460c"
        ref={ref}
      />

      <Navbar />
      <section class="relative pb-24 overflow-hidden bg-gray-50">
        <div class="pt-32 pb-52 bg-orange-50">
          <div class="container px-4 mx-auto">
            <div class="max-w-2xl lg:max-w-5xl mx-auto mb-24 text-center">
              <span class="inline-block py-1 px-3 mb-4 text-xs font-semibold bg-orange-900 text-orange-100 rounded-full uppercase">
                Pricing
              </span>
              <h1 class="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                <span>Inspiring possibility and applying</span>
                <span class="font-serif italic">innovation</span>
              </h1>
              <p class="text-lg text-gray-500">
                Lacinia eros at arcu gravida molestie faucibus.
              </p>
            </div>
          </div>
        </div>
        <div class="container px-4 mx-auto">
          <div class="max-w-md lg:max-w-4xl mx-auto">
            <div class="-mt-52 mb-16 lg:mb-8 py-9 px-8 sm:px-14 bg-white rounded-3xl shadow-xl">
              <div class="flex flex-wrap -mx-4 items-center">
                <div class="w-full lg:w-2/5 mb-8 lg:mb-0 px-4 pb-12 lg:py-4 border-b lg:border-0 lg:border-r border-gray-100">
                  <div class="text-center">
                    <span class="block text-2xl font-semibold mb-4">
                      {details?.name}
                    </span>
                    <span class="block text-5xl font-bold text-gray-900 mb-5">
                      Rs {details?.registrationFees}
                    </span>
                    <a
                      onClick={() => {
                        // document.getElementById("GooglePayButton").click();
                        history("/payment/" + details?.id);
                      }}
                      class="relative group inline-block py-4 px-10 text-center text-orange-50 bg-orange-900 font-semibold rounded-full overflow-hidden transition duration-200"
                    >
                      <div class="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                      <span class="relative">Get Started</span>
                    </a>
                    <GooglePayButton
                      className=""
                      environment="TEST"
                      paymentRequest={{
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                          {
                            type: "CARD",
                            parameters: {
                              allowedAuthMethods: [
                                "PAN_ONLY",
                                "CRYPTOGRAM_3DS",
                              ],
                              allowedCardNetworks: ["MASTERCARD", "VISA"],
                            },
                            tokenizationSpecification: {
                              type: "PAYMENT_GATEWAY",
                              parameters: {
                                gateway: "stripe",
                                "stripe:version": "2023-10-16",
                                "stripe:publishableKey":
                                  "pk_test_51OSDFOSJXboQazN3RHWUS6CjxDIMbb6RPIMTBZWgmcZPIDRsefXnrEwXzZufUi4aI09iH5gsh1lbCTVZnsd4K0Ld00kOpk53d7",
                              },
                            },
                          },
                        ],
                        merchantInfo: {
                          merchantId: "12345678901234567890",
                          merchantName: "Demo Merchant",
                        },
                        transactionInfo: {
                          totalPriceStatus: "FINAL",
                          totalPriceLabel: "Total",
                          totalPrice: details?.registrationFees?.toString(),
                          currencyCode: "INR",
                          countryCode: "IN",
                        },
                      }}
                      onLoadPaymentData={(paymentRequest) => {
                        ref.current.staticStart();
                        console.log("load payment data", paymentRequest);
                        let object =
                          paymentRequest?.paymentMethodData?.tokenizationData
                            ?.token;

                        let StringToJson = JSON.parse(object);
                        if (StringToJson) {
                          ref.current.complete();
                        }
                        toast.success(
                          `Your payment is completed using token ${StringToJson?.id}`
                        );
                      }}
                    />
                  </div>
                </div>
                <div class="w-full lg:w-3/5 px-4 py-2">
                  <div class="max-w-sm ml-auto">
                    <p class="text-gray-500 mb-8">
                      Simply dummy text of the printing and typesetting
                      industry.
                    </p>
                    <ul>
                      <li class="flex mb-6 items-center">
                        <img
                          src="https://shuffle.dev/saturn-assets/images/pricing/green-check.svg"
                          alt=""
                        />
                        <span class="ml-2 text-md text-gray-900">
                          College Name - {details?.collegeName}
                        </span>
                      </li>
                      <li class="flex mb-6 items-center">
                        <img
                          src="https://shuffle.dev/saturn-assets/images/pricing/green-check.svg"
                          alt=""
                        />
                        <span class="ml-2 text-md text-gray-900">
                          Start on{" "}
                          {moment(details?.startDate).format("DD-MMM-YYYY")}
                        </span>
                      </li>
                      <li class="flex items-center">
                        <img
                          src="https://shuffle.dev/saturn-assets/images/pricing/green-check.svg"
                          alt=""
                        />
                        <span class="ml-2 text-md text-gray-900">
                          End on{" "}
                          {moment(details?.endDate).format("DD-MMM-YYYY")}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="-mt-52 mb-16 lg:mb-8 py-9 px-8 sm:px-14 bg-white rounded-3xl shadow-xl mt-5">
              <div class="flex flex-wrap -mx-4 items-center">
                <div class="w-full lg:w-2/5 mb-8 lg:mb-0 px-4 pb-12 lg:py-4 border-b lg:border-0 lg:border-r border-gray-100">
                  <div class="text-center">
                    <span class="block text-2xl font-semibold mb-4">
                      Total Fees
                    </span>
                    <span class="block text-5xl font-bold text-gray-900 mb-5">
                      Rs {details?.price}
                    </span>
                    {/* <a
                      class="relative group inline-block py-4 px-10 text-center text-orange-50 bg-orange-900 font-semibold rounded-full overflow-hidden transition duration-200"
                      href="#"
                    >
                      <div class="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                      <span class="relative">Get Started</span>
                    </a> */}
                  </div>
                </div>
                <div class="w-full lg:w-3/5 px-4 py-2">
                  <div class="max-w-sm ml-auto">
                    <p class="text-gray-500 mb-8">College Address</p>
                    <ul>
                      <li class="flex mb-6 items-center">
                        <img
                          src="https://shuffle.dev/saturn-assets/images/pricing/green-check.svg"
                          alt=""
                        />
                        <span class="ml-2 text-md text-gray-900">
                          College Name - {details?.collegeName}
                        </span>
                      </li>
                      <li class="flex mb-6 items-center">
                        <img
                          src="https://shuffle.dev/saturn-assets/images/pricing/green-check.svg"
                          alt=""
                        />
                        <span class="ml-2 text-md text-gray-900">
                          {details?.city}
                        </span>
                      </li>
                      <li class="flex mb-6 items-center">
                        <img
                          src="https://shuffle.dev/saturn-assets/images/pricing/green-check.svg"
                          alt=""
                        />
                        <span class="ml-2 text-md text-gray-900">
                          {details?.state}
                        </span>
                      </li>
                      <li class="flex items-center">
                        <img
                          src="https://shuffle.dev/saturn-assets/images/pricing/green-check.svg"
                          alt=""
                        />
                        <span class="ml-2 text-md text-gray-900">
                          {details?.pincode}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:flex items-center justify-center">
              <div class="flex mb-12 lg:mb-0 sm:mr-24 items-center max-w-xs">
                <div class="flex flex-shrink-0 w-12 h-12 mr-4 items-center justify-center rounded-full bg-gray-100">
                  <img
                    src="https://shuffle.dev/saturn-assets/images/pricing/icon-bill.svg"
                    alt=""
                  />
                </div>
                <p class="font-semibold text-gray-900">
                  Billed just once and no monthly subscribtion
                </p>
              </div>
              <div class="flex items-center max-w-xs">
                <div class="flex flex-shrink-0 w-12 h-12 mr-4 items-center justify-center rounded-full bg-gray-100">
                  <img
                    src="https://shuffle.dev/saturn-assets/images/pricing/icon-shield.svg"
                    alt=""
                  />
                </div>
                <p class="font-semibold text-gray-900">
                  Money back guarantee if there was any problem
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ViewPage;
