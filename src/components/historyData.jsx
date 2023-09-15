/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import certify from "../assets/certificate.png";
import { Spade, Club, Diamond, Heart } from "../games/chance/KeyPad";

export default function historyData({data}) {
  const [show, setShow] = useState(0);
  const [show1, setShow1] = useState(false);
  const [isO, setO] = useState(false);
  // let userCombinations
  // useEffect(()=>{
  //   userCombinations = data?.tables.flat();
  // },[data])
  const history = data?.map((data, index) => (
    <>
      <div
        onClick={() => {
          setShow(index + 1), setShow1(!show1);
        }}
        className="flex items-center border-b-2 px-3 pb-1"
      >
        <button
          href
          className={`${
            show == index + 1 && show1 ? "rotate-90" : ""
          } ml-5 flex h-8 w-8 rounded-full bg-blue-500 text-white`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6l4.6-4.6Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="-ml-4"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6l4.6-4.6Z"
            />
          </svg>
        </button>
        <button className="ml-10 h-8 w-32 rounded bg-blue-500 p-1 text-white">
          Duplicate form
        </button>
        <p className="w-20 text-right">{data?.amount}</p>
        <p className="ml-10 flex w-20 text-center">
          {data?.gameData.startTime.split("T")[0]}
        </p>
        <p className="ml-10 flex w-32">
          {data?.gameData.gameType} #{data?.lotteryNumber}
        </p>
      </div>
      <div
        className={`${
          show == index + 1 && show1 ? "flex flex-col" : "hidden"
        } gap-3 px-3 `}
      >
        <div className="flex w-full justify-between">
          {/* add winningAmount in gameDetails Schema */}
          <h1>Winning Rs: {data.winningAmount ?? 0}</h1>
          <p className="border-b-2 pb-2 ">The winning combination:</p>
          <p className="border-b-2 pb-2">My combination:</p>
        </div>
        <div className="flex w-full gap-40 text-white">
          <a
            target="_blank"
            href={certify}
            className="h-8 w-1/6 rounded-md bg-blue-500 p-1 text-center text-white"
          >
            The scan
          </a>
          <div
            className={`${
              data.gameType !== "Chance" ? "flex justify-between" : "hidden"
            } `}
          >
            <div className="-ml-8 flex h-fit w-1/2 flex-wrap gap-1">
              {data.gameData.winningCombinations.map((items, idx) => (
                <div
                  key={idx}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-500"
                >
                  {items}
                </div>
              ))}
            </div>
            <div className="flex w-32 flex-wrap gap-1 text-white">
              {data.tables.map((tabel) => (
                <>
                  <div
                    className={`${
                      data.gameData.gameType !== "Chance" ? "flex" : "hidden"
                    } flex w-full flex-wrap  justify-center`}
                  >
                    {tabel.map((item, indx) => (
                      <div
                        key={indx}
                        className={`${
                          data.gameData.winningCombinations.includes(item)
                            ? "bg-green-500"
                            : "bg-red-400"
                        } m-1 flex h-8 w-8 items-center justify-center rounded-full `}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div
                    className={`${
                      data.gameData.gameType === "Chance" ? "flex" : "hidden"
                    } flex w-full flex-col  flex-wrap justify-center`}
                  >
                    <div className="mb-2 flex w-1/4">
                      <Spade />
                      <Heart />
                      <Diamond />
                      <Club />
                    </div>
                    <div className="flex w-1/4 justify-between">
                      {tabel.map((item, indx) => (
                        <div
                          key={indx}
                          className={`${
                            data.gameData.winningCombinations[indx]==item
                              ? "bg-green-500"
                              : ""
                          } m-1 flex items-center justify-center p-1`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          {/* <div
            className={`${
              data.gameType == "Chance"
                ? "flex  justify-between gap-28"
                : "hidden"
            }`}
          >
            <div className=" w-full">
              <div className="flex flex-1">
                <Spade />
                <Heart />
                <Diamond />
                <Club />
              </div>
              <div className="flex w-full justify-around ">
                {data.winCom.map((items, idx) => (
                  <>
                    <h1
                      className={` ${
                        idx == 1 || idx == 2 ? "text-red-500" : ""
                      } flex text-black`}
                    >
                      {items}
                    </h1>
                  </>
                ))}
              </div>
            </div>
            <div className="w-full">
              <div className="mb-2 flex">
                <Spade />
                <Heart />
                <Diamond />
                <Club />
              </div>
              <div className="flex w-full justify-around ">
                {data.myCom.map((items, idx) => (
                  <>
                    <h1
                      className={` ${
                        idx == 1 || idx == 2 ? "text-red-500" : ""
                      }  ${
                        data.winCom[idx] == items
                          ? "h-8 w-5 justify-center rounded bg-green-500 text-white"
                          : ""
                      } flex p-1 text-black`}
                    >
                      {items}
                    </h1>
                  </>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  ));

  return (
    <div className="flex h-[90vh] flex-col gap-3 overflow-y-scroll scroll-smooth">
      {history}
    </div>
  );
}
