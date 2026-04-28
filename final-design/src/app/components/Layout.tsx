import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
}
