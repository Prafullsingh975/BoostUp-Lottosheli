import { useLocation, Link, Outlet } from "react-router-dom";
import Timer from "../../components/Timer";
import { useEffect, useState } from "react";

export default function LottoLayout() {
  const [active, setActive] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/lotto") {
      setActive(0);
    }
    if (location.pathname == "/lotto/systematic") {
      setActive(1);
    }
    if (location.pathname == "/lotto/regular") {
      setActive(2);
    }
  }, [location]);
  return (
    <div className="mx-auto flex w-fit flex-col ">
      <div className="flex h-16 items-end justify-center gap-3">
        <Link
          onClick={() => setActive(0)}
          className={`${
            active === 0 ? "h-14 bg-red-600" : "h-10 bg-blue-600"
          } flex w-40 items-center rounded-tl-lg rounded-tr-lg px-4 text-center font-bold text-white transition-all duration-300`}
          to="/lotto"
        >
          Strong sytematic lottery
        </Link>
        <Link
          onClick={() => setActive(1)}
          className={`${
            active === 1 ? "h-14 bg-red-600" : "h-10 bg-blue-600"
          } flex w-40 items-center rounded-tl-lg rounded-tr-lg px-4 text-center font-bold text-white transition-all duration-300`}
          to="/lotto/systematic"
        >
          sytematic lottery
        </Link>
        <Link
          onClick={() => setActive(2)}
          className={`${
            active === 2 ? "h-14 bg-red-600" : "h-10 bg-blue-600"
          } flex w-40 items-center rounded-tl-lg rounded-tr-lg px-4 text-center font-bold text-white transition-all duration-300`}
          to="/lotto/regular"
        >
          regular lottery
        </Link>
      </div>
      <div className="flex items-center justify-center gap-3 rounded-tl-2xl rounded-tr-2xl bg-red-600 py-3 text-white">
        <Timer />
        <div className="w-64 font-semibold">
          <span className="text-4xl text-yellow-300 drop-shadow-md">
            50,000,000
          </span>
          on friday Until in the lottery draws
        </div>
      </div>
      <Outlet />
    </div>
  );
}
