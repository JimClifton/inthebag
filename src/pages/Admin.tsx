import { useEffect, useState } from "react";
import Header from "../components/Header";
import { IPlayer } from "../types/player";

function App() {
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [driver, setDriver] = useState("");

  const loadPlayers = async () => {
    try {
      const res = await fetch("/api/players");
      const players = await res.json();
      setPlayers(players);
    } catch (error) {
      console.error(error);
    }
  };

  const submitPlayer = async (e: any) => {
    e.preventDefault();
    try {
      await fetch("/api/players", {
        method: "POST",
        body: JSON.stringify({
          name,
          image,
          driver,
        }),
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadPlayers();
  }, []);

  return (
    <div>
      <Header />
      <main className="container mx-auto px-5">
        <h1 className="my-5 text-xl">Admin</h1>
        {players.map((player: IPlayer) => (
          <div key={player.name}>{player.name}</div>
        ))}
        <hr />
        <h2 className="text-lg my-5">Create New Player</h2>
        <form onSubmit={submitPlayer}>
          <div className="mb-5">
            <div className="my-2">
              <label htmlFor="name" className="mr-5">
                Player Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-slate-400 border-2 p-1"
              />
            </div>
            <div className="my-2">
              <label htmlFor="image" className="mr-5">
                Player Image URL
              </label>
              <input
                id="image"
                type="text"
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="border-slate-400 border-2 p-1"
              />
            </div>
            <div className="my-2">
              <label htmlFor="driver" className="mr-5">
                Driver
              </label>
              <input
                id="driver"
                type="text"
                name="driver"
                value={driver}
                onChange={(e) => setDriver(e.target.value)}
                className="border-slate-400 border-2 p-1"
              />
            </div>
          </div>
          <button
            className="rounded-lg text-sm font-semibold p-3 bg-slate-600 text-white"
            type="submit"
          >
            Create
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
