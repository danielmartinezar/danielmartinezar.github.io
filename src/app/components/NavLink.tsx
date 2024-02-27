import Link from "next/link";
import React from "react";

export default function Navlink(props: { href: string; title: string }) {
  return (
    <div>
      <li>
        <Link
          href={"#about"}
          className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
        >
          {props.title}
        </Link>
      </li>
    </div>
  );
}
