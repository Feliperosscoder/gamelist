import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          "https://cc11-179-125-116-27.ngrok-free.app/lists",
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
        setCategories(data);
      } catch (error) {
        console.error("Error loading games:", error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center text-center">
      <div className="w-5/6 h-5/6 flex flex-col border-4 border-purple">
        <h1 className="text-purple text-12xl font-bold mt-8 text-center">
          Game Category
        </h1>
        <div className="flex flex-grow justify-center items-center">
          <ul>
            {categories.map((category) => (
              <Link
                to={`${category.id}/games`}
                key={category.id}
                className="block my-16 px-16 py-6 text-6xl font-bold text-white text-center bg-gradient-to-r from-[#700FC1] to-[#7e31bd] rounded-xl transition-transform hover:scale-110"
              >
                <li className="">{category.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;
