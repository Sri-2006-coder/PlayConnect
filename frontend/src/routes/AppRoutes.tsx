import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateMatch from "../pages/CreateMatch";
import Matches from "../pages/Matches";
import MatchDetails from "../pages/MatchDetails";
export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/matches" element={<Matches />} />
      <Route path="/login" element={<Login />} />
      <Route path="/match/:id" element={<MatchDetails />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create-match" element={<CreateMatch />} />

    </Routes>
  );
}