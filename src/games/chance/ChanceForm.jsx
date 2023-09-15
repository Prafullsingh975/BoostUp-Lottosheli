import { actionTypes } from "./useChanceState";

export default function ChanceForm({ state, dispatch, pay }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 rounded-xl bg-blue-500 p-3">
        <div className="flex flex-col justify-between">
          <button className="h-10 w-10 rounded-full border-2 border-black p-1">
            ?
          </button>
          <button className="h-10 w-10 rounded-full border-2 border-black p-1">
            ?
          </button>
        </div>
        <div className="grid grid-cols-4 gap-1">
          <h3 className="col-span-4 text-lg text-white">number of lotteries</h3>
          <button
            className={`${
              state.lotteries === 8 ? "bg-orange-500 text-white" : "bg-white"
            } h-10 w-10 rounded`}
            onClick={() =>
              dispatch({ type: actionTypes.UPDATE_LOTTERIES, payload: 8 })
            }
          >
            8
          </button>
          <button
            className={`${
              state.lotteries === 4 ? "bg-orange-500 text-white" : "bg-white"
            } h-10 w-10 rounded`}
            onClick={() =>
              dispatch({ type: actionTypes.UPDATE_LOTTERIES, payload: 4 })
            }
          >
            4
          </button>
          <button
            className={`${
              state.lotteries === 2 ? "bg-orange-500 text-white" : "bg-white"
            } h-10 w-10 rounded`}
            onClick={() =>
              dispatch({ type: actionTypes.UPDATE_LOTTERIES, payload: 2 })
            }
          >
            2
          </button>
          <button
            className={`${
              state.lotteries === 1 ? "bg-orange-500 text-white" : "bg-white"
            } h-10 w-10 rounded`}
            onClick={() =>
              dispatch({ type: actionTypes.UPDATE_LOTTERIES, payload: 1 })
            }
          >
            1
          </button>
          <button
            className={`${
              state.lotteries === 15 ? "bg-orange-500 text-white" : "bg-white"
            } col-span-4 h-10 w-full rounded`}
            onClick={() =>
              dispatch({ type: actionTypes.UPDATE_LOTTERIES, payload: 15 })
            }
          >
            Auto Renews
          </button>
        </div>
      </div>
      <div className="rounded-xl border-2 border-gray-300 bg-gray-200">
        <h4 className="flex justify-between px-4 py-1">
          {state.isSpecial ? (
            <span>Great Chance</span>
          ) : (
            <span>{state.gameType}</span>
          )}
          : Type
        </h4>
        <h4 className="flex justify-between bg-gray-100 px-4 py-1">
          <span>{state.lotteries}</span>: Lotteries
        </h4>
        <h4 className="flex justify-between px-4 py-1">
          <span>{pay}</span>: To be paid
        </h4>
      </div>
      <button className="rounded-xl bg-blue-600 py-2 text-white">
        Submit a form
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
  );
}
