import { createContext } from "react";
import useStrongState, { actions } from "./useStrongState";
import Keypad from "./Keypad";
import Table from "./Table";
import Form from "./Form";

export const strongLottoContext = createContext();

export default function Strong() {
  const [state, dispatch] = useStrongState();
  return (
    <main className="flex flex-col items-center">
      <div>
        <div className="flex w-full items-center justify-center bg-gray-200 px-16 pb-4 pt-4">
          <div className="flex items-center">
            <div className="rounded-full bg-red-700 py-1 pl-4 pr-10 text-white">
              Upgrade your form!
            </div>
            <span className="-my-1 -ml-7 flex h-10 w-10 items-center justify-center rounded-full bg-red-800 text-lg font-bold text-white shadow-md">
              2
            </span>
          </div>
          <div className="h-px flex-1 bg-white"></div>
          <div>
            <button
              className={`${
                state.double
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 text-black"
              } w-20 rounded-bl-xl rounded-tl-xl px-4 py-2`}
              onClick={() =>
                dispatch({ type: actions.SET_DOUBLE, payload: true })
              }
            >
              double
            </button>
            <button
              className={`${
                !state.double
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 text-black"
              } w-20 rounded-br-xl rounded-tr-xl px-4 py-2`}
              onClick={() =>
                dispatch({ type: actions.SET_DOUBLE, payload: false })
              }
            >
              single
            </button>
          </div>
          <div className="h-px flex-1 bg-white"></div>
          <div className="flex items-center">
            <div className="rounded-full bg-red-700 py-1 pl-4 pr-10 text-white">
              Fill out your form!
            </div>
            <span className="-my-1 -ml-7 flex h-10 w-10 items-center justify-center rounded-full bg-red-800 text-lg font-bold text-white shadow-md">
              1
            </span>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-bl-2xl rounded-br-2xl bg-gray-200 p-6 pt-0">
          <strongLottoContext.Provider value={{ state, dispatch }}>
            <Form />
            <Table />
            <Keypad />
          </strongLottoContext.Provider>
        </div>
      </div>
    </main>
  );
}
