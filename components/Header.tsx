"use client";
import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <Image
          src="/Trello-Logo.png"
          height={100}
          width={300}
          className="w-44 md:w56 pd-10 md:p-0 object-contain"
        />

        <div>
          {/* Search box */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none"
            />
            <button hidden> Search</button>
          </form>

          <Avatar name="ok a" round color="#0055D1" size="50" />
        </div>
      </div>
    </header>
  );
}

export default Header;
