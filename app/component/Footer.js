"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [activeTab, setActiveTab] = useState("All");
  const tabData = [
    { label: "All", icon: "/assets/img/Group.png" },
    { label: "Grains", icon: "/assets/img/Vector-8.png" },
    { label: "Vegetables", icon: "/assets/img/Group-1.png" },
    { label: "Fruits", icon: "/assets/img/Group-2.png" },
  ];
  return (
    <>
      {/* First footer, visible only on medium and larger screens */}
      <footer
        className="rounded-lg hidden md:block"
        style={{ background: "#E4EBEF" }}
      >
        <div className="w-full max-w-screen-xl mx-auto p-4">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <Image
                src={`/assets/img/Group 6918-3.png`}
                height={39}
                width={83.3}
                alt="Logo"
              />
            </Link>
            <div>
              <p className="text-black">
                Copyright 2021 All rights reserved | This is made with 💚
              </p>
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link
                  href="#"
                  className="text-black hover:underline me-4 md:me-6"
                >
                  example@mail.com
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:underline me-4 md:me-6"
                >
                  +91-9876543210
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Tab footer, visible only on mobile screens */}
      <footer className="bottom-0 left-0 w-full bg-customGray text-white p-4 mt-4 block md:hidden">
        <div className="container mx-auto">
          <div className="flex justify-around">
            {tabData.map((tab, index) => (
              <div key={index} className="flex flex-col items-center w-full">
                <button
                  onClick={() => setActiveTab(tab.label)}
                  className={`flex flex-col items-center py-2 px-4 w-full rounded-md ${
                    activeTab === tab.label ? "bg-white-700" : "bg-transparent"
                  } focus:outline-none`}
                >
                  <img
                    src={tab.icon}
                    alt={`${tab.label} Icon`}
                    className="mb-1"
                  />
                  <span
                    style={{
                      color: activeTab === tab.label ? "#19846A" : "white",
                    }}
                  >
                    {tab.label}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
