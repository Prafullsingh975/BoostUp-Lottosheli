import { useEffect, createContext } from "react";
import useRegularState from "./useRegularState";
import Keypad from "./Keypad";
import Table from "./Table";
import Form from "./Form";
import RegularNav from "./RegularLottoNav";

export const RegularLottoContext = createContext();

export default function RegularLotto() {
  const [state, dispatch] = useRegularState();

  useEffect(() => {
    console.log(state.focusedTableAndRow);
  }, [state]);

  return (
    <main className="flex flex-col">
      <RegularLottoContext.Provider value={{ state, dispatch }}>
        <RegularNav />
        <div className="flex items-start gap-3 rounded-bl-2xl rounded-br-2xl bg-gray-200 p-6 pt-0">
          <Form />
          <Table />
          <Keypad />
        </div>
      </RegularLottoContext.Provider>
    </main>
  );
}
