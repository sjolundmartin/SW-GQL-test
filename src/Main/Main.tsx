import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import MovieList from "../Pages/MovieList";
import OpeningCrawl from "../Pages/OpeningCrawl";
import Login from "../Pages/Login";

export default function Main() {
  return (
    <Routes>
      <Route path="*" element={<div>Page not found</div>} />
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/movies" element={<MovieList />} />
      <Route path="/movies/:id" element={<OpeningCrawl />} />
    </Routes>
  );
}
