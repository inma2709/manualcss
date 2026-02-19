import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { initSubmenuPositioning } from "../utils/submenuPositioning";

const linkClass = ({ isActive }) => "topnav-link" + (isActive ? " active" : "");
const subLinkClass = ({ isActive }) => "submenu-link" + (isActive ? " active" : "");


export default function TopNav() {
  const location = useLocation();

  // Inicializar posicionamiento inteligente de submenús (fixed sobre el viewport)
  useEffect(() => {
    const cleanup = initSubmenuPositioning();
    return cleanup;
  }, []);

  // Cerrar submenús cuando cambie la ruta
  useEffect(() => {
    // Cerrar todos los submenús abiertos
    document.querySelectorAll('.topnav-group[open]').forEach(details => {
      details.open = false;
    });
  }, [location.pathname]);

  return (
    <nav className="topnav" aria-label="Navegación principal">
      <div className="topnav-inner">

        {/* INICIO */}
        <NavLink to="/" className={linkClass}>
          <span aria-hidden="true">🏠</span>
          <span className="label">Inicio</span>
        </NavLink>

        {/* FUNDAMENTOS */}
        <details className="topnav-group">
          <summary className="topnav-link">
            <span aria-hidden="true">🧱</span>
            <span className="label">Fundamentos</span>
          </summary>

          <div className="topnav-submenu" role="menu" aria-label="Submenú Fundamentos">
            <NavLink to="css-introduccion" className={subLinkClass}>Introducción</NavLink>
            <NavLink to="css-interno-externo-1" className={subLinkClass}>CSS interno / externo</NavLink>
            <NavLink to="css-cascada-1" className={subLinkClass}>Cascada y especificidad ⭐</NavLink>
            <NavLink to="css-variables" className={subLinkClass}>Variables CSS</NavLink>
          </div>
        </details>

        {/* SELECTORES */}
        <details className="topnav-group">
          <summary className="topnav-link">
            <span aria-hidden="true">🎯</span>
            <span className="label">Selectores</span>
          </summary>

          <div className="topnav-submenu" role="menu" aria-label="Submenú Selectores">
            <NavLink to="css-selectores-basicos" className={subLinkClass}>Básicos</NavLink>
            <NavLink to="css-selectores-avanzados" className={subLinkClass}>Avanzados</NavLink>
            <NavLink to="css-pseudoclases" className={subLinkClass}>Pseudoclases</NavLink>
            <NavLink to="css-practica-selectores" className={subLinkClass}>Pseudoelementos</NavLink>
             <NavLink to="css-inline" className={subLinkClass}>Practica guiada ⭐</NavLink>
          </div>
        </details>
        
          <details className="topnav-group">
          <summary className="topnav-link">
            <span aria-hidden="true">🍀</span>
            <span className="label">Aspectos visuales</span>
          </summary>

          <div className="topnav-submenu" role="menu" aria-label="Submenú Layout">
             <NavLink to="css-interno-externo-2" className={subLinkClass}>Base</NavLink>
            <NavLink to="css-cascada-2" className={subLinkClass}>Color</NavLink>
            <NavLink to="css-devtools" className={subLinkClass}>Fuentes ⭐</NavLink>
            
          </div>
        </details>

        {/* LAYOUT */}
        <details className="topnav-group">
          <summary className="topnav-link">
            <span aria-hidden="true">📐</span>
            <span className="label">Layout</span>
          </summary>

          <div className="topnav-submenu" role="menu" aria-label="Submenú Layout">
            
            <NavLink to="css-box-model" className={subLinkClass}>Box model</NavLink>
            <NavLink to="css-texto-1" className={subLinkClass}>Position y Display</NavLink>
            <NavLink to="css-flexbox-1" className={subLinkClass}>Flexbox</NavLink>
            <NavLink to="css-grid-1" className={subLinkClass}>Grid</NavLink>
            <NavLink to="css-grid-areas" className={subLinkClass}>Grid Areas ⭐</NavLink>
          </div>
        </details>


        {/* COMPONENTES */}
        <details className="topnav-group">
          <summary className="topnav-link">
            <span aria-hidden="true">🧩</span>
            <span className="label">Componentes</span>
          </summary>

          <div className="topnav-submenu" role="menu" aria-label="Submenú Componentes">
            <NavLink to="css-botones-vinculos" className={subLinkClass}>Botones y vínculos</NavLink>
            <NavLink to="css-navbar" className={subLinkClass}>Navegación</NavLink>
            <NavLink to="css-tablas" className={subLinkClass}>Tablas</NavLink>
            <NavLink to="css-formularios" className={subLinkClass}>Formularios</NavLink>
            <NavLink to="css-modales" className={subLinkClass}>Modales y diálogos</NavLink>
            <NavLink to="css-overlays" className={subLinkClass}>Overlays (tooltips, popovers)</NavLink>
          </div>
        </details>

        {/* RESPONSIVE */}
        <details className="topnav-group">
          <summary className="topnav-link">
            <span aria-hidden="true">📱</span>
            <span className="label">Responsive</span>
          </summary>

          <div className="topnav-submenu" role="menu" aria-label="Submenú Responsive">
            <NavLink to="css-media-queries" className={subLinkClass}>Media queries</NavLink>
            <NavLink to="css-responsive-layout" className={subLinkClass}>Layout responsive</NavLink>
            <NavLink to="css-accesibilidad" className={subLinkClass}>Accesibilidad</NavLink>
          </div>
        </details>

        {/* EXTRA */}
        <details className="topnav-group">
          <summary className="topnav-link">
            <span aria-hidden="true">🚀</span>
            <span className="label">Extra</span>
          </summary>

          <div className="topnav-submenu" role="menu" aria-label="Submenú Extra">
            <NavLink to="css-sass" className={subLinkClass}>SASS</NavLink>
            <NavLink to="css-bootstrap" className={subLinkClass}>Bootstrap</NavLink>
          </div>
        </details>

       
      </div>
    </nav>
  );
}
