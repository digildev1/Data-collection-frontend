import React, { useState } from "react";

const DoctorFrom = () => {
  const id = localStorage.getItem("token");
  console.log(id);

  const [DRNAME, setDRNAME] = useState("");
  const [MOBILENO, setMOBILENO] = useState();
  const [SCCODE, setSCCODE] = useState("");
  const [SPECIALITY, setSPECIALITY] = useState("");
  const [STATE, setSTATE] = useState("");
  const [LOCALITY, setLOCALITY] = useState("");

  const handleDoctorData = async () => {
    console.log({ DRNAME, MOBILENO, SCCODE, SPECIALITY, STATE, LOCALITY });

    await fetch(
      `https://mr-backend-srwb.onrender.com/api/create-doctor/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          DRNAME,
          MOBILENO,
          SCCODE,
          SPECIALITY,
          STATE,
          LOCALITY,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data => ", data);
        if (data.message === "Doctor created and associated with MR") {
          alert("Data added");
        } else {
          alert("Error");
        }
      });
  };

  return (
    <>
      <div class="p-20 sm:ml-64">
        <div class=" items-center justify-center h-auto mb-4 rounded bg-gray-50 dark:bg-gray-200">
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <h1 className="text-center font-extrabold uppercase  py-4 text-3xl">
              My Doctor
            </h1>
          </p>
          <div class="  rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xl font-bold mb-2"
                  for="grid-first-name"
                >
                  Doctor Name
                </label>
                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  id="grid"
                  type="text"
                  placeholder="DR."
                  value={DRNAME}
                  onChange={(e) => setDRNAME(e.target.value)}
                />
              </div>
              <div class="md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xl font-bold mb-2"
                  for="grid"
                >
                  Mobile Nunbar
                </label>
                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="grid-last-name"
                  type="number"
                  placeholder="Enter 10 Digits Mobile Number"
                  value={MOBILENO}
                  onChange={(e) => setMOBILENO(e.target.value)}
                />
              </div>
            </div>
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-full px-3">
                <div class="-mx-3 md:flex mb-6">
                  <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-grey-darker text-xl font-bold mb-2"
                      for="grid"
                    >
                      SC Code :{" "}
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                      id="grid"
                      type="text"
                      placeholder=" Enter SC code"
                      value={SCCODE}
                      onChange={(e) => setSCCODE(e.target.value)}
                    />
                  </div>
                  <div class="md:w-1/2 px-3">
                    <label
                      class="block uppercase tracking-wide text-grey-darker text-xl font-bold mb-2"
                      for="grid"
                    >
                      speciality:
                    </label>
                    <input
                      class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                      id="grid"
                      type="text"
                      placeholder="Speciality"
                      value={SPECIALITY}
                      onChange={(e) => setSPECIALITY(e.target.value)}
                    />
                  </div>

                  {/* <fieldset class="mx-3">
                    <div>
                      <legend class="font-bold  text-xl   mb-2">
                        Gender :
                      </legend>
                    </div>
                    <div class="inline-flex">
                      <input
                        class="hidden w-full"
                        type="radio"
                        id="male"
                        value="male"
                        name="gender"
                        checked
                      />
                      <label
                        class="bg-white w-full text-gray-800 font-semibold py-3 px-4 cursor-pointer rounded-l"
                        for="male"
                      >
                        Male
                      </label>
                      <input
                        class="hidden  w-full"
                        type="radio"
                        id="female"
                        value="female"
                        name="gender"
                      />
                      <label
                        class="bg-white w-full text-gray-800  font-semibold py-3 px-4 cursor-pointer"
                        for="female"
                      >
                        Female
                      </label>
                       <input
                        class="hidden w-full"
                        type="radio"
                        id="non-binary"
                        value="non-binary"
                        name="gender"
                      />
                      <label
                        class="bg-white w-full  text-gray-800 font-semibold py-3 px-4 cursor-pointer rounded-r"
                        for="non-binary"
                      >
                        Other
                      </label> 
                    </div>
                  </fieldset> */}
                </div>
              </div>
            </div>

            <div class="-mx-3 md:flex mb-2">
              {/* <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xl font-bold mb-2"
                  for="grid-city"
                >
                  City:
                </label>
                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="grid-city"
                  type="text"
                  placeholder=" City "
                />
              </div> */}
              <div class="md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xl font-bold mb-2"
                  for="grid-state"
                >
                  State :
                </label>
                <div class="relative">
                  <select
                    class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                    id="grid-state"
                    placeholder=" state "
                    value={STATE}
                    onChange={(e) => setSTATE(e.target.value)}
                  >
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                    <option>Maharashtra</option>
                  </select>
                  {/* <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div> */}
                </div>
              </div>
              <div class="md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xl font-bold mb-2"
                  for="grid-zip"
                >
                  LOCALITY :
                </label>
                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="grid-zip"
                  type="text"
                  placeholder="Enter Hospital Name"
                  value={LOCALITY}
                  onChange={(e) => setLOCALITY(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-self-end"
            onClick={handleDoctorData}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};

export default DoctorFrom;
