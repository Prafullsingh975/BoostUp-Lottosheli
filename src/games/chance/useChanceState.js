import { useReducer } from "react";

function getTotalFilledTables(tables) {
  let ans = 0;
  for (const table in tables)
    if (tables[table].some((val) => val !== -1)) ans += 1;
  return ans;
}

function sortAccordingToDeckOfCards(table) {
  const theRightOrder = [7, 8, 9, 10, "J", "Q", "K", "A", -1];
  table.sort((a, b) => theRightOrder.indexOf(a) - theRightOrder.indexOf(b));
}

function getRandomCardsArray() {
  const cards = [7, 8, 9, 10, "J", "Q", "K", "A"];
  const set = new Set();
  while (set.size < 4) {
    set.add(cards[Math.floor(Math.random() * cards.length)]);
  }
  const res = Array.from(set);
  sortAccordingToDeckOfCards(res);
  return res;
}

function reducer(state, action) {
  switch (action.type) {
    case "CLEAR":
      return {
        ...state,
        tables: {
          spade: [-1, -1, -1, -1],
          heart: [-1, -1, -1, -1],
          diamond: [-1, -1, -1, -1],
          club: [-1, -1, -1, -1],
        },
      };
    case "FILL": {
      const stateCopy = JSON.parse(JSON.stringify(state));
      for (const [index, [key, _value]] of Object.entries(
        Object.entries(stateCopy.tables),
      )) {
        if (index >= state.gameType) break;
        stateCopy.tables[key] = getRandomCardsArray();
      }

      return stateCopy;
    }
    case "UPDATE_GAME_TYPE": {
      if (getTotalFilledTables(state.tables) > action.payload) {
        return {
          ...state,
          gameType: action.payload,
          isSpecial: false,
          tables: {
            spade: [-1, -1, -1, -1],
            heart: [-1, -1, -1, -1],
            diamond: [-1, -1, -1, -1],
            club: [-1, -1, -1, -1],
          },
        };
      } else {
        return {
          ...state,
          isSpecial: false,
          gameType: action.payload,
        };
      }
    }
    case "UPDATE_SPECIAL": {
      return {
        ...state,
        gameType: 4,
        isSpecial: action.payload,
      };
    }
    case "INSERT_VALUE": {
      const { deck, val } = action.payload;
      const currTable = [...state.tables[deck]];

      if (currTable.includes(val)) currTable[currTable.indexOf(val)] = -1;
      else {
        let fillCount = 0;
        for (const item of currTable) if (item !== -1) fillCount += 1;
        if (fillCount >= 4) return state;

        currTable[3] = val;
      }

      sortAccordingToDeckOfCards(currTable);

      const stateCopy = JSON.parse(JSON.stringify(state));
      stateCopy.tables[deck] = currTable;

      const curretFilledTables = getTotalFilledTables(stateCopy.tables);
      stateCopy.gameType =
        state.gameType < curretFilledTables
          ? curretFilledTables
          : state.gameType;

      return stateCopy;
    }
    case "UPDATE_LOTTERIES": {
      return {
        ...state,
        lotteries: action.payload,
      };
    }
    case "UPDATE_PARTICIPATION": {
      return {
        ...state,
        participationAmount: action.payload,
      };
    }
    default:
      return state;
  }
}

export default function useChanceState() {
  const [state, dispatch] = useReducer(reducer, {
    lotteries: 1,
    gameType: 1,
    isSpecial: false,
    participationAmount: 5,
    fees: 1.29,

    tables: {
      spade: [-1, -1, -1, -1],
      heart: [-1, -1, -1, -1],
      diamond: [-1, -1, -1, -1],
      club: [-1, -1, -1, -1],
    },
  });

  return [state, dispatch];
}

// prettier-ignore
export const actionTypes = {
	FILL								 : 'FILL',
	CLEAR								 : 'CLEAR',
	INSERT_VALUE				 : 'INSERT_VALUE',
	UPDATE_SPECIAL			 : 'UPDATE_SPECIAL',
	UPDATE_GAME_TYPE		 : 'UPDATE_GAME_TYPE',
	UPDATE_LOTTERIES		 : 'UPDATE_LOTTERIES',
	UPDATE_PARTICIPATION : 'UPDATE_PARTICIPATION',
};

Object.freeze(actionTypes);
