import { useContext } from "react";
import { v4 as uuid } from "uuid";
import { RegularLottoContext } from "./RegularLotto";
import { actions } from "./useRegularState";

export default function Keypad() {
  const { state, dispatch } = useContext(RegularLottoContext);
  return (
    <div className="grid w-fit gap-3 overflow-hidden rounded-xl border-2 border-blue-500 bg-blue-200 shadow-table">
      <h2 className="h-fit bg-blue-500 p-3 text-white">
        Choose 6 numbers and 1 strong
      </h2>
      <div className="mx-3 rounded-md bg-white p-3">
        <div className="mb-3 flex">
          <button
            className="aspect-square rounded border border-red-300 bg-red-100 p-1"
            onClick={() => dispatch({ type: actions.CLEAR_FOCUSED_TABLE })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              stroke="#a00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              className="icon icon-tabler icon-tabler-trash-x"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path d="M4 7h16M5 7l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3M10 12l4 4m0-4l-4 4"></path>
            </svg>
          </button>
          <button
            className="ml-2 rounded bg-blue-600 px-2 text-white"
            onClick={() => dispatch({ type: actions.FILL_FOCUSED_TABLE })}
          >
            fill in the table
          </button>
          <h4 className="ml-auto text-blue-600">select 6</h4>
        </div>
        <div className="grid w-fit grid-cols-5 gap-2">
          {Array(37)
            .fill()
            .map((_item, idx) => (
              <button
                key={uuid()}
                onClick={() =>
                  dispatch({
                    type: actions.UPDATE_NORMAL_VAL,
                    payload: idx + 1,
                  })
                }
                className={`${
                  state.tables[state.focusedTableAndRow[0]].normal[
                    state.focusedTableAndRow[1]
                  ].includes(idx + 1)
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200 text-black"
                } h-9 w-9 rounded`}
              >
                {idx + 1}
              </button>
            ))}
        </div>
      </div>
      <div className="m-3 mt-0  rounded-md bg-white p-3">
        <h4 className="-mt-1 mb-2 ml-auto text-blue-600">
          select a strong number
        </h4>
        <div className="grid w-fit grid-cols-5 gap-2">
          {Array(7)
            .fill()
            .map((_item, idx) => (
              <button
                key={uuid()}
                onClick={() =>
                  dispatch({
                    type: actions.UPDATE_STRONG_VAL,
                    payload: idx + 1,
                  })
                }
                className={`${
                  state.tables[state.focusedTableAndRow[0]].strong[
                    state.focusedTableAndRow[1]
                  ] ===
                  idx + 1
                    ? "bg-orange-600 text-white"
                    : "bg-amber-200 text-black"
                } h-9 w-9 rounded`}
              >
                {idx + 1}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
