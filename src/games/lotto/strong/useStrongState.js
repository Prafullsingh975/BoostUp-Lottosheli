import { useReducer } from "react";

const getRandomVals = (specialLength) => {
  const valsSet = new Set();
  const specialSet = new Set();
  while (valsSet.size < 7) valsSet.add(Math.ceil(Math.random() * 37));
  while (specialSet.size < specialLength)
    specialSet.add(Math.ceil(Math.random() * 7));

  return {
    vals: [...valsSet].sort((a, b) => a - b),
    special: [...specialSet].sort((a, b) => a - b),
  };
};

const sortTheGameWay = (a, b) => {
  if (a === -1) return 1;
  if (b === -1) return -1;

  return a - b;
};

const getFillCount = (arr) => {
  let count = 0;
  for (let item of arr) if (item !== -1) count += 1;
  return count;
};

function reducer(state, action) {
  switch (action.type) {
    case "FILL":
      return {
        ...state,
        table: getRandomVals(state.type),
      };
    case "CLEAR":
      return {
        ...state,
        table: {
          vals: new Array(7).fill(-1),
          special: new Array(state.type).fill(-1),
        },
      };
    case "UPDATE_NORMAL_VAL": {
      const val = action.payload;
      const newVals = [...state.table.vals];

      if (newVals.includes(val)) {
        const itemIndex = newVals.findIndex((i) => i === val);
        newVals[itemIndex] = -1;
      } else {
        if (getFillCount(newVals) >= newVals.length) return state;
        const itemIndex = newVals.findIndex((i) => i === -1);
        newVals[itemIndex] = val;
      }
      const newTable = JSON.parse(JSON.stringify(state.table));
      newTable.vals = newVals.sort(sortTheGameWay);

      return {
        ...state,
        table: newTable,
      };
    }
    case "UPDATE_SPECIAL_VAL": {
      const val = action.payload;
      const newVals = [...state.table.special];

      if (newVals.includes(val)) {
        const itemIndex = newVals.findIndex((i) => i === val);
        newVals[itemIndex] = -1;
      } else {
        if (getFillCount(newVals) >= newVals.length) return state;
        const itemIndex = newVals.findIndex((i) => i === -1);
        newVals[itemIndex] = val;
      }
      const newTable = JSON.parse(JSON.stringify(state.table));
      newTable.special = newVals.sort(sortTheGameWay);

      return {
        ...state,
        table: newTable,
      };
    }
    case "SET_LOTTERY":
      return {
        ...state,
        lottery: action.payload,
      };
    case "SET_TYPE": {
      const type = action.payload;
      const stateCopy = JSON.parse(JSON.stringify(state));

      if (type === 4) {
        stateCopy.type = 4;
        stateCopy.table.vals = new Array(7).fill(-1);
        stateCopy.table.special = new Array(4).fill(-1);
      }
      if (type === 5) {
        stateCopy.type = 5;
        stateCopy.table.vals = new Array(7).fill(-1);
        stateCopy.table.special = new Array(5).fill(-1);
      }
      if (type === 6) {
        stateCopy.type = 6;
        stateCopy.table.vals = new Array(7).fill(-1);
        stateCopy.table.special = new Array(6).fill(-1);
      }
      if (type === 7) {
        stateCopy.type = 7;
        stateCopy.table.vals = new Array(7).fill(-1);
        stateCopy.table.special = [1, 2, 3, 4, 5, 6, 7];
      }
      return stateCopy;
    }
    case "SET_EXTRA":
      return {
        ...state,
        extra: !state.extra,
      };
    case "SET_DOUBLE":
      return {
        ...state,
        double: action.payload,
      };
    default:
      return state;
  }
}

export default function useStrongState() {
  const [state, dispatch] = useReducer(reducer, {
    type: 4,
    lottery: 1,
    extra: false,
    fee: 99.9,
    double: false,
    table: {
      vals: [-1, -1, -1, -1, -1, -1, -1],
      special: [-1, -1, -1, -1],
    },
  });

  return [state, dispatch];
}

// prettier-ignore
export const actions = {
  FILL           :               "FILL",
  CLEAR          :              "CLEAR",
  SET_TYPE       :           "SET_TYPE",
  SET_EXTRA      :          "SET_EXTRA",
  SET_DOUBLE     :         "SET_DOUBLE",
  SET_LOTTERY    :        "SET_LOTTERY",
  UPDATE_NORMAL  :  "UPDATE_NORMAL_VAL",
  UPDATE_SPECIAL : "UPDATE_SPECIAL_VAL",
};

Object.freeze(actions);
