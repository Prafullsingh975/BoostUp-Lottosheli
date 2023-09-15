import { Outlet } from "react-router-dom";
import SevenNavbar from "./777Navbar";

export default function TwiceADayLayout() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col">
        <SevenNavbar />
        <Outlet />
      </div>
    </div>
  );
}
