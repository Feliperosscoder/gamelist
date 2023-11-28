import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Categories from './pages/Categories';
import Games from './pages/Games';
import GameDetails from './pages/GameDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="box-border text-poppins bg-[#111] min-h-screen w-screen">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/lists" element={<Categories/>} />
        <Route path={`/lists/:id/games`} element={<Games/>} />
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;