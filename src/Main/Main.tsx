import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Test from "../Pages/Test";

export default function Main() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}
