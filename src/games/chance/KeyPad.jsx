import { v4 as uuid } from "uuid";
import { actionTypes } from "./useChanceState";

export default function KeyPad({ state, dispatch }) {
  return (
    <div className="flex w-fit flex-col">
      <div className="grid overflow-hidden rounded-xl border-2 border-blue-500 bg-blue-200 shadow-table">
        <h3 className="bg-blue-500 px-4 py-2 text-lg text-white">
          Choose up to {state.gameType * 4} cards
        </h3>
        <div className="grid gap-4 p-3 pt-4">
          <div className="flex items-center gap-3">
            <button
              className="rounded bg-white p-1"
              onClick={() => dispatch({ type: actionTypes.CLEAR })}
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
              onClick={() => dispatch({ type: actionTypes.FILL })}
            >
              fill in the table
            </button>
            <h4 className="ml-auto text-sm text-blue-600">
              select {state.gameType * 4}
            </h4>
          </div>
          <div className="grid w-full gap-[2px] overflow-hidden rounded-lg border-4 border-white bg-gray-200">
            <div className="flex gap-[3px] bg-white px-1 py-4">
              {[7, 8, 9, 10, "J", "Q", "K", "A"].map((val) => (
                <button
                  key={uuid()}
                  onClick={() =>
                    dispatch({
                      type: actionTypes.INSERT_VALUE,
                      payload: { deck: "spade", val },
                    })
                  }
                  className={`${
                    state.tables.spade.includes(val)
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
                      type: actionTypes.INSERT_VALUE,
                      payload: { deck: "heart", val },
                    })
                  }
                  className={`${
                    state.tables.heart.includes(val)
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
                      type: actionTypes.INSERT_VALUE,
                      payload: { deck: "diamond", val },
                    })
                  }
                  className={`${
                    state.tables.diamond.includes(val)
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
                      type: actionTypes.INSERT_VALUE,
                      payload: { deck: "club", val },
                    })
                  }
                  className={`${
                    state.tables.club.includes(val)
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
  );
}

export const Club = () => (
  <svg
    className="h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 36 36"
  >
    <path
      fill="#222"
      d="M25.5 28a7.5 7.5 0 0 0 7.5-7.5a7.5 7.5 0 0 0-7.5-7.5a7.45 7.45 0 0 0-3.73 1h-.21a6.972 6.972 0 0 0 3.423-6a6.983 6.983 0 1 0-13.967 0a6.972 6.972 0 0 0 3.423 6h-.208c-1.1-.633-2.371-1-3.731-1a7.5 7.5 0 0 0 0 15a7.476 7.476 0 0 0 5.46-2.368C15.549 29.753 11.205 33 7 33h.5a1.5 1.5 0 1 0 0 3h21a1.5 1.5 0 0 0 0-3h.5c-4.205 0-8.549-3.248-8.959-7.369A7.47 7.47 0 0 0 25.5 28z"
    ></path>
  </svg>
);

export const Heart = () => (
  <svg
    className="h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 36 36"
  >
    <path
      fill="#e01"
      d="M2.067 11.319C2.067 2.521 14.251-.74 18 9.445C21.749-.741 33.933 2.52 33.933 11.319C33.933 20.879 18 33 18 33S2.067 20.879 2.067 11.319z"
    ></path>
  </svg>
);

export const Diamond = () => (
  <svg
    className="h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 36 36"
  >
    <path
      fill="#e01"
      d="M18.437 35.747c-.242.337-.632.337-.874 0L5.314 18.612c-.242-.338-.242-.886 0-1.224L17.563.253c.242-.338.632-.338.874 0l12.25 17.135c.241.338.241.886 0 1.224l-12.25 17.135z"
    ></path>
  </svg>
);

export const Spade = () => (
  <svg
    className="h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 36 36"
  >
    <path
      fill="#222"
      d="M32.799 20.336C32.799 11.456 18 .198 18 .198S3.201 11.456 3.201 20.336c0 6.946 8.175 10.172 12.766 5.173C15.631 29.688 11.247 33 7 33h.5a1.5 1.5 0 1 0 0 3h21a1.5 1.5 0 0 0 0-3h.5c-4.246 0-8.632-3.312-8.967-7.491c4.591 4.999 12.766 1.773 12.766-5.173z"
    ></path>
  </svg>
);
