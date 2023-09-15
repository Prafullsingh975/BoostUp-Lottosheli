import { Outlet } from "react-router-dom";
import ChanceNavbar from "./ChanceNavbar";

export default function ChanceLayout() {
  return (
    <>
      <ChanceNavbar />
      <Outlet />
    </>
  );
}
