import React, { useState } from "react";
import { navLinks } from "../data";

export default function MobileNavbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className="lg:hidden"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed right-0 z-50 w-full overflow-hidden bg-white  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">AI3</span>
            <img
              className="h-16 w-16n"
              src="/logo.png"
              alt="AI3 logo"
            />
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700 "
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? (
              <>
                <span className="sr-only">Închide meniul</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </>
            ) : (
              <>
                <span className="sr-only">Deschide meniul</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
        {isActive && (
          <div className="mt-6 flow-root h-screen">
            <div className="-my-6 divide-y divide-gray-500/10 ">
              <div className="space-y-2 py-6">
                {navLinks.map((route) => (
                  <a
                    key={route.route}
                    href={route.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primaryText hover:bg-gray-50 hover:text-gray-900 
                    `}
                  >
                    {route.route}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
