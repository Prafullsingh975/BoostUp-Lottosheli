import { useReducer } from "react";

const initialState = {
  activeTable: 0,
  lotteries: 1,
  investment: 1,
  price: 1.19,

  tables: [
    {
      enabled: true,
      vals: [-1, -1, -1],
      activeInput: 0,
    },
    {
      enabled: true,
      vals: [-1, -1, -1],
      activeInput: 0,
    },
    {
      enabled: true,
      vals: [-1, -1, -1],
      activeInput: 0,
    },
    {
      enabled: true,
      vals: [-1, -1, -1],
      activeInput: 0,
    },
    {
      enabled: true,
      vals: [-1, -1, -1],
      activeInput: 0,
    },
  ],
};

export default function useCustomState() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
      case "FILL_ALL": {
        newState.tables.forEach((table) => {
          if (!table.enabled) return;
          table.vals.forEach((_item, idx) => {
            table.vals[idx] = Math.floor(Math.random() * 9);
          });
        });

        break;
      }
      case "FILL_SINGLE": {
        newState.tables[state.activeTable].vals.forEach((_, i) => {
          if (!newState.tables[state.activeTable].enabled) return;
          newState.tables[state.activeTable].vals[i] = Math.floor(
            Math.random() * 9,
          );
        });
        break;
      }
      case "CLEAR_ALL": {
        newState.tables.forEach((table) => {
          table.vals.forEach((_item, idx) => {
            table.vals[idx] = -1;
          });
        });

        break;
      }
      case "CLEAR_SINGLE": {
        newState.tables[state.activeTable].vals.forEach(
          (_, i) => (newState.tables[state.activeTable].vals[i] = -1),
        );
        break;
      }
      case "UPDATE_TABLE": {
        if (newState.tables[action.payload].enabled)
          newState.activeTable = action.payload;
        break;
      }
      case "INC_TABLE": {
        newState.activeTable =
          newState.activeTable + 1 > 4 &&
          state.tables[newState.activeTable].enabled
            ? 0
            : newState.activeTable + 1;
        break;
      }
      case "UPDATE_INPUT": {
        newState.tables[state.activeTable].activeInput = action.payload;
        break;
      }
      case "INC_INPUT": {
        const currentInput = state.tables[state.activeTable].activeInput;
        newState.tables[state.activeTable].activeInput =
          currentInput + 1 > 2 ? 0 : currentInput + 1;
        break;
      }
      case "DEC_INPUT": {
        const currentInput = state.tables[state.activeTable].activeInput;
        newState.tables[state.activeTable].activeInput =
          currentInput - 1 < 0 ? 2 : currentInput - 1;
        break;
      }
      case "SET_ACTIVE_TABLES": {
        newState.tables.forEach((table, idx) => {
          if (idx > action.payload) {
            newState.tables[idx].enabled = false;
            table.vals.forEach(
              (_val, i) => (newState.tables[idx].vals[i] = -1),
            );
          } else {
            newState.tables[idx].enabled = true;
          }
        });
        break;
      }
      case "UPDATE_INPUT_VALUE": {
        if (!newState.tables[state.activeTable].enabled) break;

        const currentTable = state.tables[state.activeTable];
        const currentVal = currentTable.vals[currentTable.activeInput];

        if (currentVal === action.payload) {
          newState.tables[newState.activeTable].vals[currentTable.activeInput] =
            -1;
        } else {
          newState.tables[newState.activeTable].vals[currentTable.activeInput] =
            action.payload;
        }
        break;
      }
      case "UPDATE_INVEST": {
        newState.investment = action.payload;
        break;
      }
      case "UPDATE_LOTT": {
        newState.lotteries = action.payload;
        break;
      }
      default:
        return state;
    }
    return newState;
  }

  return [state, dispatch];
}
