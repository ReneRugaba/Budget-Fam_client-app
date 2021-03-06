import React from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

export default function Menu({ fixed,logout }) {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-auto mx-auto ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                  
              </div>
              <div className="hidden md:block flex justify-end">
                <div className="ml-10 flex items-baseline space-x-4">
               
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
              <div className="hidden md:block flex justify-end">
                <div className="ml-10 flex items-baseline space-x-4 pr-5">
                  <Link to="#" onClick={logout}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out transform hover:-translate-1 hover:scale-110 text-red-500 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                  </Link>
                </div>
              </div>
          </div>
        </div>

        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          
          </div>
        </div>
      </nav>

     
    </div>
  );
}