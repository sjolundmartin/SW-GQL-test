import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Test from "../Pages/MovieList";

export default function Main() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/movies" element={<Test />} />
    </Routes>
  );
}
