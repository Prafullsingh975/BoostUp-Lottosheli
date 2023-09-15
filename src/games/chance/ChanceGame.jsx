import { useEffect, useState } from "react";
import useChanceState from "./useChanceState";
import KeyPad from "./KeyPad";
import Table from "./Table";
import ChanceForm from "./ChanceForm";

export default function ChanceGame() {
  const [state, dispatch] = useChanceState();
  const [pay, setPay] = useState(90);

  useEffect(() => {
    const currentPay = state.fees * state.lotteries * state.participationAmount;
    setPay(currentPay);
  }, [state]);

  return (
    <main className="flex justify-center">
      <div className="flex w-[900px] gap-4 rounded-bl-2xl rounded-br-2xl bg-gray-200 p-8 pt-0">
        <ChanceForm state={state} dispatch={dispatch} pay={pay} />
        <Table state={state} dispatch={dispatch} />
        <KeyPad state={state} dispatch={dispatch} />
      </div>
    </main>
  );
}
