import { useState, useEffect } from "react";

export default function Timer({ endTime }) {
  const [timer, setTimer] = useState("00:00:00");

  useEffect(() => {
    const endMils = new Date(endTime).getTime();

    setInterval(() => {
      const currMils = new Date().getTime();
      const diffMils = endMils - currMils;

      let days = Math.floor(diffMils / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (diffMils % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let minutes = Math.floor((diffMils % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((diffMils % (1000 * 60)) / 1000);

      days = days < 10 ? `0${days}` : days;
      hours = hours < 10 ? `0${hours}` : hours;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      let currTimer;

      if (days) {
        currTimer = `${days}:${hours}:${minutes}:${seconds}`;
      } else {
        currTimer = `${hours}:${minutes}:${seconds}`;
      }

      setTimer(currTimer);
    }, 1000);
  }, [endTime]);

  return (
    <div>
      <h2 className="flex gap-2 font-bold">
        {timer.split(":").map((el, idx) => (
          <span
            key={`1XEFD34${idx}`}
            className="-mb-1 flex flex-col text-center text-xs font-semibold"
          >
            <span
              className="relative rounded py-1 pl-4 text-pink-800
            before:absolute before:bottom-0 before:left-0 before:top-0 before:w-[47%] before:rounded before:bg-gradient-to-b before:from-slate-200 before:from-50% before:to-white before:to-50% before:content-['']
            after:absolute after:bottom-0 after:right-0 after:top-0 after:w-[47%] after:rounded after:bg-gradient-to-b after:from-slate-200 after:from-50% after:to-white after:to-50% after:content-['']"
            >
              <span className="relative z-10 -mx-2 text-center text-xl tracking-[1rem]">
                {el}
              </span>
            </span>
            <span>
              {idx === 0 ? "hours" : idx === 1 ? "minutes" : "seconds"}
            </span>
          </span>
        ))}
      </h2>
    </div>
  );
}
