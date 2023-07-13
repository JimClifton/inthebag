import Header from "../components/Header";
import PlayerList from "../components/PlayerList";
import PlayerDetails from "../components/PlayerDetails";
import { useState } from "react";
import { IPlayer } from "../types/player";

function Home() {
  const [selectedPlayer, setSelectedPlayer] = useState({});
  const [showSelectedPlayer, setShowSelectedPlayer] = useState(false);

  const selectPlayer = (player: IPlayer) => {
    setSelectedPlayer(player);
    setShowSelectedPlayer(true);
  };

  const handleClose = () => {
    setShowSelectedPlayer(false);
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto px-5">
        <PlayerList selectPlayer={selectPlayer} />
        <PlayerDetails
          selectedPlayer={selectedPlayer}
          showSelectedPlayer={showSelectedPlayer}
          handleClose={handleClose}
        />
      </main>
    </div>
  );
}

export default Home;
