import { useContext } from "react";
import { v4 as uuid } from "uuid";
import { actions } from "./useSystematicState";
import { SystematicContext } from "./Systematic";

export default function Table() {
  const context = useContext(SystematicContext);
  const { state, dispatch } = context;

  return (
    <div className="flex w-72 flex-col gap-4">
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
      <div className="flex justify-center gap-1">
        <button
          onClick={() => dispatch({ type: actions.UPDATE_TYPE, payload: 8 })}
          className={`${
            state.type === 8 ? "bg-blue-600 text-white" : "bg-white text-black"
          } h-11 w-11 rounded-md border text-lg`}
        >
          8
        </button>
        <button
          onClick={() => dispatch({ type: actions.UPDATE_TYPE, payload: 5 })}
          className={`${
            state.type === 5 ? "bg-blue-600 text-white" : "bg-white text-black"
          } h-11 w-11 rounded-md border text-lg`}
        >
          5
        </button>
        <button
          onClick={() => dispatch({ type: actions.UPDATE_TYPE, payload: 9 })}
          className={`${
            state.type === 9 ? "bg-blue-600 text-white" : "bg-white text-black"
          } h-11 w-11 rounded-md border text-lg`}
        >
          9
        </button>
        <button
          onClick={() => dispatch({ type: actions.UPDATE_TYPE, payload: 10 })}
          className={`${
            state.type === 10 ? "bg-blue-600 text-white" : "bg-white text-black"
          } h-11 w-11 rounded-md border text-lg`}
        >
          10
        </button>

        <button
          onClick={() => dispatch({ type: actions.UPDATE_TYPE, payload: 11 })}
          className={`${
            state.type === 11 ? "bg-blue-600 text-white" : "bg-white text-black"
          } h-11 w-11 rounded-md border text-lg`}
        >
          11
        </button>

        <button
          onClick={() => dispatch({ type: actions.UPDATE_TYPE, payload: 12 })}
          className={`${
            state.type === 12 ? "bg-blue-600 text-white" : "bg-white text-black"
          } h-11 w-11 rounded-md border text-lg`}
        >
          12
        </button>
      </div>
      <p className="px-4 text-sm font-semibold leading-5">
        The number of combinations that participate in the lottery
      </p>
      <h3 className="flex items-center px-4 text-lg leading-5 text-blue-600">
        <span className="flex-1">
          Choose {state.type} numbers and a strong number
        </span>
        <span className="ml-2 grid h-8 w-8 place-items-center rounded-full border-2 border-blue-500">
          2
        </span>
      </h3>
      <div className="relative grid grid-cols-7 gap-2 rounded-bl-xl rounded-tl-xl border-2 border-blue-500 bg-blue-200 p-3 shadow-table after:absolute after:-right-4 after:h-full after:w-4 after:bg-blue-200 after:shadow-after after:content-['']">
        <div
          className={`${
            state.strong === -1
              ? "bg-amber-100"
              : "border-red-700 bg-orange-500"
          } flex h-8 w-8 items-center justify-center rounded border font-semibold text-white shadow-input ${
            state.type !== 5 && "row-span-2"
          }`}
        >
          {state.strong === -1 ? "" : state.strong}
        </div>
        {state.table.map((item) => (
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
    </div>
  );
}
