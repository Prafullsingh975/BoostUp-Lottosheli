import { useContext } from "react";
import { RegularLottoContext } from "./RegularLotto";
import { actions } from "./useRegularState";

export default function RegularNav() {
  const context = useContext(RegularLottoContext);
  const { state, dispatch } = context;
  return (
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
            state.double ? "bg-red-600 text-white" : "bg-gray-100 text-black"
          } w-20 rounded-bl-xl rounded-tl-xl px-4 py-2`}
          onClick={() =>
            dispatch({ type: actions.UPDATE_DOUBLE, payload: true })
          }
        >
          double
        </button>
        <button
          className={`${
            !state.double ? "bg-red-600 text-white" : "bg-gray-100 text-black"
          } w-20 rounded-br-xl rounded-tr-xl px-4 py-2`}
          onClick={() =>
            dispatch({ type: actions.UPDATE_DOUBLE, payload: false })
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
  );
}
