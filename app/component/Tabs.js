"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Tabs({ changeTabFn }) {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("All");
  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
    changeTabFn(tabName);
  };

  const handleAddProduct = () => {
    router.push("/AddProduct");
  };
  return (
    <>
      <div className="w-full h-20 pt-4 bg-white hidden lg:block">
        <div className="w-full border-b border-gray-200">
          <div className="float-left">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
              role="tablist"
            >
              {/* All Tab */}
              <li className="me-2" role="presentation">
                <button
                  href="#"
                  onClick={() => handleTabClick("All")}
                  className={`inline-flex items-center justify-center p-4 border-b-4 rounded-t-lg group space-x-2 ${
                    selectedTab === "All"
                      ? "border-customGreen font-semibold font-mono text-customGreen"
                      : "border-transparent text-black"
                  }`}
                  role="tab"
                  aria-selected={selectedTab === "All"}
                >
                  <img src="/assets/img/Group.png" alt="icon4" />
                  <span>All</span>
                </button>
              </li>

              {/* Grains Tab */}
              <li className="me-2" role="presentation">
                <button
                  href="#"
                  onClick={() => handleTabClick("Grains")}
                  className={`inline-flex items-center justify-center p-4 border-b-4 rounded-t-lg group space-x-2 ${
                    selectedTab === "Grains"
                      ? "border-customGreen font-semibold font-mono text-customGreen"
                      : "border-transparent text-black"
                  }`}
                  role="tab"
                  aria-selected={selectedTab === "Grains"}
                >
                  <img src="/assets/img/Vector-8.png" alt="icon4" />
                  <span>Grains</span>
                </button>
              </li>

              {/* Vegetables Tab */}
              <li className="me-2" role="presentation">
                <button
                  href="#"
                  onClick={() => handleTabClick("Vegetable")}
                  className={`inline-flex items-center justify-center p-4 border-b-4 rounded-t-lg group space-x-2 ${
                    selectedTab === "Vegetables"
                      ? "border-customGreen font-semibold font-mono text-customGreen"
                      : "border-transparent text-black"
                  }`}
                  role="tab"
                  aria-selected={selectedTab === "Vegetables"}
                >
                  <img src="/assets/img/Group-1.png" alt="icon4" />
                  <span>Vegetables</span>
                </button>
              </li>

              {/* Fruits Tab */}
              <li className="me-2" role="presentation">
                <button
                  href="#"
                  onClick={() => handleTabClick("Fruits")}
                  className={`inline-flex items-center justify-center p-4 border-b-4 rounded-t-lg group space-x-2 ${
                    selectedTab === "Fruits"
                      ? "border-customGreen font-semibold font-mono text-customGreen"
                      : "border-transparent text-black"
                  }`}
                  role="tab"
                  aria-selected={selectedTab === "Fruits"}
                >
                  <img src="/assets/img/Group-2.png" alt="icon4" />
                  <span>Fruits</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="float-right">
            <button
              type="button"
              onClick={handleAddProduct}
              className="w-[216px] text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
              style={{ backgroundColor: "#19846A" }}
            >
              + Add New Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
