import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Timer from "../../components/Timer";
import useGameServerData from "../useGameServerData";

export default function SevenNavbar() {
  const { activeGames, setActiveGames } = useGameServerData();

  const [active, setActive] = useState(2);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/777") {
      setActive(2);
    }
    if (location.pathname == "/777/systematic-8") {
      setActive(1);
    }
    if (location.pathname == "/777/systematic-9") {
      setActive(0);
    }
  }, [location]);

  return (
    <div className="z-10">
      <div className="flex h-16 items-end justify-center gap-3">
        <Link
          onClick={() => setActive(0)}
          className={`${
            active === 0 ? "bg-pink-700 py-3" : "bg-blue-600 py-1"
          } w-44 rounded-tl-md rounded-tr-md px-4 text-center font-bold text-white transition-all duration-200`}
          to="systematic-9"
        >
          Systematic 9 777
        </Link>
        <Link
          onClick={() => setActive(1)}
          className={`${
            active === 1 ? "bg-pink-700 py-3" : "bg-blue-600 py-1"
          } w-44 rounded-tl-md rounded-tr-md px-4 text-center font-bold text-white transition-all duration-200`}
          to="systematic-8"
        >
          Systematic 8 777
        </Link>
        <Link
          onClick={() => setActive(2)}
          className={`${
            active === 2 ? "bg-pink-700 py-3" : "bg-blue-600 py-1"
          } w-44 rounded-tl-md rounded-tr-md px-4 text-center font-bold text-white transition-all duration-200`}
          to="/777"
        >
          777
        </Link>
      </div>
      <div className="flex items-center justify-center gap-6 rounded-tl-2xl rounded-tr-2xl bg-pink-700 py-3 text-2xl font-bold text-white">
        <Timer />
        777 lottery almost everyone wins twice a day ₪ 70,000 Until
      </div>

      <div className="-mb-2 flex items-center justify-center bg-gray-200 px-16 pb-0 pt-4">
        <div className="flex items-center">
          <div className="rounded-full bg-pink-700 py-1 pl-4 pr-10 text-white">
            Upgrade your form!
          </div>
          <span className="-my-1 -ml-7 flex h-10 w-10 items-center justify-center rounded-full bg-pink-800 text-lg font-bold text-white shadow-md">
            2
          </span>
        </div>
        <div className="h-px flex-1 bg-white"></div>
        <div className="flex items-center">
          <div className="rounded-full bg-pink-700 py-1 pl-4 pr-10 text-white">
            Fill out your form!
          </div>
          <span className="-my-1 -ml-7 flex h-10 w-10 items-center justify-center rounded-full bg-pink-800 text-lg font-bold text-white shadow-md">
            1
          </span>
        </div>
      </div>
    </div>
  );
}
