import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Test from "../Pages/MovieList";
import OpeningCrawl from "../Pages/OpeningCrawl";

export default function Main() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/movies" element={<Test />} />
      <Route path="/movies/:id" element={<OpeningCrawl />} />
    </Routes>
  );
}
