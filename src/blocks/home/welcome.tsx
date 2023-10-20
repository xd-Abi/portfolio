"use client";
import React from "react";
import Typed from "react-typed";

export default function Welcome() {
  return (
    <Typed
      strings={["Welc", "hello."]}
      typeSpeed={150}
      backDelay={10}
      backSpeed={100}
      showCursor={false}
      className="text-transparent text-[25rem] font-extrabold leading-[25rem] bg-gradient-to-b from-white to-slate-300 bg-clip-text"
    />
  );
}
