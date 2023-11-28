import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const DoctorDetails = () => {
  const navigate = useNavigate();

  const moredetails = () => {
    navigate("/doctordetailsid");
  };

  return (
    <>
      <Sidebar />
      <div class="p-20 sm:ml-64">
        <div class="flex items-center justify-center h-auto mb-4 rounded bg-gray-50 dark:bg-gray-800">
          {/* <h1 className='text-center font-extrabold uppercase text-3xl'>My Doctor</h1> */}

          {/* <p className='text-center'>20</p> */}
          <div class="p-3 flex flex-col w-full">
            <div class="flex items-center justify-between mb-2">
              <a href="#">
                <img
                  class="w-10 h-10 rounded-full"
                  src="/docs/images/people/profile-picture-1.jpg"
                  alt="Jese Leos"
                />
              </a>
              <div>
              
              </div>
            </div>
            <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
              <a href="#">Dr. Ravi Kumar</a>
            </p>
            <p class="mb-3 text-sm font-normal">
              <a href="#" class="hover:underline">
                Mumbai,Maharashtra
              </a>
            </p>
            <p class="mb-4 text-sm">ORTHOPEDIC</p>
            <ul class="flex text-sm">
              <li class="me-2">
                <a href="#" class="hover:underline">
                  <span class="font-semibold text-gray-900 dark:text-white">
                    7997676767
                  </span>
                </a>
              </li>
            </ul>
            <div className="flex justify-end  w-full">
            <div className="">
                <button
                  type="button"
                  class="text-white mr-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  TOTAL PATIENTS COUNT : 1
                </button>
              </div>
              <div>
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  TOTAL PATIENTS COUNT : 1
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetails;
