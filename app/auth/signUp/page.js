"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Buyer() {
  const [selectedRole, setSelectedRole] = useState(null);
  const router = useRouter();
  const accountTypes = [
    {
      id: 1,
      name: "Buyer",
    },
    {
      id: 2,
      name: "Seller",
    },
  ];
  const handleContinue = () => {
    if(selectedRole){
      if (selectedRole.toLowerCase() === "buyer") {
        router.push("/auth/Buyer");
      } else if (selectedRole.toLowerCase() === "seller") {
        router.push("/auth/Seller");
      } 
    }
    else {
      alert("Please select a role to continue.");
    }
    
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-white">
        <div className="flex flex-col items-center justify-center px-2 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white md:mt-0 sm:max-w-md xl:p-0">
            <div>
              <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                MAKE YOUR ACCOUNT
              </h1>
              <p>Start making your account and reveal all your features</p>

              <div className="mt-24 mb-4 px-4 text-[20px]">
                <strong>ARE YOU A?</strong>
              </div>

              {/* Role Selection Buttons */}

              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 overflow-hidden">
                {accountTypes.map((account) => (
                  <div
                    key={account.id}
                    className="flex justify-center items-center"
                  >
                    <a
                      href="#"
                      onClick={() => setSelectedRole(account.name)}
                      className={`flex flex-col items-center justify-center w-[144px] h-[134px] max-w-sm p-6 rounded-lg shadow-2xl ${
                        selectedRole === account.name
                          ? "bg-customGreen text-white"
                          : "bg-white text-gray-700"
                      }`}
                    >
                      <img
                        src="/assets/img/Group-5.png"
                        alt={account.name}
                        className="mb-2"
                      />
                      <p className="font-normal">
                        {account.name.toUpperCase()}
                      </p>
                    </a>
                  </div>
                ))}
              </div>

              {/* Continue Button */}
              {/* <br></br>
              <br></br>
              <br></br> */}
              <div className="px-2">
                <button
                  onClick={handleContinue}
                  className="w-[139px] mt-32 py-2 bg-customGreen text-white rounded-lg"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
