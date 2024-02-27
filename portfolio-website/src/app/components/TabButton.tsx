import React, { ReactNode } from "react";

export default function TabButton(props: {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
}) {
  const buttonClasses = props.active
    ? "text-white border-b border-blue-500"
    : "text-[#ADB7BE]";
  return (
    <button onClick={props.selectTab}>
      <p className={`mr-3 font-semibold hover:text-white  ${buttonClasses}`}>
        {props.children}
      </p>
    </button>
  );
}
