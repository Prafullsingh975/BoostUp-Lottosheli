import { Spade, Club, Diamond, Heart } from "./KeyPad";
import { actionTypes } from "./useChanceState";
import { v4 as uuid } from "uuid";

export default function Table({ state, dispatch }) {
  return (
    <div className="grid flex-1 gap-4">
      <div className="grid w-fit gap-3">
        <h3 className="text-blue-600">
          Select the game type
          <span className="ml-2 inline-block rounded-full border-2 border-blue-600 px-2">
            1
          </span>
        </h3>
        <div className="flex gap-1">
          <button
            className={`${
              state.gameType === 1 && !state.isSpecial
                ? "bg-blue-600 text-white"
                : "bg-white text-black"
            } h-10 w-10 rounded`}
            onClick={() =>
              dispatch({ type: actionTypes.UPDATE_GAME_TYPE, payload: 1 })
            }
          >
            1
          </button>
          <button
            className={`${
              state.gameType === 2 && !state.isSpecial
                ? "bg-blue-600 text-white"
                : "bg-white text-black"
            } h-10 w-10 rounded`}
            onClick={() =>
              dispatch({ type: actionTypes.UPDATE_GAME_TYPE, payload: 2 })
            }
          >
            2
          </button>

          <button
            className={`${
              state.gameType === 3 && !state.isSpecial
                ? "bg-blue-600 text-white"
                : "bg-white text-black"
            } h-10 w-10 rounded`}
            onClick={() =>
              dispatch({ type: actionTypes.UPDATE_GAME_TYPE, payload: 3 })
            }
          >
            3
          </button>
          <button
            className={`${
              state.gameType === 4 && !state.isSpecial
                ? "bg-blue-600 text-white"
                : "bg-white text-black"
            } h-10 w-10 rounded`}
            onClick={() => {
              dispatch({ type: actionTypes.UPDATE_GAME_TYPE, payload: 4 });
              dispatch({ type: actionTypes.UPDATE_SPECIAL, payload: false });
            }}
          >
            4
          </button>

          <button
            className={`${
              state.isSpecial ? "bg-blue-600 text-white" : "bg-white text-black"
            } h-10 w-16 rounded text-xs font-semibold`}
            onClick={() =>
              dispatch({ type: actionTypes.UPDATE_SPECIAL, payload: true })
            }
          >
            Great Chance
          </button>
        </div>
      </div>
      <div className="grid gap-3">
        <h3 className="text-blue-600">
          Select upto 4 cards per row
          <span className="ml-2 rounded-full border-2 border-blue-600 px-2">
            2
          </span>
        </h3>
        <div className="relative grid place-items-center gap-1 rounded-xl rounded-bl-xl rounded-tl-xl border-2 border-blue-500 bg-blue-200 p-2 shadow-table after:absolute after:-right-5 after:top-0 after:h-full after:w-8 after:origin-left after:bg-blue-200 after:shadow-after after:content-['']">
          <div className="flex gap-1">
            {state.tables.spade.map((val) => {
              if (val === -1)
                return (
                  <div
                    key={uuid()}
                    className="h-14 w-10 rounded-md border-2 border-slate-400 bg-white p-2"
                  >
                    <div className="h-full opacity-70">
                      <Spade />
                    </div>
                  </div>
                );
              else
                return (
                  <div
                    key={uuid()}
                    className="flex h-14 w-10 flex-col items-start rounded-md border-2 border-slate-500 bg-white p-2"
                  >
                    <div className="-ml-[3px] -mt-[2px] h-4">
                      <Spade />
                    </div>
                    <span className="ml-auto text-xl font-bold">{val}</span>
                  </div>
                );
            })}
          </div>
          <div className="flex gap-1">
            {state.tables.heart.map((val) => {
              if (val === -1)
                return (
                  <div
                    key={uuid()}
                    className="h-14 w-10 rounded-md border-2 border-slate-400 bg-white p-2"
                  >
                    <div className="h-full opacity-60">
                      <Heart />
                    </div>
                  </div>
                );
              else
                return (
                  <div
                    key={uuid()}
                    className="flex h-14 w-10 flex-col items-start rounded-md border-2 border-slate-500 bg-white p-2"
                  >
                    <div className="-ml-[3px] -mt-[2px] h-4">
                      <Heart />
                    </div>
                    <span className="ml-auto text-xl font-bold">{val}</span>
                  </div>
                );
            })}
          </div>
          <div className="flex gap-1">
            {state.tables.diamond.map((val) => {
              if (val === -1)
                return (
                  <div
                    key={uuid()}
                    className="h-14 w-10 rounded-md border-2 border-slate-400 bg-white p-2"
                  >
                    <div className="h-full opacity-60">
                      <Diamond />
                    </div>
                  </div>
                );
              else
                return (
                  <div
                    key={uuid()}
                    className="flex h-14 w-10 flex-col items-start rounded-md border-2 border-slate-500 bg-white p-2"
                  >
                    <div className="-ml-[3px] -mt-[2px] h-4">
                      <Diamond />
                    </div>
                    <span className="ml-auto text-xl font-bold">{val}</span>
                  </div>
                );
            })}
          </div>
          <div className="flex gap-1">
            {state.tables.club.map((val) => {
              if (val === -1)
                return (
                  <div
                    key={uuid()}
                    className="h-14 w-10 rounded-md border-2 border-slate-400 bg-white p-2"
                  >
                    <div className="h-full opacity-70">
                      <Club />
                    </div>
                  </div>
                );
              else
                return (
                  <div
                    key={uuid()}
                    className="flex h-14 w-10 flex-col items-start rounded-md border-2 border-slate-500 bg-white p-2"
                  >
                    <div className="-ml-[3px] -mt-[2px] h-4">
                      <Club />
                    </div>
                    <span className="ml-auto text-xl font-bold">{val}</span>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
      <div className="grid w-max gap-2">
        <h3 className="text-blue-600">
          Select a participation amount
          <span className="ml-2 rounded-full border-2 border-blue-600 px-2">
            3
          </span>
        </h3>
        <div className="flex gap-2">
          <button
            className={`${
              state.participationAmount === 5
                ? "bg-blue-600 text-white"
                : "bg-white text-black"
            } h-11 w-11 rounded`}
            onClick={() =>
              dispatch({
                type: actionTypes.UPDATE_PARTICIPATION,
                payload: 5,
              })
            }
          >
            5
          </button>
          <button
            className={`${
              state.participationAmount === 10
                ? "bg-blue-600 text-white"
                : "bg-white text-black"
            } h-11 w-11 rounded`}
            onClick={() =>
              dispatch({
                type: actionTypes.UPDATE_PARTICIPATION,
                payload: 10,
              })
            }
          >
            10
          </button>
        </div>
      </div>
    </div>
  );
}
