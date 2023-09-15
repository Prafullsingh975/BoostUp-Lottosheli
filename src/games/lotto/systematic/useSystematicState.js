import { useReducer } from "react";

function reducer(state, { type, payload }) {
  switch (type) {
    case "FILL": {
      const set = new Set();
      while (set.size < state.type) set.add(Math.ceil(Math.random() * 37));

      return {
        ...state,
        strong: Math.ceil(Math.random() * 7),
        table: Array.from(set).sort((a, b) => a - b),
      };
    }
    case "CLEAR":
      return {
        ...state,
        strong: -1,
        table: new Array(state.type).fill(-1),
      };
    case "UPDATE_LOTTERY":
      return {
        ...state,
        lottery: payload,
      };
    case "UPDATE_TYPE":
      return {
        ...state,
        type: payload,
        table: new Array(payload).fill(-1),
      };
    case "TOGGLE_EXTRA":
      return {
        ...state,
        extra: !state.extra,
      };
    case "UPDATE_DOUBLE":
      return {
        ...state,
        double: payload,
      };
    case "UPDATE_STRONG": {
      let newStrong = state.strong === payload ? -1 : payload;
      return {
        ...state,
        strong: newStrong,
      };
    }
    case "UPDATE_TABLE": {
      const newTable = [...state.table];

      if (state.table.includes(payload)) {
        const idx = state.table.findIndex((val) => val === payload);
        newTable[idx] = -1;
      } else {
        if (!state.table.includes(-1)) return state;
        newTable[state.table.length - 1] = payload;
      }

      newTable.sort((a, b) => {
        if (a === -1) return 1;
        if (b === -1) return -1;
        return a - b;
      });

      return {
        ...state,
        table: newTable,
      };
    }
    default:
      return state;
  }
}

export default function useSystematicState() {
  const [state, dispatch] = useReducer(reducer, {
    type: 8,
    lottery: 1,
    strong: -1,
    extra: false,
    double: false,
    table: new Array(10).fill(-1),
  });

  return [state, dispatch];
}

export const actions = {
  FILL: "FILL",
  CLEAR: "CLEAR",
  UPDATE_TYPE: "UPDATE_TYPE",
  TOGGLE_EXTRA: "TOGGLE_EXTRA",
  UPDATE_TABLE: "UPDATE_TABLE",
  UPDATE_DOUBLE: "UPDATE_DOUBLE",
  UPDATE_STRONG: "UPDATE_STRONG",
  UPDATE_LOTTERY: "UPDATE_LOTTERY",
};

Object.freeze(actions);
