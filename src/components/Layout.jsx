import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import TopNav from "./TopNav";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <header className="topbar">
        <div className="topbar-inner">
          <Topbar />
        </div>

        <TopNav />
      </header>

      <main id="contenido" className="content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}