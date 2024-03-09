import React from "react";

const Html = ({ searchText, search, placeholder, id }) => {
  return (
    <>
      <input
        compoment="GooglePlaceAutoComplete"
        type="text"
        id={"pac_input_" + id}
        value={searchText}
        placeholder={placeholder || ""}
        onChange={(e) => search(e.target.value)}
        className="w-full foxus animation duration-150 focus py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-green-500  rounded-lg"
      />
    </>
  );
};

export default Html;
