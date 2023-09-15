import { useState, useEffect } from "react";
import KeyPad from "./KeyPad";
import { toggleStatePop } from "../../components/lotteryNav";
import axios from "axios";
import useGameServerData from "../useGameServerData";

export default function Systematic8() {
  const { activeGames } = useGameServerData();

  const [values, setValues] = useState([[-1, -1, -1, -1, -1, -1, -1, -1]]);

  const [activeButton, setActiveButton] = useState([0]);
  const [activeInput, setActiveInput] = useState(0);
  const [lotteries, setLotteries] = useState(1);
  const [tables, setTables] = useState(1);
  const [pay, setPay] = useState(69.9);
  const [gameId, setGameId] = useState();

  //Api Calls
  const submitForm = async () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (!userInfo) {
      toggleStatePop(false);
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
          "Content-type": "application/json",
        },
      };
      try {
        const { data } = await axios.post(
          `http://localhost:5050/api/game/777/register`,
          {
            tables: values,
            amount: pay,
            lottery: JSON.stringify(lotteries),
            gameData: gameId,
          },
          config,
        );
        setValues([[-1, -1, -1, -1, -1, -1, -1, -1]]);
        console.log(data);
      } catch (error) {
        console.error(error);
        // agar error.response.data.message give toster
        return error;
      }
    }
  };
  
  useEffect(() => {
    setPay(Math.round((69.9 * lotteries + Number.EPSILON) * 100) / 100);

    const currGameIdx = activeGames.findIndex(
      (game) => game.gameType === "777" && game.gameName === "Systematic 8",
    );
    const currGameId = activeGames[currGameIdx]?._id;
    setGameId(currGameId);
  }, [values, lotteries, activeGames]);

  function fillRandomVals() {
    const valueDuplicate = [...values];
    valueDuplicate.forEach((item) => {
      item.forEach((i, idx) => {
        item[idx] = Math.floor(Math.random() * 70);
      });
    });
    setValues(valueDuplicate);
  }

  function clearForm() {
    const valCopy = [...values];

    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < values[0].length; j++) {
        valCopy[i][j] = -1;
      }
    }
    setValues(valCopy);
    setActiveButton([0]);
  }

  return (
    <main className="mx-auto w-fit overflow-hidden rounded-bl-2xl rounded-br-2xl bg-gray-200">
      {gameId ? (
        <div className="flex justify-center gap-2 p-6">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 rounded-xl bg-blue-500 p-3">
              <div className="flex flex-col justify-between">
                <button className="rounded-full border-2 border-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-question-mark"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                    <path d="M12 19l0 .01" />
                  </svg>
                </button>
                <button className="rounded-full border-2 border-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-question-mark"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                    <path d="M12 19l0 .01" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-2 text-white">
                number of lotteries
                <div className="flex gap-2">
                  <button
                    className={`${
                      lotteries === 8 ? "bg-orange-500 text-white" : "bg-white"
                    } h-10 w-10 rounded-md text-black`}
                    onClick={() => {
                      setLotteries(8);
                    }}
                  >
                    8
                  </button>
                  <button
                    className={`${
                      lotteries === 4 ? "bg-orange-500 text-white" : "bg-white"
                    } h-10 w-10 rounded-md text-black`}
                    onClick={() => {
                      setLotteries(4);
                    }}
                  >
                    4
                  </button>
                  <button
                    className={`${
                      lotteries === 2 ? "bg-orange-500 text-white" : "bg-white"
                    } h-10 w-10 rounded-md text-black`}
                    onClick={() => {
                      setLotteries(2);
                    }}
                  >
                    2
                  </button>
                  <button
                    className={`${
                      lotteries === 1 ? "bg-orange-500 text-white" : "bg-white"
                    } h-10 w-10 rounded-md text-black`}
                    onClick={() => {
                      setLotteries(1);
                    }}
                  >
                    1
                  </button>
                </div>
                <button
                  className={`${
                    lotteries === 10 ? "bg-orange-500 text-white" : "bg-white"
                  } h-10 rounded-md text-black`}
                  onClick={() => {
                    setLotteries(10);
                  }}
                >
                  Auto Renews
                </button>
              </div>
            </div>
            <div className="flex h-32 flex-col rounded-xl border-2 border-white bg-slate-200">
              <div className="flex flex-1 items-center justify-between px-4">
                <span>{tables}</span>: Tables
              </div>
              <div className="flex flex-1 items-center justify-between bg-slate-50 px-4">
                <span>{lotteries}</span>: Lotteries
              </div>
              <div className="flex flex-1 items-center justify-between px-4">
                <span>{pay}</span>: To be paid
              </div>
            </div>
            <button onClick={submitForm} className="rounded-xl bg-blue-500 py-2 text-white">
              Submit a form
            </button>

            <ul className="flex w-fit flex-col gap-2">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-circle-check mb-auto mt-[0.2rem]"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="#00b341"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
                <span className="w-56">
                  You will win a prize even if you didn&apos;t guess a single
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-circle-check mb-auto mt-[0.2rem]"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="#00b341"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
                <span className="w-56">
                  digit The chances of winning are relatively high{" "}
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-circle-check mb-auto mt-[0.2rem]"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="#00b341"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
                <span className="w-56">Guess 8 numbers out of 70</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-circle-check mb-auto mt-[0.2rem]"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="#00b341"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
                Send 8 tables at once
              </li>
            </ul>
          </div>
          <div className="flex h-fit w-fit flex-col gap-2 rounded-2xl bg-gray-300 p-2">
            <div className="flex gap-2">
              <button
                onClick={() => clearForm()}
                className="rounded-xl bg-white p-1 px-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-trash-x-filled"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16zm-9.489 5.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"
                    strokeWidth="0"
                    fill="currentColor"
                  />
                  <path
                    d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z"
                    strokeWidth="0"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button
                onClick={() => fillRandomVals()}
                className="rounded-xl bg-blue-500 px-2 py-1 text-sm font-bold text-white"
              >
                fill out form
              </button>
            </div>
            {values.map((item, idx) => (
              <button
                onClick={() => setActiveInput(idx)}
                className={`${
                  activeInput === idx
                    ? "relative rounded-bl-xl rounded-tl-xl border-blue-500 bg-blue-200 shadow-table after:absolute after:-right-5 after:top-0 after:h-full after:w-5 after:origin-left after:bg-blue-200 after:shadow-after after:content-['']"
                    : "rounded-xl border-transparent bg-white"
                } flex w-fit items-center gap-2 border-2 p-2`}
                key={`rthygrtg${idx}`}
              >
                <div className="rounded-full bg-slate-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      values[idx].every((i) => i !== -1)
                        ? "opacity-100"
                        : "opacity-0"
                    } icon icon-tabler icon-tabler-circle-check-filled`}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                      strokeWidth="0"
                      fill="#0a6"
                    />
                  </svg>
                </div>

                {item.map((el, i) => (
                  <div
                    key={`sdfasfd${i}`}
                    className={`${
                      el === -1
                        ? "border-orange-300 bg-slate-100"
                        : "border-blue-400 bg-blue-600 text-white"
                    } grid h-8 w-8 place-items-center rounded shadow-input`}
                  >
                    {el === -1 ? "" : el}
                  </div>
                ))}
              </button>
            ))}
          </div>
          <KeyPad
            activeInput={activeInput}
            setActiveInput={setActiveInput}
            values={values}
            setValues={setValues}
            fillRandomVals={fillRandomVals}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            totalNumbers={8}
          />
        </div>
      ) : (
        "Game Not avilable"
      )}
    </main>
  );
}
