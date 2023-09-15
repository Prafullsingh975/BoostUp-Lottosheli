import { useReducer } from "react";

function sortCallback(a, b) {
  if (a && b) return a - b;
  else if (a === 0) return 1;
  else return -1;
}

function getRandomFilledTableRow() {
  const set = new Set();
  while (set.size < 6) set.add(Math.ceil(Math.random() * 37));
  return Array.from(set).sort(sortCallback);
}

function reducer(state, { type, payload }) {
  switch (type) {
    case "CLEAR_ALL": {
      const tablesCopy = JSON.parse(JSON.stringify(state.tables));
      for (const table in state.tables) {
        if (state.tables[table].enabled) {
          tablesCopy[table].strong = [0, 0];
          tablesCopy[table].normal = [
            new Array(6).fill(0),
            new Array(6).fill(0),
          ];
        }
      }
      return {
        ...state,
        tables: tablesCopy,
      };
    }
    case "FILL_ALL": {
      const emptyTableCopy = JSON.parse(JSON.stringify(state.tables));
      for (const table in state.tables) {
        if (state.tables[table].enabled) {
          emptyTableCopy[table].strong = [
            Math.ceil(Math.random() * 7),
            Math.ceil(Math.random() * 7),
          ];
          emptyTableCopy[table].normal = [
            getRandomFilledTableRow(),
            getRandomFilledTableRow(),
          ];
        }
      }
      return {
        ...state,
        tables: emptyTableCopy,
      };
    }
    case "UPDATE_ACTIVE_TABLE": {
      const stateCopy = JSON.parse(JSON.stringify(state));
      for (let table in state.tables) {
        if (
          +table > +payload &&
          (state.tables[table].normal[0].some((val) => val !== 0) ||
            state.tables[table].normal[1].some((val) => val !== 0) ||
            state.tables[table].strong[0] !== 0 ||
            state.tables[table].strong[1] !== 0)
        ) {
          return state;
        }
      }
      for (let key in state.tables) {
        if (Number(key) > Number(payload)) {
          stateCopy.tables[key].enabled = false;
          stateCopy.tables[key].strong = [0, 0];
          stateCopy.tables[key].normal = [
            new Array(6).fill(0),
            new Array(6).fill(0),
          ];
        } else {
          stateCopy.tables[key].enabled = true;
        }
      }
      if (payload < state.focusedTableAndRow[0]) {
        stateCopy.focusedTableAndRow[0] = Number(payload);
        stateCopy.focusedTableAndRow[1] = 1;
      }
      stateCopy.activeTable = Number(payload);
      return stateCopy;
    }
    case "UPDATE_FOCUS": {
      const [table, _row] = payload;
      if (state.tables[table].enabled) {
        return {
          ...state,
          focusedTableAndRow: payload,
        };
      }
      return state;
    }
    case "UPDATE_NORMAL_VAL": {
      const stateCopy = JSON.parse(JSON.stringify(state));
      const newTables = stateCopy.tables;
      const currentTable =
        newTables[state.focusedTableAndRow[0]].normal[
          state.focusedTableAndRow[1]
        ];

      if (currentTable.includes(payload)) {
        const idx = currentTable.findIndex((i) => i === payload);
        currentTable[idx] = 0;
      } else {
        let count = 0;
        for (let item of currentTable) if (item !== 0) count++;
        if (count >= 6) return state;
        currentTable[currentTable.length - 1] = payload;
      }

      currentTable.sort(sortCallback);
      return stateCopy;
    }
    case "UPDATE_STRONG_VAL": {
      const stateCopy = JSON.parse(JSON.stringify(state));
      const newTables = stateCopy.tables;
      let currentStrong =
        newTables[stateCopy.focusedTableAndRow[0]].strong[
          stateCopy.focusedTableAndRow[1]
        ];
      newTables[stateCopy.focusedTableAndRow[0]].strong[
        stateCopy.focusedTableAndRow[1]
      ] = currentStrong === payload ? 0 : payload;
      return stateCopy;
    }
    case "CLEAR_FOCUSED_TABLE": {
      const stateCopy = JSON.parse(JSON.stringify(state));
      const newTables = stateCopy.tables;
      const currentTable = newTables[stateCopy.focusedTableAndRow[0]];

      const focusedRow = +stateCopy.focusedTableAndRow[1];

      currentTable.strong[focusedRow] = 0;
      currentTable.normal[focusedRow] = new Array(6).fill(0);

      if (
        stateCopy.focusedTableAndRow[0] < 14 &&
        stateCopy.tables[stateCopy.focusedTableAndRow[0]].enabled
      ) {
        if (stateCopy.focusedTableAndRow[1] === 1) {
          if (stateCopy.tables[stateCopy.focusedTableAndRow[0] + 2].enabled)
            stateCopy.focusedTableAndRow[0] += 2;
          else {
            stateCopy.focusedTableAndRow[0] = 2;
          }
          stateCopy.focusedTableAndRow[1] = 0;
        } else {
          stateCopy.focusedTableAndRow[1] = 1;
        }
      } else if (
        stateCopy.focusedTableAndRow[0] === 14 &&
        stateCopy.focusedTableAndRow[1] === 0
      ) {
        stateCopy.focusedTableAndRow = [14, 1];
      } else {
        stateCopy.focusedTableAndRow = [2, 0];
      }

      return stateCopy;
    }
    case "FILL_FOCUSED_TABLE": {
      const stateCopy = JSON.parse(JSON.stringify(state));
      const newTables = stateCopy.tables;
      const currentTable = newTables[stateCopy.focusedTableAndRow[0]];

      const focusedRow = +stateCopy.focusedTableAndRow[1];

      currentTable.strong[focusedRow] = Math.ceil(Math.random() * 7);
      currentTable.normal[focusedRow] = getRandomFilledTableRow();

      if (
        state.focusedTableAndRow[0] < 14 &&
        state.tables[state.focusedTableAndRow[0]].enabled
      ) {
        if (state.focusedTableAndRow[1] === 1) {
          if (stateCopy.tables[stateCopy.focusedTableAndRow[0] + 2].enabled)
            stateCopy.focusedTableAndRow[0] += 2;
          else {
            stateCopy.focusedTableAndRow[0] = 2;
          }
          stateCopy.focusedTableAndRow[1] = 0;
        } else {
          stateCopy.focusedTableAndRow[1] = 1;
        }
      } else if (
        state.focusedTableAndRow[0] === 14 &&
        state.focusedTableAndRow[1] === 0
      ) {
        stateCopy.focusedTableAndRow = [14, 1];
      } else {
        stateCopy.focusedTableAndRow = [2, 0];
      }

      return stateCopy;
    }
    case "UPDATE_LOTTERY":
      return {
        ...state,
        lottery: payload,
      };
    case "UPDATE_DOUBLE":
      return {
        ...state,
        double: payload,
      };
    case "TOGGLE_EXTRA":
      return {
        ...state,
        extra: !state.extra,
      };
    default:
      return state;
  }
}

export default function useRegularState() {
  return useReducer(reducer, {
    lottery: 1,
    extra: false,
    double: false,
    activeTable: 2,
    focusedTableAndRow: [2, 0],
    fee: 99.6,
    tables: {
      2: {
        enabled: true,
        strong: [0, 0],
        normal: [new Array(6).fill(0), new Array(6).fill(0)],
      },

      4: {
        enabled: true,
        strong: [0, 0],
        normal: [new Array(6).fill(0), new Array(6).fill(0)],
      },

      6: {
        enabled: true,
        strong: [0, 0],
        normal: [new Array(6).fill(0), new Array(6).fill(0)],
      },

      8: {
        enabled: true,
        strong: [0, 0],
        normal: [new Array(6).fill(0), new Array(6).fill(0)],
      },

      10: {
        enabled: true,
        strong: [0, 0],
        normal: [new Array(6).fill(0), new Array(6).fill(0)],
      },

      12: {
        enabled: true,
        strong: [0, 0],
        normal: [new Array(6).fill(0), new Array(6).fill(0)],
      },

      14: {
        enabled: true,
        strong: [0, 0],
        normal: [new Array(6).fill(0), new Array(6).fill(0)],
      },
    },
  });
}

// prettier-ignore
export const actions = {
  FILL_ALL            : "FILL_ALL",
  CLEAR_ALL           : "CLEAR_ALL",
  UPDATE_FOCUS        : "UPDATE_FOCUS",
  TOGGLE_EXTRA        : "TOGGLE_EXTRA",
  UPDATE_DOUBLE       : "UPDATE_DOUBLE",
  UPDATE_LOTTERY      : "UPDATE_LOTTERY",
  UPDATE_NORMAL_VAL   : "UPDATE_NORMAL_VAL",
  UPDATE_STRONG_VAL   : "UPDATE_STRONG_VAL",
  FILL_FOCUSED_TABLE  : "FILL_FOCUSED_TABLE",
  CLEAR_FOCUSED_TABLE : "CLEAR_FOCUSED_TABLE",
  UPDATE_ACTIVE_TABLE : "UPDATE_ACTIVE_TABLE",
};

Object.freeze(actions);
