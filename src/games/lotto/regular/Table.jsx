import { useContext } from "react";
import { v4 as uuid } from "uuid";
import { RegularLottoContext } from "./RegularLotto";
import { actions } from "./useRegularState";

export default function Table() {
  const { state, dispatch } = useContext(RegularLottoContext);

  return (
    <div className="rounded-xl border-2 border-gray-400 bg-gray-100 py-3">
      <div className="mb-3 flex px-3">
        <button
          className="aspect-square rounded border border-red-300 bg-red-100 p-1"
          onClick={() => dispatch({ type: actions.CLEAR_ALL })}
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
          className="ml-3 rounded bg-blue-600 px-2 text-white"
          onClick={() => dispatch({ type: actions.FILL_ALL })}
        >
          fill all tables
        </button>
      </div>
      <div>
        {Object.keys(state.tables).map((tableKey) => {
          const table = state.tables[tableKey];
          return (
            <div key={uuid()}>
              <div
                className={`${
                  state.tables[tableKey].enabled
                    ? "bg-blue-100"
                    : "bg-transparent"
                } flex items-center border-t-2 border-slate-300 pl-2`}
              >
                <button
                  className={`${
                    state.tables[tableKey].enabled
                      ? "border-blue-500 bg-white text-black"
                      : "border-slate-300 bg-gray-50 text-black"
                  } h-8 w-8 rounded-lg border-2 ${
                    state.focusedTableAndRow[0] === +tableKey
                      ? "z-auto"
                      : "z-10"
                  }`}
                  onClick={() =>
                    dispatch({
                      type: actions.UPDATE_ACTIVE_TABLE,
                      payload: tableKey,
                    })
                  }
                >
                  {tableKey}
                </button>
                <div>
                  <div
                    className={`${
                      state.focusedTableAndRow[0] === +tableKey &&
                      state.focusedTableAndRow[1] === 0
                        ? "relative border-r-0 border-blue-500 bg-blue-200 shadow-table after:absolute after:-right-4 after:h-full after:w-4 after:bg-blue-200 after:shadow-after after:content-['']"
                        : "border-transparent bg-transparent"
                    } -ml-8 flex items-center gap-1 rounded-bl-xl rounded-tl-xl border-2 p-1 pl-2`}
                    tabIndex={0}
                    onClick={() =>
                      dispatch({
                        type: actions.UPDATE_FOCUS,
                        payload: [+tableKey, 0],
                      })
                    }
                  >
                    <button
                      className={`${
                        state.focusedTableAndRow[0] === +tableKey &&
                        state.focusedTableAndRow[1] === 0
                          ? "pointer-events-auto border-blue-300 bg-white"
                          : "pointer-events-none border-transparent bg-transparent"
                      } mr-1 grid h-6 w-6 place-items-center rounded-md border-2 text-sm`}
                      onClick={() =>
                        dispatch({
                          type: actions.UPDATE_ACTIVE_TABLE,
                          payload: tableKey,
                        })
                      }
                    >
                      {state.focusedTableAndRow[0] === +tableKey &&
                      state.focusedTableAndRow[1] === 0
                        ? tableKey
                        : ""}
                    </button>
                    <div
                      className={`${
                        table.strong[0]
                          ? "bg-orange-600 text-white"
                          : "bg-amber-100 text-black"
                      } grid h-7 w-7 place-items-center rounded border shadow-input`}
                    >
                      {table.strong[0] ? table.strong[0] : ""}
                    </div>
                    {table.normal[0].map((val) => (
                      <div
                        key={uuid()}
                        className={`${
                          val ? "bg-blue-600 text-white" : "bg-white text-black"
                        } grid h-7 w-7 place-items-center rounded border shadow-input`}
                      >
                        {val ? val : ""}
                      </div>
                    ))}
                    <div className="w-16 text-center text-sm">
                      Table: {tableKey - 1}
                    </div>
                  </div>

                  <div
                    className={`${
                      state.focusedTableAndRow[0] === +tableKey &&
                      state.focusedTableAndRow[1] === 1
                        ? "relative border-r-0 border-blue-500 bg-blue-200 shadow-table after:absolute after:-right-4 after:h-full after:w-4 after:bg-blue-200 after:shadow-after after:content-['']"
                        : "border-transparent bg-transparent"
                    } -ml-8 flex items-center gap-1 rounded-bl-xl rounded-tl-xl border-2 p-1 pl-2`}
                    tabIndex={0}
                    onClick={() =>
                      dispatch({
                        type: actions.UPDATE_FOCUS,
                        payload: [+tableKey, 1],
                      })
                    }
                  >
                    <button
                      className={`${
                        state.focusedTableAndRow[0] === +tableKey &&
                        state.focusedTableAndRow[1] === 1
                          ? "pointer-events-auto border-blue-300 bg-white"
                          : "pointer-events-none border-transparent bg-transparent"
                      } mr-1 grid h-6 w-6 place-items-center rounded-md border-2 text-sm`}
                      onClick={() =>
                        dispatch({
                          type: actions.UPDATE_ACTIVE_TABLE,
                          payload: tableKey,
                        })
                      }
                    >
                      {state.focusedTableAndRow[0] === +tableKey &&
                      state.focusedTableAndRow[1] === 1
                        ? tableKey
                        : ""}
                    </button>
                    <div
                      className={`${
                        table.strong[1]
                          ? "bg-orange-600 text-white"
                          : "bg-amber-100 text-black"
                      } grid h-7 w-7 place-items-center rounded border shadow-input`}
                    >
                      {table.strong[1] ? table.strong[1] : ""}
                    </div>
                    {table.normal[1].map((val) => (
                      <div
                        key={uuid()}
                        className={`${
                          val ? "bg-blue-600 text-white" : "bg-white text-black"
                        } grid h-7 w-7 place-items-center rounded border shadow-input`}
                      >
                        {val ? val : ""}
                      </div>
                    ))}
                    <div className="w-16 text-center text-sm">
                      Table: {tableKey}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
