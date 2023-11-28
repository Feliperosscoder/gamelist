import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Games = () => {
  const { id } = useParams();

  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          `https://cc11-179-125-116-27.ngrok-free.app/lists/${id}/games`,
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
        setGames(data);
      } catch (error) {
        console.error("Error loading games:", error);
      }
    };

    fetchGames();
  }, [id]);
  return (
    <div className="w-full min-h-screen flex justify-center items-center text-center">
      <div className="w-5/6 min-h-5/6 flex flex-col border-4 border-purple rounded-3xl">
        <h1 className="text-purple text-12xl font-bold mt-8 text-center">
          Game Category
        </h1>
        <div className=" flex flex-grow justify-center items-center">
          <ul className="w-5/6">
            {games.map((game) => (
              <div className="mx-auto bg-[#FFF] my-6 rounded-xl" key={game.id}>
                  <Link to={`/games/${game.id}`} className="flex">
                  <img src={game.imgUrl} alt="" className="mr-8 max-w-[500px] rounded-l-xl" />
                  <div className="flex flex-col text-start">
                    <span className="font-bold mt-8 text-4xl ">{game.title}</span>
                    <span className="flex mt-12 text-2xl pr-6">{game.shortDescription}</span>
                    <span className="flex text-2xl font-semibold mt-auto mb-8">{game.year}</span>
                  </div>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Games;
