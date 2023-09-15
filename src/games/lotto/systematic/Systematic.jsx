import Form from "./Form";
import Keypad from "./Keypad";
import SystematicNav from "./SystematicNav";
import Table from "./Table";
import useSystematicState from "./useSystematicState";
import { createContext, useEffect } from "react";

export const SystematicContext = createContext();

export default function Systematic() {
  const [state, dispatch] = useSystematicState();

  useEffect(() => {
    console.log(state.table);
  }, [state]);

  return (
    <main className="flex justify-center">
      <div className="flex w-fit flex-col">
        <SystematicContext.Provider value={{ state, dispatch }}>
          <SystematicNav />
          <div className="flex items-start gap-3 rounded-bl-2xl rounded-br-2xl bg-gray-200 p-6 pt-0">
            <Form />
            <Table />
            <Keypad />
          </div>
        </SystematicContext.Provider>
      </div>
    </main>
  );
}
