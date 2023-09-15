import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Timer from "../../components/Timer";

export default function ChanceNavbar() {
  const [active, setActive] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/chance") {
      setActive(0);
    }
    if (location.pathname == "/chance/great") {
      setActive(1);
    }
    if (location.pathname == "/chance/normal") {
      setActive(2);
    }
  }, [location]);
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-[900px]">
        <div className="flex h-16 items-end justify-center gap-3">
          <Link
            onClick={() => setActive(0)}
            className={`${
              active === 0 ? "bg-green-700 py-3" : "bg-blue-500 py-1"
            } w-44 rounded-tl-md rounded-tr-md px-4 text-center font-bold text-white transition-all duration-200`}
            to="/chance"
          >
            Systematic Chance
          </Link>
          <Link
            onClick={() => setActive(1)}
            className={`${
              active === 1 ? "bg-green-700 py-3" : "bg-blue-500 py-1"
            } w-44 rounded-tl-md rounded-tr-md px-4 text-center font-bold text-white transition-all duration-200`}
            to="great"
          >
            Great Chance
          </Link>
          <Link
            onClick={() => setActive(2)}
            className={`${
              active === 2 ? "bg-green-700 py-3" : "bg-blue-500 py-1"
            } w-44 rounded-tl-md rounded-tr-md px-4 text-center font-bold text-white transition-all duration-200`}
            to="normal"
          >
            Normal Chance
          </Link>
        </div>
        <div className="flex items-center justify-center gap-6 rounded-tl-2xl rounded-tr-2xl bg-green-700 px-10 py-3 text-xl text-white">
          <Timer />
          <h2 className="mb-2 text-center">
            every two hours
            <span className="text-3xl font-bold drop-shadow">₪ 1,000,000</span>,
            The chances of winning are extremely high.
          </h2>
          <h1 className="text-4xl font-bold uppercase">Chance</h1>
        </div>

        <div className="flex items-center justify-center bg-gray-200 px-16 pb-4 pt-4">
          <div className="flex items-center">
            <div className="rounded-full bg-green-700 py-1 pl-4 pr-10 text-white">
              Upgrade your form!
            </div>
            <span className="-my-1 -ml-7 flex h-10 w-10 items-center justify-center rounded-full bg-green-800 text-lg font-bold text-white shadow-md">
              2
            </span>
          </div>
          <div className="h-px flex-1 bg-white"></div>
          <div className="flex items-center">
            <div className="rounded-full bg-green-700 py-1 pl-4 pr-10 text-white">
              Fill out your form!
            </div>
            <span className="-my-1 -ml-7 flex h-10 w-10 items-center justify-center rounded-full bg-green-800 text-lg font-bold text-white shadow-md">
              1
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
