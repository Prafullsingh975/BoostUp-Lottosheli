import { useEffect, createContext, useState } from "react";
import useCustomState from "./useCustomState";
import Keypad from "./Keypad";
import Table from "./Table";
import useGameServerData from "../useGameServerData";
import { toggleStatePop } from "../../components/lotteryNav";
import axios from "axios";

export const context = createContext();

export default function Game() {
  const { activeGames } = useGameServerData();

  const [state, dispatch] = useCustomState();
  const [tables, setTables] = useState(0);
  const [pay, setPay] = useState(0);
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
          `http://localhost:5050/api/game/123/register`,
          {
            tables: state?.tables.map((tbl) => tbl.vals),
            amount: pay,
            lottery: JSON.stringify(state?.lotteries),
            gameData: gameId,
          },
          config,
        );
        dispatch({ type: "CLEAR_ALL" });
        console.log(data);
      } catch (error) {
        console.error(error);
        console.log(error.response.data.message);
        // agar error.response.data.message give toster
        return error;
      }
    }
  };

  useEffect(() => {
    let currentTables = 0;
    for (let table of state.tables)
      if (table.vals.some((v) => v !== -1)) currentTables++;

    setTables(currentTables);
    const totalPay =
      Math.round(
        (tables * state.price * state.lotteries * state.investment +
          Number.EPSILON) *
          100,
      ) / 100;
    setPay(totalPay);
    console.log(state);
  }, [state]);

  useEffect(() => {
    const currGameIdx = activeGames.findIndex(
      (game) => game.gameType === "123" && game.gameName === "123",
    );
    const currGameId = activeGames[currGameIdx]?._id;
    setGameId(currGameId);
  }, [activeGames]);

  return (
    <main className="mt-10 flex justify-center">
      {gameId ? (
        <div className="flex w-fit gap-4 rounded-2xl bg-gray-100 p-4">
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
                number of state.lotteries
                <div className="flex gap-2">
                  <button
                    className={`${
                      state.lotteries === 8
                        ? "bg-orange-500 text-white"
                        : "bg-white"
                    } h-10 w-10 rounded-md text-black`}
                    onClick={() => {
                      dispatch({ type: "UPDATE_LOTT", payload: 8 });
                    }}
                  >
                    8
                  </button>
                  <button
                    className={`${
                      state.lotteries === 4
                        ? "bg-orange-500 text-white"
                        : "bg-white"
                    } h-10 w-10 rounded-md text-black`}
                    onClick={() => {
                      dispatch({ type: "UPDATE_LOTT", payload: 4 });
                    }}
                  >
                    4
                  </button>
                  <button
                    className={`${
                      state.lotteries === 2
                        ? "bg-orange-500 text-white"
                        : "bg-white"
                    } h-10 w-10 rounded-md text-black`}
                    onClick={() => {
                      dispatch({ type: "UPDATE_LOTT", payload: 2 });
                    }}
                  >
                    2
                  </button>
                  <button
                    className={`${
                      state.lotteries === 1
                        ? "bg-orange-500 text-white"
                        : "bg-white"
                    } h-10 w-10 rounded-md text-black`}
                    onClick={() => {
                      dispatch({ type: "UPDATE_LOTT", payload: 1 });
                    }}
                  >
                    1
                  </button>
                </div>
                <button
                  className={`${
                    state.lotteries === 20
                      ? "bg-orange-500 text-white"
                      : "bg-white"
                  } h-10 rounded-md text-black`}
                  onClick={() => {
                    dispatch({ type: "UPDATE_LOTT", payload: 20 });
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
                <span>{state.lotteries}</span>: Lotteries
              </div>
              <div className="flex flex-1 items-center justify-between px-4">
                <span>{pay}</span>: To be paid
              </div>
            </div>
            <button
              onClick={submitForm}
              className="rounded-xl bg-blue-500 py-2 text-white"
            >
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
                  You will win a prize even if you didn't guess a single
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
                <span className="w-56">Guess 7 numbers out of 70</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <context.Provider value={{ state, dispatch }}>
                <Table />
                <Keypad />
              </context.Provider>
            </div>

            <div className="flex h-full items-center gap-2">
              <button
                onClick={() => dispatch({ type: "UPDATE_INVEST", payload: 1 })}
                className={`${
                  state.investment === 1
                    ? "border-blue-400 bg-blue-600 text-white"
                    : "border-white bg-white text-black hover:bg-gray-200"
                } h-12 w-12 rounded-md border-2 hover:shadow-md`}
              >
                1
              </button>
              <button
                onClick={() => dispatch({ type: "UPDATE_INVEST", payload: 2 })}
                className={`${
                  state.investment === 2
                    ? "border-blue-400 bg-blue-600 text-white"
                    : "border-white bg-white text-black hover:bg-gray-200"
                } h-12 w-12 rounded-md border-2 hover:shadow-md`}
              >
                2
              </button>
              <button
                onClick={() => dispatch({ type: "UPDATE_INVEST", payload: 3 })}
                className={`${
                  state.investment === 3
                    ? "border-blue-400 bg-blue-600 text-white"
                    : "border-white bg-white text-black hover:bg-gray-200"
                } h-12 w-12 rounded-md border-2 hover:shadow-md`}
              >
                3
              </button>
              <button
                onClick={() => dispatch({ type: "UPDATE_INVEST", payload: 5 })}
                className={`${
                  state.investment === 5
                    ? "border-blue-400 bg-blue-600 text-white"
                    : "border-white bg-white text-black hover:bg-gray-200"
                } h-12 w-12 rounded-md border-2 hover:shadow-md`}
              >
                5
              </button>
              <button
                onClick={() => dispatch({ type: "UPDATE_INVEST", payload: 10 })}
                className={`${
                  state.investment === 10
                    ? "border-blue-400 bg-blue-600 text-white"
                    : "border-white bg-white text-black hover:bg-gray-200"
                } h-12 w-12 rounded-md border-2 hover:shadow-md`}
              >
                10
              </button>
              <button
                onClick={() => dispatch({ type: "UPDATE_INVEST", payload: 25 })}
                className={`${
                  state.investment === 25
                    ? "border-blue-400 bg-blue-600 text-white"
                    : "border-white bg-white text-black hover:bg-gray-200"
                } h-12 w-12 rounded-md border-2 hover:shadow-md`}
              >
                25
              </button>
            </div>
          </div>
        </div>
      ) : (
        "Game Not avilable"
      )}
    </main>
  );
}
