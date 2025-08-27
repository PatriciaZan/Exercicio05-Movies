import NavBar from "../components/NavBar";

import Movieslist from "../components/MoviesList";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <p>Cinema</p>
      <NavBar />

      <Outlet />
    </div>
  );
}
