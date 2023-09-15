import { useReducer, useEffect, useState } from "react";
import { Spade, Club, Heart, Diamond } from "./KeyPad";
import { v4 as uuid } from "uuid";

function getRandomCards() {
  const cards = [7, 8, 9, 10, "J", "Q", "K", "A"];
  const randomCard = () => cards[Math.floor(Math.random() * cards.length)];
  const res = {
    spade: randomCard(),
    heart: randomCard(),
    diamond: randomCard(),
    club: randomCard(),
  };

  return res;
}

function reducer(state, action) {
  switch (action.type) {
    case "FILL":
      return {
        ...state,
        table: getRandomCards(),
      };
    case "CLEAR":
      return {
        ...state,
        table: {
          spade: -1,
          heart: -1,
          diamond: -1,
          club: -1,
        },
      };
    case "UPDATE_VALUE": {
      const { deck, card } = action.payload;
      const currentCard = state.table[deck];
      const stateCopy = JSON.parse(JSON.stringify(state));
      if (card === currentCard) stateCopy.table[deck] = -1;
      else stateCopy.table[deck] = card;

      return stateCopy;
    }
    case "UPDATE_LOTTERY": {
      return {
        ...state,
        lotteries: action.payload,
      };
    }
    case "UPDATE_PARTICIPATION": {
      return {
        ...state,
        participation: action.payload,
      };
    }
    case "UPDATE_TYPE": {
      return {
        ...state,
        type: action.payload,
      };
    }
    default:
      return state;
  }
}

const initialState = {
  lotteries: 1,
  participation: 5,
  type: 1,
  table: {
    spade: -1,
    heart: -1,
    diamond: -1,
    club: -1,
  },
};

export default function NormalChanceGame() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [pay, setPay] = useState(0);

  useEffect(() => {
    let total = state.lotteries * state.participation * state.type;
    total = (total * 29.9) / 100;
    setPay(total);
  }, [state]);

  return (
    <main className="flex justify-center">
      <div className="flex w-[900px] rounded-bl-2xl rounded-br-2xl bg-gray-200 p-8 pt-0">
        <div className="mr-4 flex w-fit flex-col gap-3">
          <div className="flex w-fit gap-3 rounded-xl bg-blue-500 p-3">
            <div className="flex flex-col justify-between">
              <button className="h-10 w-10 rounded-full border-2 border-black p-1 text-lg font-bold">
                ?
              </button>
              <button className="h-10 w-10 rounded-full border-2 border-black p-1 text-lg font-bold">
                ?
              </button>
            </div>
            <div className="grid grid-cols-4 gap-1">
              <h3 className="col-span-4 text-lg text-white">
                number of lotteries
              </h3>
              <button
                onClick={() => dispatch({ type: "UPDATE_LOTTERY", payload: 8 })}
                className={`${
                  state.lotteries === 8
                    ? "bg-orange-500 text-white"
                    : "bg-white text-black"
                } h-10 w-10 rounded text-lg`}
              >
                8
              </button>
              <button
                onClick={() => dispatch({ type: "UPDATE_LOTTERY", payload: 4 })}
                className={`${
                  state.lotteries === 4
                    ? "bg-orange-500 text-white"
                    : "bg-white text-black"
                } h-10 w-10 rounded text-lg`}
              >
                4
              </button>
              <button
                onClick={() => dispatch({ type: "UPDATE_LOTTERY", payload: 2 })}
                className={`${
                  state.lotteries === 2
                    ? "bg-orange-500 text-white"
                    : "bg-white text-black"
                } h-10 w-10 rounded text-lg`}
              >
                2
              </button>
              <button
                onClick={() => dispatch({ type: "UPDATE_LOTTERY", payload: 1 })}
                className={`${
                  state.lotteries === 1
                    ? "bg-orange-500 text-white"
                    : "bg-white text-black"
                } h-10 w-10 rounded text-lg`}
              >
                1
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "UPDATE_LOTTERY", payload: 15 })
                }
                className={`${
                  state.lotteries === 15
                    ? "bg-orange-500 text-white"
                    : "bg-white text-black"
                } full col-span-4 h-10 rounded text-lg`}
              >
                Auto renews
              </button>
            </div>
          </div>
          <ul className="rounded-xl border-2 border-gray-300 bg-gray-200">
            <li className="flex justify-between px-4 py-1">
              <span>{state.type}</span>: Type
            </li>
            <li className="flex justify-between bg-gray-50 px-4 py-1">
              <span>{state.lotteries}</span>: Lotteries
            </li>
            <li className="flex justify-between px-4 py-1">
              <span>{pay}</span>: Pay
            </li>
          </ul>
          <button className="rounded-xl bg-blue-600 py-2 text-white">
            Submit
          </button>

          <div>
            <ul className="flex w-60 flex-col gap-2 text-sm">
              <li>The chances of winning are very high</li>
              <li>Get a prize for a partial guess </li>
              <li>A chance to win several levels in one Persavatops </li>
              <li>Guess 4 cards </li>
            </ul>
          </div>
        </div>
        <div className="mr-3 flex w-64 flex-col gap-4">
          <h4 className="flex items-center gap-3 pr-4 text-blue-600">
            Select the game type
            <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-500">
              1
            </span>
          </h4>

          <div className="flex justify-center gap-2">
            <button
              onClick={() => dispatch({ type: "UPDATE_TYPE", payload: 1 })}
              className={`${
                state.type === 1
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black"
              } h-10 w-10 rounded border border-gray-300`}
            >
              1
            </button>
            <button
              onClick={() => dispatch({ type: "UPDATE_TYPE", payload: 2 })}
              className={`${
                state.type === 2
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black"
              } h-10 w-10 rounded border border-gray-300`}
            >
              2
            </button>
            <button
              onClick={() => dispatch({ type: "UPDATE_TYPE", payload: 3 })}
              className={`${
                state.type === 3
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black"
              } h-10 w-10 rounded border border-gray-300`}
            >
              3
            </button>
            <button
              onClick={() => dispatch({ type: "UPDATE_TYPE", payload: 4 })}
              className={`${
                state.type === 4
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black"
              } h-10 w-10 rounded border border-gray-300`}
            >
              4
            </button>
          </div>

          <h4 className="flex items-center gap-3 pr-4 text-blue-600">
            Select Cards
            <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-500">
              2
            </span>
          </h4>

          <div className="relative z-10 -mr-[2px] flex gap-2 rounded-bl-xl rounded-tl-xl border-2 border-r-0 border-blue-500 bg-blue-200 p-2 pl-6 pr-4 shadow-table after:absolute after:-right-3 after:top-0 after:h-full after:w-4 after:bg-blue-200 after:shadow-after after:content-['']">
            {state.table.spade === -1 ? (
              <div className="h-16 w-11 rounded-md border-2 border-slate-400 bg-white p-2">
                <div className="h-full opacity-70">
                  <Spade />
                </div>
              </div>
            ) : (
              <div className="flex h-16 w-11 flex-col items-start justify-between rounded-md border-2 border-slate-500 bg-white p-2">
                <div className="h-4">
                  <Spade />
                </div>
                <span className="ml-auto text-2xl">{state.table.spade}</span>
              </div>
            )}
            {state.table.heart === -1 ? (
              <div className="h-16 w-11 rounded-md border-2 border-slate-400 bg-white p-2">
                <div className="h-full opacity-70">
                  <Heart />
                </div>
              </div>
            ) : (
              <div className="flex h-16 w-11 flex-col items-start justify-between rounded-md border-2 border-slate-500 bg-white p-2">
                <div className="h-4">
                  <Heart />
                </div>
                <span className="ml-auto text-2xl">{state.table.heart}</span>
              </div>
            )}
            {state.table.diamond === -1 ? (
              <div className="h-16 w-11 rounded-md border-2 border-slate-400 bg-white p-2">
                <div className="h-full opacity-70">
                  <Diamond />
                </div>
              </div>
            ) : (
              <div className="flex h-16 w-11 flex-col items-start justify-between rounded-md border-2 border-slate-500 bg-white p-2">
                <div className="h-4">
                  <Diamond />
                </div>
                <span className="ml-auto text-2xl">{state.table.diamond}</span>
              </div>
            )}
            {state.table.club === -1 ? (
              <div className="h-16 w-11 rounded-md border-2 border-slate-400 bg-white p-2">
                <div className="h-full opacity-70">
                  <Club />
                </div>
              </div>
            ) : (
              <div className="flex h-16 w-11 flex-col items-start justify-between rounded-md border-2 border-slate-500 bg-white p-2">
                <div className="h-4">
                  <Club />
                </div>
                <span className="ml-auto text-2xl">{state.table.club}</span>
              </div>
            )}
          </div>

          <h4 className="flex items-center gap-3 pr-4 text-blue-600">
            Select a participation amount
            <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-500">
              3
            </span>
          </h4>

          <div className="flex justify-center">
            <div className="grid w-fit grid-cols-4 gap-1">
              <button
                onClick={() =>
                  dispatch({ type: "UPDATE_PARTICIPATION", payload: 5 })
                }
                className={`${
                  state.participation === 5
                    ? "bg-blue-600 text-white"
                    : "bg-gray-50 text-black"
                } h-10 w-10 rounded border border-gray-300 hover:shadow-md`}
              >
                5
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "UPDATE_PARTICIPATION", payload: 10 })
                }
                className={`${
                  state.participation === 10
                    ? "bg-blue-600 text-white"
                    : "bg-gray-50 text-black"
                } h-10 w-10 rounded border border-gray-300 hover:shadow-md`}
              >
                10
              </button>

              <button
                onClick={() =>
                  dispatch({ type: "UPDATE_PARTICIPATION", payload: 25 })
                }
                className={`${
                  state.participation === 25
                    ? "bg-blue-600 text-white"
                    : "bg-gray-50 text-black"
                } h-10 w-10 rounded border border-gray-300 hover:shadow-md`}
              >
                25
              </button>

              <button
                onClick={() =>
                  dispatch({ type: "UPDATE_PARTICIPATION", payload: 50 })
                }
                className={`${
                  state.participation === 50
                    ? "bg-blue-600 text-white"
                    : "bg-gray-50 text-black"
                } h-10 w-10 rounded border border-gray-300 hover:shadow-md`}
              >
                50
              </button>

              <button
                onClick={() =>
                  dispatch({ type: "UPDATE_PARTICIPATION", payload: 70 })
                }
                className={`${
                  state.participation === 70
                    ? "bg-blue-600 text-white"
                    : "bg-gray-50 text-black"
                } h-10 w-10 rounded border border-gray-300 hover:shadow-md`}
              >
                70
              </button>

              <button
                onClick={() =>
                  dispatch({ type: "UPDATE_PARTICIPATION", payload: 100 })
                }
                className={`${
                  state.participation === 100
                    ? "bg-blue-600 text-white"
                    : "bg-gray-50 text-black"
                } h-10 w-10 rounded border border-gray-300 hover:shadow-md`}
              >
                100
              </button>

              <button
                onClick={() =>
                  dispatch({ type: "UPDATE_PARTICIPATION", payload: 250 })
                }
                className={`${
                  state.participation === 250
                    ? "bg-blue-600 text-white"
                    : "bg-gray-50 text-black"
                } h-10 w-10 rounded border border-gray-300 hover:shadow-md`}
              >
                250
              </button>

              <button
                onClick={() =>
                  dispatch({ type: "UPDATE_PARTICIPATION", payload: 500 })
                }
                className={`${
                  state.participation === 500
                    ? "bg-blue-600 text-white"
                    : "bg-gray-50 text-black"
                } h-10 w-10 rounded border border-gray-300 hover:shadow-md`}
              >
                500
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="grid w-max overflow-hidden rounded-xl border-2 border-blue-500 bg-blue-200 shadow-table">
            <h3 className="bg-blue-500 px-4 py-2 text-lg text-white">
              Choose up to 4 cards
            </h3>
            <div className="grid gap-4 p-3 pt-4">
              <div className="flex items-center gap-3">
                <button
                  className="rounded bg-white p-1"
                  onClick={() => dispatch({ type: "CLEAR" })}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-trash"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#04f"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 7l16 0" />
                    <path d="M10 11l0 6" />
                    <path d="M14 11l0 6" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
                </button>
                <button
                  className="rounded bg-blue-600 px-2 py-1 text-sm text-white"
                  onClick={() => dispatch({ type: "FILL" })}
                >
                  fill in the table
                </button>
                <h4 className="ml-auto text-sm text-blue-600">select 4</h4>
              </div>
              <div className="grid w-full gap-[2px] overflow-hidden rounded-lg border-4 border-white bg-gray-200">
                <div className="flex gap-[3px] bg-white px-1 py-4">
                  {[7, 8, 9, 10, "J", "Q", "K", "A"].map((val) => (
                    <button
                      key={uuid()}
                      onClick={() =>
                        dispatch({
                          type: "UPDATE_VALUE",
                          payload: { deck: "spade", card: val },
                        })
                      }
                      className={`${
                        state.table.spade === val
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-black"
                      } h-10 w-7 rounded border border-gray-300 p-1 text-sm font-bold`}
                    >
                      {val}
                    </button>
                  ))}
                  <div className="w-5 pl-1">
                    <Spade />
                  </div>
                </div>
                <div className="flex gap-[3px] bg-white px-1 py-4">
                  {[7, 8, 9, 10, "J", "Q", "K", "A"].map((val) => (
                    <button
                      key={uuid()}
                      onClick={() =>
                        dispatch({
                          type: "UPDATE_VALUE",
                          payload: { deck: "heart", card: val },
                        })
                      }
                      className={`${
                        state.table.heart === val
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-black"
                      } h-10 w-7 rounded border border-gray-300 p-1 text-sm font-bold`}
                    >
                      {val}
                    </button>
                  ))}
                  <div className="w-5 pl-1">
                    <Heart />
                  </div>
                </div>
                <div className="flex gap-[3px] bg-white px-1 py-4">
                  {[7, 8, 9, 10, "J", "Q", "K", "A"].map((val) => (
                    <button
                      key={uuid()}
                      onClick={() =>
                        dispatch({
                          type: "UPDATE_VALUE",
                          payload: { deck: "diamond", card: val },
                        })
                      }
                      className={`${
                        state.table.diamond === val
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-black"
                      } h-10 w-7 rounded border border-gray-300 p-1 text-sm font-bold`}
                    >
                      {val}
                    </button>
                  ))}
                  <div className="w-5 pl-1">
                    <Diamond />
                  </div>
                </div>
                <div className="flex gap-[3px] bg-white px-1 py-4">
                  {[7, 8, 9, 10, "J", "Q", "K", "A"].map((val) => (
                    <button
                      key={uuid()}
                      onClick={() =>
                        dispatch({
                          type: "UPDATE_VALUE",
                          payload: { deck: "club", card: val },
                        })
                      }
                      className={`${
                        state.table.club === val
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-black"
                      } h-10 w-7 rounded border border-gray-300 p-1 text-sm font-bold`}
                    >
                      {val}
                    </button>
                  ))}
                  <div className="w-5 pl-1">
                    <Club />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
