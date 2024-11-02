"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const suggestions = ["Apple", "Green Apple", "Red Apple"];

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  const handleLoginRedirect = () => {
    router.push("/auth/signUp");
  };

  return (
    <>
      <nav className="w-full h-100 bg-customGray flex items-center justify-between px-4 md:px-4">
        <div className="w-20 h-12 hover:cursor-pointer">
          <Link href="/">
          <Image
            src={`/assets/img/Group 6918-3.png`}
            alt="logo"
            width={83.3}
            height={39}
            />
            
          </Link>
        </div>

        {/* Search bar */}
        <div className="relative hidden md:block md:max-w-sm md:flex-grow mx-auto">
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              {" "}
              {/* Make this div relative */}
              <input
                type="text"
                id="simple-search"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="Search what you need right here..."
                required
              />
              {/* Suggestions dropdown */}
              {showSuggestions && filteredSuggestions.length > 0 && (
                <ul className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  {filteredSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSearchQuery(suggestion);
                        setShowSuggestions(false);
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </form>
        </div>

        {/* SignUp/Login button */}
        <div className="w-[135px] h-[54px] py-2">
          <button
            type="button"
            onClick={handleLoginRedirect}
            className="focus:outline-none text-white bg-customGreen font-medium rounded-lg text-sm px-4 py-2"
          >
            <strong>SignUp/Login</strong>
          </button>
        </div>

        {/* Flag Drop Down */}
        <div className="hidden md:flex items-center space-x-4 py-2">
          <div className="w-[82px] h-[54px] bg-customGrayDark rounded-lg flex justify-center items-center hover:cursor-pointer">
            
            <Image
            className="mr-2"
            src={`/assets/img/image 15.png`}
            alt="icon"
            width={41}
            height={27}
            />
            <svg
              className="w-3 h-3 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 10"
            >
              <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
            </svg>
          </div>

          {/* User Info */}
          <div className="w-[70px] h-[57px] flex flex-col justify-center items-center">
            <div className="flex items-center">
              <span className="text-[10px] text-white">Hello, User</span>
              <svg
                className="w-2 h-2 text-customGreen ml-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 10 16"
              >
                <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
              </svg>
            </div>
            <span className="text-white">Account</span>
          </div>

          <div className="w-[57px] h-[57px] flex justify-center items-center hover:cursor-pointer">
            
            <Image
            src={`/assets/img/Group 35.png`}
            alt="group35"
            width={57}
            height={57}
            />
          </div>
          <div className="w-[57px] h-[57px] flex justify-center items-center hover:cursor-pointer">
           
            <Image
            src={`/assets/img/Group 33.png`}
            alt="group33"
            width={57}
            height={57}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
