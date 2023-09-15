import { useEffect, useContext, useState } from "react";
import { actions } from "./useStrongState";
import { strongLottoContext } from "./Strong";

export default function Form() {
  const context = useContext(strongLottoContext);
  const { state, dispatch } = context;
  const [pay, setPay] = useState();

  useEffect(() => {
    let totalPay = state.fee * state.lottery + (state.type - 4) * 25;
    if (state.extra) totalPay = totalPay + totalPay * 0.689;
    totalPay = Math.round((totalPay + Number.EPSILON) * 100) / 100;
    if (state.double) totalPay *= 2;
    setPay(totalPay);
  }, [state]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 rounded-xl bg-blue-500 p-3">
        <div className="flex flex-col justify-between">
          <button className="grid h-7 w-7 place-items-center rounded-full border-2 border-black text-lg font-bold">
            ?
          </button>
          <button className="grid h-7 w-7 place-items-center rounded-full border-2 border-black text-lg font-bold">
            ?
          </button>
        </div>
        <div className="grid w-fit grid-cols-4 gap-2">
          <h2 className="col-span-4 text-lg text-white">number of lotteries</h2>

          <button
            className={`${
              state.lottery === 8
                ? "bg-orange-500 text-white"
                : "bg-white text-black"
            } h-11 w-11 rounded text-xl`}
            onClick={() => dispatch({ type: actions.SET_LOTTERY, payload: 8 })}
          >
            8
          </button>

          <button
            className={`${
              state.lottery === 4
                ? "bg-orange-500 text-white"
                : "bg-white text-black"
            } h-11 w-11 rounded text-xl`}
            onClick={() => dispatch({ type: actions.SET_LOTTERY, payload: 4 })}
          >
            4
          </button>

          <button
            className={`${
              state.lottery === 2
                ? "bg-orange-500 text-white"
                : "bg-white text-black"
            } h-11 w-11 rounded text-xl`}
            onClick={() => dispatch({ type: actions.SET_LOTTERY, payload: 2 })}
          >
            2
          </button>

          <button
            className={`${
              state.lottery === 1
                ? "bg-orange-500 text-white"
                : "bg-white text-black"
            } h-11 w-11 rounded text-xl`}
            onClick={() => dispatch({ type: actions.SET_LOTTERY, payload: 1 })}
          >
            1
          </button>

          <button
            className={`${
              state.lottery === 10
                ? "bg-orange-500 text-white"
                : "bg-white text-black"
            } col-span-4 h-11 rounded text-xl`}
            onClick={() => dispatch({ type: actions.SET_LOTTERY, payload: 10 })}
          >
            Auto renews
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-xl bg-amber-400 p-3">
        <button className="grid h-7 w-7 place-items-center rounded-full border-2 border-black text-lg font-bold">
          ?
        </button>
        <img src="EXTRA-on.png" alt="" className="ml-auto" />
        <button
          className={`${
            state.extra ? "bg-orange-600" : "bg-white"
          } grid h-9 w-9 rounded border p-1`}
          onClick={() => dispatch({ type: actions.SET_EXTRA })}
          title="set extra"
        >
          {state.extra && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="icon icon-tabler icon-tabler-check"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path d="M5 12l5 5L20 7"></path>
            </svg>
          )}
        </button>
      </div>
      <ul className="overflow-hidden rounded-xl border-2 border-gray-300">
        <li className="flex justify-between bg-gray-200 px-4 py-2">
          <span>1</span>: Tables
        </li>
        <li className="flex justify-between bg-gray-50 px-4 py-2">
          <span>{state.lottery}</span>: Lotteries
        </li>
        <li className="flex justify-between bg-gray-200 px-4 py-2">
          <span>{state.extra ? "YES" : "NO"}</span>: Extra
        </li>

        <li className="flex justify-between bg-gray-50 px-4 py-2">
          <span>{pay}</span>: To be paid
        </li>
      </ul>
      <button className="rounded-xl bg-blue-600 py-2 text-white">
        Submit a form
      </button>
    </div>
  );
}
