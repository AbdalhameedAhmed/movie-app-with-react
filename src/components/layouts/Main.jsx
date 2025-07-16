import { Outlet } from "react-router";
import Navbar from "../Navbar";
export default function MainLayout() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
}
