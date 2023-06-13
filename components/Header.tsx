import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header>
      <Image
        src="/Trello-Logo.png"
        height={100}
        width={300}
        className="w-44 md:w56 pd-10 md:p-0 object-contain"
      />

      <div>
        {/* Search box */}
        <form>
          <input type="text" />
          <button hidden> Search</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
