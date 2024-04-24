import Link from "next/link";
import React from "react";

interface MenuNavProps {
  pilihMenu: () => void;
}

const MenuNav = ({ pilihMenu }: MenuNavProps) => {
  const mengaturMenuKlik = () => {
    pilihMenu();
  };
  return (
    <>
      <ul className="flex items-center flex-col md:flex-row mx-5 md:mx-0 gap-6">
        <div className="flex items-center flex-col md:flex-row md:gap-14">
          <li className="mb-4 md:mb-0 text-lg">
            <Link href="/about-us" onClick={mengaturMenuKlik}>
              About Us
            </Link>
          </li>

          <li className="mb-4 md:mb-0 text-lg">
            <Link href="/event" onClick={mengaturMenuKlik}>
              Event
            </Link>
          </li>

          <li className="mb-4 md:mb-0 text-lg">
            <Link href="/" onClick={mengaturMenuKlik}>
              Blog
            </Link>
          </li>
        </div>

        <button className="px-4 py-2 bg-gray-300 rounded-lg">
          Hubungi Kami
        </button>
      </ul>
    </>
  );
};

export default MenuNav;
