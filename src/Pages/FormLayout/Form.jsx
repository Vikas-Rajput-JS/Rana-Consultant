import React, { useEffect, useRef, useState } from "react";
import GooglePlaceAutoComplete from "../../components/GoogleAutoComplete";
import "./style.css";
import addressModel from "../../Models/AddressModel";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ApiClient from "../../Apis/ApiClient";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { login_Success } from "../../Redux/Action/Action";
import LoadingBar from "react-top-loading-bar";
import { useNavigate } from "react-router-dom";
import Environment from "../../environment/environment";

function Form() {
  const [filters, setFilter] = useState({ city: "" });
  const [form, setform] = useState({});
  const ref = useRef(null);
  const history = useNavigate();
  const User = useSelector((state) => state.user?.user);
  const dispatch = useDispatch();
  console.log(User, "========================");
  useEffect(() => {
    ref.current.staticStart();
    ref.current.complete();
  }, []);
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
      lat: `${address.lat}` || "",
      lng: `${address.lng}` || "",
    });
  };

  const GetProfile = () => {
    ApiClient.get("profile").then((res) => {
      if (res.success) {
        dispatch(login_Success(res?.data));
        setform(res?.data);
      }
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    ref.current.staticStart();
    ApiClient.put("edit-profile", form).then((res) => {
      if (res.success) {
        toast.success(res?.message);
        GetProfile();
      }
    });
    ref.current.complete();
  };

  const UploadImage = async (e) => {
    ref.current.staticStart()
    console.log(e.target?.files[0]);
    let file = e.target.files[0];
    let formdata = new FormData();
    formdata.append("file", file);
    let Upload = await fetch(`${Environment.API_URL}common/imageUpload`, {
      method: "POST",
      header: {
        "Content-Type":
          "multipart/form-data; boundary=--------------------------",
      },
      body: formdata,
    });
    let res = await Upload.json();
    console.log(res);
    ref.current.complete()
    setform({ ...form, image: res?.data?.fullPath });
  };

  useEffect(() => {
    GetProfile();
  }, []);
  return (
    <section className="bg-coolGray-50 py-4">
      <LoadingBar shadow={true} height={5} color="#ff460c" ref={ref} />
      <div className="container px-4 mx-auto">
        <form onSubmit={HandleSubmit}>
          <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
            <div className="pb-6 border-b border-coolGray-100">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-full md:w-auto p-2">
                  <h2 className="text-coolGray-900 text-lg font-semibold">
                    Personal info
                  </h2>
                  <p className="text-xs text-coolGray-500 font-medium">
                    Update your personal info
                  </p>
                </div>
                <div className="w-full md:w-auto p-2">
                  <div className="flex flex-wrap justify-between -m-1.5">
                    <div className="w-full md:w-auto p-1.5">
                      <button
                        onClick={() => {
                          history("/");
                        }}
                        className="flex flex-wrap justify-center w-full px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button"
                        fdprocessedid="ynizbc"
                      >
                        <p>Cancel</p>
                      </button>
                    </div>
                    <div className="w-full md:w-auto p-1.5">
                      <button
                        className="flex flex-wrap justify-center w-full px-4 py-2 bg-green-500 hover:bg-green-600 font-medium text-sm text-white border border-green-500 rounded-md shadow-button"
                        fdprocessedid="r979p4"
                      >
                        <p>Save</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-md text-coolGray-800 font-semibold">
                      Avatar
                    </p>
                  </div>
                  <div className="w-full md:w-1/3 p-3">
                    <img
                      onClick={() => {
                        document.getElementById("ImageUploader").click();
                      }}
                      className="w-52 h-52 rounded-full"
                      src={
                        form?.image
                          ? `${Environment.API_URL}${form?.image}`
                          : "/public/—Pngtree—vector users icon_4144740.png"
                      }
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-md text-coolGray-800 font-semibold">
                      Name
                    </p>
                  </div>
                  <div className="w-full md:w-1/3 p-3">
                    <input
                      className="w-full animation duration-150 px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="John"
                      onChange={(e) => {
                        setform({ ...form, firstName: e.target.value });
                      }}
                      value={form?.firstName}
                      fdprocessedid="u507ao"
                    />
                  </div>
                  <div className="w-full md:w-1/3 p-3">
                    <input
                      className="w-full animation duration-150 px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      onChange={(e) => {
                        setform({ ...form, lastName: e.target.value });
                      }}
                      value={form?.lastName}
                      placeholder="Doe"
                      fdprocessedid="xcv2gb"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-md text-coolGray-800 font-semibold">
                      Email address
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <input
                      className="w-full animation duration-150 px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      onChange={(e) => {
                        setform({ ...form, email: e.target.value });
                      }}
                      value={form?.email}
                      placeholder="johndoe@flex.co"
                      disabled
                      fdprocessedid="zj0uqh"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-md text-coolGray-800 font-semibold">
                      Mobile Number
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <PhoneInput
                      inputClass="form-control ml-2 w-2 !important focus animation duration-150"
                      country={"us"}
                      containerClass="ml-1"
                      value={form?.mobileNo}
                      onChange={(phone, country) => {
                        setform({
                          ...form,
                          mobileNo: phone,
                          dialCode: country?.dialCode,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="py-6 border-b border-coolGray-100 hidden">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-md text-coolGray-800 font-semibold">
                      Photo
                    </p>
                    <p className="text-xs text-coolGray-500 font-medium">
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                  <div className="w-full md:w-auto p-3">
                    <img
                      src="flex-ui-assets/images/dashboard/forms/avatar.png"
                      alt=""
                    />
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <div className="relative flex flex-col items-center justify-center p-6 h-44 text-center text-green-500 focus-within:border-green-500 border border-dashed border-coolGray-200 rounded-lg">
                      <svg
                        className="mb-1.5"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.71 7.71L11 5.41V15C11 15.2652 11.1054 15.5196 11.2929 15.7071C11.4804 15.8946 11.7348 16 12 16C12.2652 16 12.5196 15.8946 12.7071 15.7071C12.8946 15.5196 13 15.2652 13 15V5.41L15.29 7.71C15.383 7.80373 15.4936 7.87813 15.6154 7.92889C15.7373 7.97966 15.868 8.0058 16 8.0058C16.132 8.0058 16.2627 7.97966 16.3846 7.92889C16.5064 7.87813 16.617 7.80373 16.71 7.71C16.8037 7.61704 16.8781 7.50644 16.9289 7.38458C16.9797 7.26272 17.0058 7.13202 17.0058 7C17.0058 6.86799 16.9797 6.73729 16.9289 6.61543C16.8781 6.49357 16.8037 6.38297 16.71 6.29L12.71 2.29C12.6149 2.19896 12.5028 2.1276 12.38 2.08C12.1365 1.97999 11.8635 1.97999 11.62 2.08C11.4972 2.1276 11.3851 2.19896 11.29 2.29L7.29 6.29C7.19676 6.38324 7.1228 6.49393 7.07234 6.61575C7.02188 6.73758 6.99591 6.86814 6.99591 7C6.99591 7.13186 7.02188 7.26243 7.07234 7.38425C7.1228 7.50607 7.19676 7.61677 7.29 7.71C7.38324 7.80324 7.49393 7.8772 7.61575 7.92766C7.73757 7.97812 7.86814 8.00409 8 8.00409C8.13186 8.00409 8.26243 7.97812 8.38425 7.92766C8.50607 7.8772 8.61676 7.80324 8.71 7.71ZM21 12C20.7348 12 20.4804 12.1054 20.2929 12.2929C20.1054 12.4804 20 12.7348 20 13V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V13C4 12.7348 3.89464 12.4804 3.70711 12.2929C3.51957 12.1054 3.26522 12 3 12C2.73478 12 2.48043 12.1054 2.29289 12.2929C2.10536 12.4804 2 12.7348 2 13V19C2 19.7957 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7957 22 19V13C22 12.7348 21.8946 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12Z"
                          fill="currentColor"
                        />
                      </svg>
                      <p className="mb-1 text-sm text-coolGray-800 font-medium">
                        <span className="text-green-500">
                          Click to Upload a file
                        </span>
                        <span>or drag and drop</span>
                      </p>
                      <p className="text-xs text-coolGray-500 font-medium">
                        PNG, JPG, GIF or up to 10MB
                      </p>
                      <input
                        onChange={UploadImage}
                        id="ImageUploader"
                        className="absolute top-0 left-0 w-full h-full opacity-0"
                        type="file"
                        accept=".jpg,.png,.jpeg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-md text-coolGray-800 font-semibold">
                      Role
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <input
                      className="w-full animation duration-150 px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                      disabled
                      type="text"
                      value={"User"}
                      placeholder="Frontend Developer"
                      fdprocessedid="lylhn"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-md text-coolGray-800 font-semibold">
                      Address
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <div className="relative">
                      <svg
                        className="absolute right-4 top-1/2 transform -translate-y-1/2"
                        fill="#000000"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width={13}
                        height={13}
                        viewBox="0 0 395.71 395.71"
                        xml:space="preserve"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g>
                            {" "}
                            <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                      <GooglePlaceAutoComplete
                        value={form?.address}
                        result={DestinationAddress}
                        placeholder="Your Location"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-sm text-coolGray-800 font-semibold">
                Timezone
              </p>
            </div>
            <div className="w-full md:flex-1 p-3">
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
                  fdprocessedid="2gqdpv"
                >
                  <option>Central Daylight Time (GMT-5) UTC-08:00</option>
                  <option>Central Daylight Time (GMT-5) UTC-08:00</option>
                  <option>Central Daylight Time (GMT-5) UTC-08:00</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div> */}
            {/* <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-sm text-coolGray-800 font-semibold">Domain</p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <div className="flex items-center focus-within:border-green-500 overflow-hidden border border-coolGray-200 rounded-lg shadow-input">
                <p className="px-4 text-base text-coolGray-500 font-normal">
                  https://
                </p>
                <input
                  className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none border-l"
                  type="text"
                  placeholder="flex.co"
                  fdprocessedid="jiobcm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-sm text-coolGray-800 font-semibold">Domain</p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <div className="flex items-center focus-within:border-green-500 overflow-hidden border border-coolGray-200 rounded-lg shadow-input">
                <p className="px-4 text-base text-coolGray-500 font-normal">
                  flex.co/
                </p>
                <input
                  className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none border-l"
                  type="text"
                  placeholder="johndoe42"
                  fdprocessedid="by0tg"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
            {/* <div className="pt-6">
            <div className="w-full md:w-9/12">
              <div className="flex flex-wrap -m-3">
                <div className="w-full md:w-1/3 p-3">
                  <p className="text-md text-coolGray-800 font-semibold">Bio</p>
                  <p className="text-sm text-coolGray-500 font-medium">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
                <div className="w-full md:flex-1 p-3">
                  <textarea
                   onChange={(e)=>{
                    setform({...form,lastName:e.target.value})
                  }}
                  value={form?.lastName}
                    className="animation duration-150 block w-full h-64 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input resize-none"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
