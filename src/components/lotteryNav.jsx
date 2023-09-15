/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

export let toggleStatePop = () => {};

export default function lotteryNav() {
  const [ishide, setHide] = useState(true);
  const [ishide2, setHide2] = useState(true);
  const [ishide3, setHide3] = useState(true);
  const [ishide4, setHide4] = useState(true);
  const [ishide5, setHide5] = useState(true);
  const [ishide6, setHide6] = useState(true);

  const [pop, setPop] = useState(true);
  toggleStatePop = setPop;

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <>
      <div className="flex h-10 w-full items-center justify-between bg-[#514949] px-32 text-white duration-200">
        <div className="flex gap-3">
          {userInfo ? (
            <Link
              to="/dashboard"
              className=" rounded-md border-[1px] border-white px-2  hover:bg-blue-500"
            >
              Personal area
            </Link>
          ) : (
            <button
              onClick={() => setPop(!pop)}
              className=" rounded-md border-[1px] border-white px-2  hover:bg-blue-500"
            >
              insert
            </button>
          )}
          {userInfo ? (
            <button
              onClick={() => localStorage.clear("userInfo")}
              className=" rounded-md border-[1px] border-white px-2  hover:bg-blue-500"
            >
              Output
            </button>
          ) : null}
          <Link to="/" className="rounded-md px-1 hover:bg-blue-500">
            Customer Services
          </Link>
        </div>
        <Link to="/">!Hello {userInfo ? userInfo?.name : "guest"}</Link>
      </div>
      <div className="mb-8 flex h-12 w-full items-center justify-between bg-[#EDEBEB]  px-32 shadow shadow-[#514949] duration-200  md:gap-36">
        <div className="relative flex ">
          <Link
            to="/"
            className="border-r-[1px] border-slate-400 pr-3 hover:text-blue-800"
          >
            The service price list
          </Link>
          <Link
            to="/"
            onMouseEnter={() => setHide(false)}
            onMouseLeave={() => setHide(true)}
            className={`${
              ishide ? "" : ""
            } pr border-r-[1px] border-slate-400 px-3 hover:text-blue-800`}
          >
            How It Works ?
            <div
              onMouseEnter={() => setHide(false)}
              onMouseLeave={() => setHide(true)}
              className={`${
                ishide ? "hidden" : ""
              } absolute left-40  z-10 flex flex-col bg-white `}
            >
              <Link
                to="/"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
                About my lottery
              </Link>
              <Link
                to="/"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
                What do you do when you win ?
              </Link>
              <Link
                to="/"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
                Professional articles
              </Link>
              <Link
                to="/"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
                Question and answer
              </Link>
              <Link
                to="/"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
                Gallery
              </Link>
              <Link
                to="/"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
                Privacy police
              </Link>
              <Link
                to="/"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
                Terms
              </Link>
            </div>
          </Link>
          <Link
            to="/123"
            onMouseEnter={() => setHide2(false)}
            onMouseLeave={() => setHide2(true)}
            className="border-r-[1px] border-slate-400 px-3 hover:text-blue-800"
          >
            1 2 3
            <div
              onMouseLeave={() => setHide2(true)}
              onMouseEnter={() => setHide2(false)}
              className={`${
                ishide2 ? "hidden" : ""
              } left-50 absolute z-10 flex-col bg-white`}
            >
              <Link
                to="/"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
                Result 123
              </Link>
            </div>
          </Link>
          <Link
            to="/777"
            onMouseEnter={() => setHide5(false)}
            onMouseLeave={() => setHide5(true)}
            className="border-r-[1px] border-slate-400 px-3 hover:text-blue-800"
          >
            777
            <div
              onMouseLeave={() => setHide5(true)}
              onMouseEnter={() => setHide5(false)}
              className={`${
                ishide5 ? "hidden" : ""
              } left-50 absolute z-20 flex w-1/3 flex-col bg-white`}
            >
              <Link
                to="/777"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
                Regular Form
              </Link>
              <Link
                to="/777/systematic-8"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
                Systematic 8 777
              </Link>
              <Link
                to="/777/systematic-9"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
                Systematic 9 777
              </Link>
              <Link
                to="/"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
                Result 777
              </Link>
            </div>
          </Link>
          <Link
            to="/chance/normal"
            onMouseEnter={() => setHide6(false)}
            onMouseLeave={() => setHide6(true)}
            className="border-r-[1px] border-slate-400 px-3 hover:text-blue-800"
          >
            Cyans
            <div
              onMouseLeave={() => setHide6(true)}
              onMouseEnter={() => setHide6(false)}
              className={`${
                ishide6 ? "hidden" : ""
              } left-50 absolute z-20 flex w-1/3 flex-col bg-white`}
            >
              <Link
                to="/chance/normal"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
                Regular Form
              </Link>
              <Link
                to="/chance/great"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
                Multi Chance
              </Link>
              <Link
                to="/chance"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
                Systematic Chance
              </Link>
              <Link
                to="/"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
                Chance Result
              </Link>
            </div>
          </Link>
        </div>
        <Link to="/">
          <img src="logo1.png" className="rou h-28 rotate-90" alt="" />
        </Link>
        <div className="flex flex-1 justify-end">
          <Link
            to="/"
            onMouseEnter={() => setHide3(false)}
            onMouseLeave={() => setHide3(true)}
            className="border-r-[1px] border-slate-400 pr-3 hover:text-blue-800"
          >
            Lottery results
            <div
              onMouseEnter={() => setHide3(false)}
              onMouseLeave={() => setHide3(true)}
              className={`${
                ishide3 ? "hidden" : ""
              } left-50 absolute z-10 flex flex-col bg-white`}
            >
              <Link
                to="/"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
                Lottery result
              </Link>
              <Link
                to="/"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
                Chance Lottery result
              </Link>
              <Link
                to="/"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
    
                Result 777
              </Link>
            </div>
          </Link>
          <Link
            to="/lotto/regular"
            onMouseEnter={() => setHide4(false)}
            onMouseLeave={() => setHide4(true)}
            className="border-slate-400 px-3 hover:text-blue-800 "
          >
            lotto
            <div
              onMouseLeave={() => setHide4(true)}
              onMouseEnter={() => setHide4(false)}
              className={`${
                ishide4 ? "hidden" : ""
              } left-50 absolute z-10 flex flex-col bg-white`}
            >
              <Link
                to="/lotto/systematic"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
                Systemetic lottery
              </Link>
              <Link
                to="/lotto/regular"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
                Regular form
              </Link>
              <Link
                to="/lotto"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
    
                strong stytemetic lottery
              </Link>
              <Link
                to="/"
                className="w-full border-[1px] border-black px-1 hover:bg-slate-400"
              >
                lottery result
              </Link>
            </div>
          </Link>
        </div>
      </div>
      <div
        className={`${
          pop
            ? "hidden"
            : "absolute top-0 z-50 flex h-[100vh] w-full bg-black/50"
        }`}
      >
        <button
          onClick={() => setPop(!pop)}
          className="absolute right-[32rem] top-40 z-30 h-10 w-10 cursor-pointer rounded-full bg-red-500 p-2"
        >
          X
        </button>
        <Login pop={setPop} />
      </div>
    </>
  );
}
