import { useContext } from "react";
import { v4 as uuid } from "uuid";
import { actions } from "./useStrongState";
import { strongLottoContext } from "./Strong";

export default function Table() {
  const context = useContext(strongLottoContext);
  const { state, dispatch } = context;

  return (
    <div className="flex w-72 flex-col justify-center gap-4">
      <h3 className="flex items-center px-4 text-lg leading-5 text-blue-600">
        Select from type
        <span className="ml-2 grid h-8 w-8 place-items-center rounded-full border-2 border-blue-500">
          1
        </span>
      </h3>
      <p className="px-4 text-sm font-semibold leading-5">
        The number you choose will affect the amount of combinations that will
        be sent
      </p>
      <div className="flex justify-center gap-2">
        <button
          onClick={() => dispatch({ type: actions.SET_TYPE, payload: 4 })}
          className={`${
            state.type === 4 ? "bg-blue-600 text-white" : "bg-white text-black"
          } h-11 w-11 rounded border text-lg`}
        >
          4
        </button>
        <button
          onClick={() => dispatch({ type: actions.SET_TYPE, payload: 5 })}
          className={`${
            state.type === 5 ? "bg-blue-600 text-white" : "bg-white text-black"
          } h-11 w-11 rounded border text-lg`}
        >
          5
        </button>
        <button
          onClick={() => dispatch({ type: actions.SET_TYPE, payload: 6 })}
          className={`${
            state.type === 6 ? "bg-blue-600 text-white" : "bg-white text-black"
          } h-11 w-11 rounded border text-lg`}
        >
          6
        </button>
        <button
          onClick={() => dispatch({ type: actions.SET_TYPE, payload: 7 })}
          className={`${
            state.type === 7 ? "bg-blue-600 text-white" : "bg-white text-black"
          } h-11 w-11 rounded border text-lg`}
        >
          7
        </button>
      </div>
      <p className="px-4 text-sm font-semibold leading-5">
        The number of combinations that participate in the lottery
      </p>
      <h3 className="flex items-center px-4 text-lg leading-5 text-blue-600">
        Choose 7 numbers and 4 strong
        <span className="ml-2 grid h-8 w-8 place-items-center rounded-full border-2 border-blue-500">
          2
        </span>
      </h3>
      <div className="relative grid gap-2 rounded-bl-xl rounded-tl-xl border-2 border-blue-500 bg-blue-200 p-3 shadow-table after:absolute after:-right-4 after:h-full after:w-4 after:bg-blue-200 after:shadow-after after:content-['']">
        <div className="flex gap-2">
          {state.table.vals.map((item) => (
            <div
              key={uuid()}
              className={`${
                item === -1 ? "bg-white" : "border-blue-700 bg-blue-500"
              } flex h-8 w-8 items-center justify-center rounded border font-semibold text-white shadow-input`}
            >
              {item === -1 ? "" : item}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          {state.table.special.map((item) => (
            <div
              key={uuid()}
              className={`${
                item === -1 ? "bg-amber-100" : "border-red-700 bg-orange-500"
              } flex h-8 w-8 items-center justify-center rounded border font-semibold text-white shadow-input`}
            >
              {item === -1 ? "" : item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
