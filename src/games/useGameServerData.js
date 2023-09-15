import axios from "axios";
import { useEffect, useState } from "react";

export default function useGameServerData() {
  const [activeGames, setActiveGames] = useState([]);

  const fetchActiveGames = async () => {
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
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchActiveGames();
  }, []);

  return { activeGames, setActiveGames };
}
