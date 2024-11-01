"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
export default function LogIn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <button
        onClick={toggleModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden"
        >
          <div className="relative p-4 w-full max-w-md">
            <div className="bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Sign in to our platform
                </h3>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l6 6m0 0l6 6M7 7L1 13m6-6L1 1"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 md:p-5">
                <form className="space-y-4" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-start">
                      <input
                        id="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                      />
                      <label
                        htmlFor="remember"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                    >
                      Lost Password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login to your account
                  </button>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?{" "}
                    <a
                      href="#"
                      className="text-blue-700 hover:underline dark:text-blue-500"
                    >
                      Create account
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-4xl w-full mx-auto p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Account Types
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Buyer Account Section */}
            <div className="p-6 bg-blue-50 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700">Buyer Account</h3>
              <p className="mt-4 text-gray-600">
                This account is for buyers to browse and purchase products.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>- Browse Products</li>
                <li>- View Cart</li>
                <li>- Manage Orders</li>
                <li>- Payment History</li>
              </ul>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Register as Buyer
              </button>
            </div>

            {/* Seller Account Section */}
            <div className="p-6 bg-green-50 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700">
                Seller Account
              </h3>
              <p className="mt-4 text-gray-600">
                This account is for sellers to manage their products and orders.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>- Manage Products</li>
                <li>- View Sales</li>
                <li>- Track Inventory</li>
                <li>- View Customer Feedback</li>
              </ul>
              <button className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                Register as Seller
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
