import { useEffect, useState } from "react";
import { IPlayer } from "../types/player";

function PlayerList(props: { selectPlayer: Function }) {
  const { selectPlayer } = props;
  const [players, setPlayers] = useState([]);

  const loadPlayers = async () => {
    try {
      const res = await fetch("/api/players");
      const players = await res.json();
      setPlayers(players);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadPlayers();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {players.map((player: IPlayer) => (
          <div
            onClick={() => selectPlayer(player)}
            key={player.name}
            className="rounded-lg border border-slate-300 overflow-hidden cursor-pointer"
          >
            <img
              src={player.image}
              alt={player.name}
              className="player-image"
            />
            <h4 className="text-lg my-3 p-4">{player.name}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default PlayerList;
