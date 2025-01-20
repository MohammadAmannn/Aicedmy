"use client";
import Link from "next/link";
import React, { useState } from "react";

function _Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-black">
      <header className="py-4 sm:py-6 shadow-md">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <Link href="/" title="Home">
                <img
                  className="w-auto h-9"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg"
                  alt="Logo"
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-white"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
                aria-label="Toggle menu"
              >
                {!expanded ? (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
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
                )}
              </button>
            </div>

            {/* Button */}
            <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
              <Link href="/dashboard">

              <div
                className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full cursor-pointer"
                role="button"
              >
                Get Started
              </div>
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {expanded && (
            <nav>
              <div className="flex flex-col pt-8 pb-4 space-y-6">
                <div className="relative inline-flex items-center justify-center group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                  <Link href="/dashboard">
                    <p
                      className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white border border-transparent rounded-full"
                      role="button"
                    >
                      Get Started
                    </p>
                  </Link>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
}

export default _Header;
