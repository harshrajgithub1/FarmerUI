"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const router = useRouter();
  
  return (
    <>
      <section className="bg-gray-50 dark:bg-white">
        <div className="flex flex-col items-center justify-center px-2 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white md:mt-0 sm:max-w-md xl:p-0">
            <div className="space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                ADD PRODUCT
              </h1>
              <p>Start adding products in the list</p>

              <form className="" action="#">
               
              <div className="relative mb-5">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Listing Category
                    </label>
                    <select
                      id="category"
                      className="appearance-none border border-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    ></select>

                    <div className="absolute inset-y-0 right-2 flex items-end mb-4 pointer-events-none">
                      <svg
                        className="w-3 h-3 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#19846A"
                        viewBox="0 0 16 10"
                      >
                        <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"></path>
                      </svg>
                    </div>
                  </div>

                <div className="mt-8">
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-light text-gray-900 dark:text-black"
                    >
                      Product Name
                    </label>
                    <input
                      type="Product Name"
                      id="Product Name"
                      className="border border-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />
                  </div>

                 

                 

                  <div>
                    <label
                      htmlFor="fileUpload"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Photo/Video of listing
                    </label>

                    <input
                      type="file"
                      id="fileUpload"
                      name="fileUpload"
                      accept="image/*,video/*"
                      className="hidden"
                    />

                    <label
                      htmlFor="fileUpload"
                      className="cursor-pointer focus:outline-none text-white bg-customGreen rounded-lg font-semibold px-5 py-2.5 me-2 mb-2 inline-block"
                    >
                      Browse
                    </label>
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-light text-gray-900 dark:text-black"
                    >
                      Minimum Order Quantity
                    </label>
                    <input
                      type="name"
                      id="name"
                      className="border border-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-light text-gray-900 dark:text-black"
                    >
                      Selling Price
                    </label>
                    <input
                      type="name"
                      id="name"
                      className="border border-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                </div>

                {/* Location Dropdown */}
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="location"
                    className="text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Location
                  </label>
                  <label
                    htmlFor="accountType"
                    className="text-sm font-bold dark:text-customGreen hover:cursor-pointer"
                  >
                    Detect my current location
                  </label>
                </div>

                <div className="relative mb-6">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                        fill="#19846A"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    className="pl-10 border border-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-400 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </form>
              <div className="flex items-center">
                {/* Left-aligned back button */}
                <button
                  type="button"
                  className="w-[96px] bg-white flex items-center justify-center p-2 rounded-lg border border-[#19846A] text-customGreen"
                  onClick=""
                >
                 Cancel
                </button>

                {/* Right-aligned create account button */}
                <button
                  type="button"
                  className="w-[96px] text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ml-4"
                  style={{ backgroundColor: "#19846A" }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



