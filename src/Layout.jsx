import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/lotteryNav";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
