import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, useNavigate } from "react-router-dom";

const Doctor = () => {
  const navigate = useNavigate();
  const [Doctors, setDoctors] = useState([]);

  const moredetails = () => {
    navigate("/doctordetailsid");
  };

  const addNewDoctor = () => {
    navigate("/doctorform");
  };

  useEffect(() => {
    fetch("https://mr-backend-srwb.onrender.com/api/get-all-doctors")
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        setDoctors(data);
      });
  }, []);

  return (
    <>
      <Sidebar />

      <div class="p-20 sm:ml-64">
        <h1 className="text-center font-extrabold uppercase text-3xl">
          Doctor List
        </h1>

        <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
          <div class="mx-auto mt-5 w-full py-20 leading-6">
            <form class="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg">
              <svg
                class="absolute left-2 block h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8" class=""></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
              </svg>
              <input
                type="name"
                name="search"
                class="h-14 w-full rounded-md py-4 pr-40 pl-12 outline-none focus:ring-2"
                placeholder="Search Your Doctor"
              />
              <button
                type="submit"
                class="absolute right-0 mr-1 inline-flex h-12 items-center justify-center rounded-lg bg-gray-900 px-10 font-medium text-white focus:ring-4 hover:bg-gray-700"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <div class="flex items-center justify-end h-auto mb-4 rounded bg-gray-50 dark:bg-gray-800">
          <button
            type="button"
            class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2
            "
            onClick={addNewDoctor}
          >
            <svg
              class="w-5 h-5 me-2 -ms-1"
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M432 240H248V56C248 25.4 222.6 0 192 0S136 25.4 136 56v184H16C7.2 240 0 247.2 0 256s7.2 16 16 16h184v184c0 30.6 25.4 56 56 56s56-25.4 56-56V272h184c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
              />
            </svg>
            Add New Doctor
          </button>
        </div>

        {Doctors &&
          Doctors.map((doctor) => (
            <div class="flex items-center justify-center h-48 mb-4 rounded ">
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
                    <button
                      type="button"
                      onClick={moredetails}
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      More Details
                    </button>
                  </div>
                </div>
                <p class="text-base font-semibold leading-none text-gray-900 ">
                  <a href="#">{doctor.DRNAME}</a>
                </p>
                <p class="mb-3 text-sm font-normal">
                  <a href="#" class="hover:underline">
                    {doctor.STATE}
                  </a>
                </p>
                <p class="mb-4 text-sm">ORTHOPEDIC</p>
                <ul class="flex text-sm">
                  <li class="me-2">
                    <a href="#" class="hover:underline">
                      <span class="font-semibold text-gray-900 dark:text-white">
                        {doctor.MOBILENO}
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="flex justify-end ">
                  <ul class="flex text-sm">
                    <li class="me-2">
                      <a href="#" class="hover:underline">
                        <span class="font-extrabold text-gray-900 dark:text-white">
                          Patient Count: 1
                        </span>
                      </a>
                    </li>
                  </ul>
                  <ul class="flex text-sm">
                    <li class="me-2">
                      <a href="#" class="hover:underline">
                        <span class="font-extrabold text-gray-900  dark:text-white">
                          Total Cartridges: 3
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Doctor;
