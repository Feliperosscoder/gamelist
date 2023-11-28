import React from "react";
import { Link } from "react-router-dom";
import Image from "../img/img.png";
function Welcome() {
  return (
    <div className="w-full h-screen flex justify-center items-center text-center">
      <div className="w-5/6 h-5/6 flex flex-row justify-center items-center gap-x-24 border-4 border-purple rounded-2xl">
        <div className="flex flex-col items-center justify-center w-1/2">
          <h1 className="text-12xl font-extrabold text-purple mb-12">
            BEM-VINDO A SUA <br /> LISTA DE JOGOS
          </h1>
          <p className="text-3xl font-semibold text-center text-[#FFF]">
            Descubra e explore uma lista incrível de jogos!
          </p>
          <p className="text-3xl font-semibold text-center text-[#FFF]">
            Ordene suas lista conforme sua opção!
          </p>
          <Link
            to="/lists"
            className="flex justify-center items-center bg-gradient-to-r from-[#700FC1] to-[#7e31bd] border-4 border-[#111] rounded-xl px-12 py-2 mt-8 text-2xl font-bold text-[#FFF] transition-transform hover:scale-110"
          >
            Explorar Jogos
          </Link>
        </div>
        <img src={Image} alt="img" className="w-1/2 h-4/5" />
      </div>
    </div>
  );
}

export default Welcome;
