import { Link } from "react-router-dom";
import Timer from "./components/Timer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [activeGames, setActiveGames] = useState([]);
  const [bannerDetails, setBannerDetails] = useState({});

  //Api Calls
  const fetchActiveGames = async () => {
    // console.log(loginData);
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const { data } = await axios.get(
        `http://localhost:5050/api/game/active-game`,
        config,
      );
      setActiveGames(data);
      console.log(data);
      setBannerDetails(
        data?.find(
          (game) => game.gameType === "Lotto" && game.gameName === "Strong",
        ),
      );
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  useEffect(() => {
    fetchActiveGames();
  }, []); 

  return (
    <main className="relative isolate flex flex-col items-center bg-[#f5f5f5]">
      <img
        className="absolute top-0 -z-10 mr-20 w-4/5"
        src="dots_background.jpg"
        alt=""
      />
      <div className="mt-6 grid max-w-5xl gap-4">
        {/* Banner */}
        {bannerDetails && (
          <div className="flex h-80 rounded-lg border-2 border-gray-400 bg-white p-3">
            <video autoPlay loop muted className="-mr-36 h-full">
              <source src="video.mov" type="video/mp4" />
            </video>
            <div className="bg-grain grid gap-7 bg-red-600 bg-cover p-10 text-white">
              <h1 className="grid gap-3 text-center text-4xl font-bold">
                Tomorrow in the lottery draws
                <span className="flex items-end gap-4 text-2xl">
                  NIS
                  <span className="drop-shadow-strong text-7xl text-[yellow]">
                    {Number(bannerDetails?.winningPrice).toLocaleString("en")}
                  </span>
                  until
                </span>
              </h1>
              <div className="flex items-center justify-center gap-5">
                <Link
                  to="/lotto"
                  className="rounded-lg border-2 border-black bg-yellow-400 px-4 py-2 text-xl text-black hover:bg-yellow-200"
                >
                  Submit a form
                </Link>
                <Timer endTime={bannerDetails.endTime} />
              </div>
            </div>
          </div>
        )}

        <div className="flex items-start justify-center gap-2 overflow-hidden border-t-8 border-t-gray-700 pb-6">
          {activeGames?.map((game) => {
            {
              /* 777 Game Card */
            }
            if (game.gameType === "777" && game.gameName === "Regular")
              return (
                <Link
                  key={game._id}
                  to="/777"
                  className="bg-grain link-card shadow-card flex w-56 flex-col items-center gap-3 rounded-bl-sm rounded-br-sm bg-pink-700 p-4 text-white outline outline-2 outline-offset-8 outline-gray-300"
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className=" text-2xl font-bold">777</span>
                    <span>until</span>
                    <span>
                      NIS
                      <span className="drop-shadow-strong text-3xl font-bold">
                        {game.winningPrice.toLocaleString("en")}
                      </span>
                    </span>
                    <span>twice a day</span>
                  </div>
                  <div className="mx-auto w-fit rounded border-2 border-black bg-yellow-400 px-3 pb-1 text-xl text-black hover:bg-yellow-200">
                    play
                  </div>
                </Link>
              );
            {
              /* Lotto Game Card */
            }
            if (game.gameType === "Lotto" && game.gameName === "Strong") {
              return (
                <Link
                  key={game._id}
                  to="/lotto"
                  className="bg-grain link-card shadow-card flex w-56 flex-col items-center gap-20 rounded-bl-sm rounded-br-sm bg-[#4b60c2] p-4 text-white outline outline-2 outline-offset-8 outline-gray-300"
                >
                  <div className="flex flex-col items-center gap-4 text-center">
                    <span className=" text-2xl font-bold">
                      {" "}
                      Systematic lottery{" "}
                    </span>
                    <span>More chances to win</span>
                    <span>
                      NIS
                      <span className="drop-shadow-strong text-3xl font-bold">
                        {game.winningPrice.toLocaleString("en")}
                      </span>
                    </span>
                  </div>
                  <div className="mx-auto w-fit rounded border-2 border-black bg-yellow-400 px-3 pb-1 text-xl text-black hover:bg-yellow-200">
                    play
                  </div>
                </Link>
              );
            }

            {
              /* 123 Game Card */
            }
            if (game.gameType === "123" && game.gameName === "123")
              return (
                <Link
                  key={game._id}
                  to="/123"
                  className="bg-grain link-card shadow-card flex w-56 flex-col items-center gap-8 rounded-bl-sm rounded-br-sm bg-cyan-600 p-4 text-white outline outline-2 outline-offset-8 outline-gray-300"
                >
                  <div className="flex flex-col items-center gap-3">
                    <span className=" text-2xl font-bold">Lottery 123</span>
                    <span>The easy way to double an investment</span>
                    <span>
                      up to NIS
                      <span className="drop-shadow-strong text-3xl font-bold">
                        {game.winningPrice.toLocaleString("en")}
                      </span>
                    </span>
                    <span>Every day</span>
                  </div>
                  <div className="mx-auto w-fit rounded border-2 border-black bg-yellow-400 px-3 pb-1 text-xl text-black hover:bg-yellow-200">
                    play
                  </div>
                </Link>
              );
            {
              /* Systematic Game Card */
            }
            if (game.gameType === "Systematic" && game.gameName === "Chance")
              return (
                <Link
                  key={game._id}
                  to="/chance"
                  className="bg-grain link-card shadow-card flex w-56 flex-col items-center gap-20 rounded-bl-sm rounded-br-sm bg-green-700 p-4 text-white outline outline-2 outline-offset-8 outline-gray-300"
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-2xl font-bold">Chance</span>
                    <span>until</span>
                    <span>
                      NIS
                      <span className="drop-shadow-strong text-3xl font-bold">
                        {game.winningPrice.toLocaleString("en")}
                      </span>
                    </span>
                    <span>every two hours</span>
                    <Timer />
                  </div>
                  <div className="mx-auto w-fit rounded border-2 border-black bg-yellow-400 px-3 pb-1 text-xl text-black hover:bg-yellow-200">
                    play
                  </div>
                </Link>
              );
          })}
        </div>
      </div>
      <p className="mt-20 grid max-w-xl pb-10">
        <span className="mb-3 block text-4xl text-blue-600">
          How to fill a lottery
        </span>
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>
            The lottery is among the most beloved and popular games in Israel.
          </font>
          <font style={{ verticalAlign: "inherit" }}>
            For many, the lottery gives the feeling that there is a chance to
            get rich overnight.
          </font>
          <font style={{ verticalAlign: "inherit" }}>
            In fact, the more practical chance is to win intermediate prizes or
            different amounts in the many games that the lotto offers.
          </font>
          <font style={{ verticalAlign: "inherit" }}>
            The lottery is a very popular game where the rules of the game are
            simple and easy to follow.
          </font>
        </font>
        <br />
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>
            In the lottery game, seven numbers are drawn from an automatic
            machine, six of which are regular numbers and the other is a number
            known as a strong number.
          </font>
          <font style={{ verticalAlign: "inherit" }}>
            In order to win the entire amount correctly, no less than seven
            numbers must be guessed.
          </font>
          <font style={{ verticalAlign: "inherit" }}>
            In order to participate in the lottery, you must fill out a
            dedicated form that includes 14 different tables.
          </font>
          <font style={{ verticalAlign: "inherit" }}>
            The participant can choose how many games he wants to participate in
            when the choice ranges from 2-14.
          </font>
          <font style={{ verticalAlign: "inherit" }}>
            You can choose by multiples of pairs.
          </font>
        </font>
        <br />
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>
            In each of the tables you will find two cubes where the left cube
            includes all the digits from 1 to 37 while the right cube contains
            the digits from 1 to 7. Fully filling out the form includes marking
            6 numbers in the left cube and one strong number in the right cube.
          </font>
        </font>
        <br />
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>
            In fact, many develop different methods for filling out the form and
            choosing the numbers according to a certain method.
          </font>
          <font style={{ verticalAlign: "inherit" }}>
            These can be the dates of people close to them, birthday dates of
            relatives and friends, wedding dates and more.
          </font>
          <font style={{ verticalAlign: "inherit" }}>
            There are those who fill in fixed numbers in each form again and
            some who fill in the lottery with completely arbitrary numbers.
          </font>
          <font style={{ verticalAlign: "inherit" }}>
            In fact there is even an option to let an automatic machine fill out
            the form.
          </font>
        </font>
        <br />
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>
            The first prize in the lottery is in extremely high amounts and
            gives the winners a real opportunity to change their lives.
          </font>
          <font style={{ verticalAlign: "inherit" }}>
            But at the same time, the participants in the game can enjoy
            additional and smaller winning amounts, they are secondary prizes
            awarded to those filling out a form who manage to guess at least
            three numbers.
          </font>
          <font style={{ verticalAlign: "inherit" }}>
            The greater the number of numbers we guessed correctly, the more
            significant the prize received for them.
          </font>
        </font>
        <br />
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>
            The first lottery was held in 1968 and since then the lottery has
            been a part of many people&apos;s lives.
          </font>
          <font style={{ verticalAlign: "inherit" }}>
            Among the variety of games that exist today, the lottery is among
            the ones that offer the biggest prizes and the only one that opens
            the door to a significant profit of impressive sums.
          </font>
          <font style={{ verticalAlign: "inherit" }}>
            The draws are held so that guessing 6 numbers correctly gives the
            participant the entire amount.
          </font>
        </font>
        <br />
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>
            It is true that the strong number, which is the seventh number in
            every lottery, must be filled in, but nevertheless it is possible to
            win the lottery even if only six numbers are filled in and the
            strong number is not guessed correctly.
          </font>
          <font style={{ verticalAlign: "inherit" }}>
            The lottery draw takes place twice a week and sometimes also on
            Thursdays.
          </font>
          <font style={{ verticalAlign: "inherit" }}>
            The draws and their results can be seen live on Channel 10 and even
            on the Internet.
          </font>
        </font>
        <br />
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>
            The first prize in the lottery draw is at least 4 million shekels,
            while the double lottery, the double lottery, is worth 8 million
            shekels.
          </font>
          <font style={{ verticalAlign: "inherit" }}>
            The second prize is half a million and will be accumulated for the
            next draw if there is no winner.
          </font>
        </font>
      </p>
    </main>
  );
}
