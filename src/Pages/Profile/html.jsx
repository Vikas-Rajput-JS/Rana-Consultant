import React from "react";
import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";
import Environment from "../../environment/environment";

function Profile() {
  const user = useSelector((state) => state.user?.user);
  return (
    <>
      <Navbar />
      <div className="w-full space-y-6">
        <div className="p-8 ">
          <div className="flex items-center max-w-6xl mx-auto space-x-4">
            <img
              alt="Avatar"
              className="rounded-full"
              height="96"
              src={Environment.API_URL+user?.image}
              style={{
                aspectRatio: "96/96",
                objectFit: "cover",
              }}
              width="96"
            />
            <div className="space-y-1">
              <h1 className="text-3xl font-bold">{user?.firstName}{" "} {user?.lastName}</h1>
              <p className="text-gray-500 dark:text-gray-400">{"User"}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto grid gap-4 p-8 sm:grid-cols-2">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <dl className="grid grid-cols-2 gap-2 text-base">
                <div>Email</div>
                <div>Phone</div>
                <div>{user?.email}</div>
                <div>{user?.mobileNo}</div>
              </dl>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Address</h2>
              <div>{user?.address}</div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto p-8">
          <h2 className="text-xl font-semibold">Activity Log</h2>
          <div className="grid gap-4 mt-4">
            <div className="flex items-center space-x-2">
              <div className="text-base font-medium">2023-01-16 10:24 AM</div>
              <div className="text-base text-gray-500 dark:text-gray-400">
                Updated profile information
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-base font-medium">2023-01-15 02:15 PM</div>
              <div className="text-base text-gray-500 dark:text-gray-400">
                Logged in
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
