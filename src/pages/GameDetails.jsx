import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState();

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(
          `https://cc11-179-125-116-27.ngrok-free.app/games/${id}`,
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );
        console.log(response);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setGame(data);
        console.log(data);
      } catch (error) {
        console.log("Error loading game details:", error);
      }
    };

    fetchGameDetails();
  }, [id]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-5/6 min-h-5/6 flex flex-col border-4 border-purple rounded-3xl">
        <h1 className="text-purple text-12xl font-bold my-8 text-center">
          Game
        </h1>
        <div className="w-5/6 mx-auto bg-white mb-16 flex flex-col rounded-2xl ">
          {game ? (
            <div className="flex ">
              <img
                src={game.imgUrl}
                alt="Game Cover"
                className="mb-8 max-w-[500px] p-4"
              />
              <div className="flex flex-col">
                <span className="mt-8 m-4 text-2xl font-semibold">
                  {game.year}
                </span>
                <span className="m-4 text-5xl font-bold text-purple">
                  {game.title}
                </span>
                <span className="m-4 font-semibold text-xl">{game.genre}</span>
                <span className="m-4 text-2xl font-semibold">
                  Plataformas: {game.platforms}
                </span>
                <span className="m-4 text-2xl">Avaliação: {game.score}</span>
              </div>
            </div>
          ) : (
            <span className="">Loading...</span>
          )}
          {game ? (
            <span className="text-xl m-4 p-4">{game.longDescription}</span>
          ) : (
            <span className="">Loading...</span>
          )}

          <div className="flex flex-row justify-center m-6">
            <Link
              to="/lists"
              className="w-1/3 flex justify-center items-center bg-gradient-to-r from-[#700FC1] to-[#7e31bd] rounded-xl px-12
              py-2 mt-8 text-2xl font-bold text-[#FFF] transition-transform hover:scale-105"
            >
              Explorar Jogos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameDetails;
