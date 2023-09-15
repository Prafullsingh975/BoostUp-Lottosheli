import React from "react";
import { Outlet } from "react-router-dom";

export default function LayoutDash() {
  return (
    <>
      <div className="relative mt-3 h-[100vh] w-full rounded-lg border-2 px-3 py-2">
        <Outlet />
      </div>
    </>
  );
}
