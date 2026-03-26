import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

// HOME
import Home from "./pages/Home";

// FUNDAMENTOS
import V01_Introduccion from "./pages/V01_Introduccion";
import V02_InternoExterno_I from "./pages/V02_InternoExterno_I";
import V03_InternoExterno_II from "./pages/V03_InternoExterno_II";
import V04_Inline from "./pages/V04_Inline";

// CASCADA / HERENCIA / ESPECIFICIDAD
import V05_Cascada_Herencia_Especificidad_I from "./pages/V05_Cascada_Herencia_Especificidad_I";
import V06_Cascada_Herencia_Especificidad_II from "./pages/V06_Cascada_Herencia_Especificidad_II";
import V07_DevTools_Depuracion from "./pages/V07_DevTools_Depuracion";

// SELECTORES
import V08_Selectores_Basicos from "./pages/V08_Selectores_Basicos";
import V09_Selectores_Avanzados from "./pages/V09_Selectores_Avanzados";
import V10_Pseudoclases_Pseudoelementos from "./pages/V10_Pseudoclases_Pseudoelementos";
import V10b_Pseudoclases_Funcionales from "./pages/V10b_Pseudoclases_Funcionales";
import V11_Practica_Selectores from "./pages/V11_Practica_Selectores";

// VARIABLES CSS
import V12_Variables_CSS_CustomProperties from "./pages/V12_Variables_CSS_CustomProperties";

// TEXTO Y TIPOGRAFÍA
import V13_Texto_I from "./pages/V13_Texto_I";
import V14_Texto_II from "./pages/V14_Texto_II";
import V15_Tipografia_Legibilidad from "./pages/V15_Tipografia_Legibilidad";

// MODELO DE CAJA Y FLUJO
import V16_BoxModel_BoxSizing from "./pages/V16_BoxModel_BoxSizing";
import V17_Display_Flujo from "./pages/V17_Display_Flujo";
import V18_Overflow_Contencion from "./pages/V18_Overflow_Contencion";

// FLEXBOX Y GRID
import V19_Flexbox_I from "./pages/V19_Flexbox_I";
import V20_Flexbox_II_Alineacion from "./pages/V20_Flexbox_II_Alineacion";
import V21_Grid_I from "./pages/V21_Grid_I";
import V22_Grid_II_Fracciones from "./pages/V22_Grid_II_Fracciones";
import V23_Grid_Areas_Layouts from "./pages/V23_Grid_Areas_Layouts";

// IMÁGENES Y MEDIA
import V24_Imagenes_I from "./pages/V24_Imagenes_I";
import V25_Imagenes_II from "./pages/V25_Imagenes_II";
import V27_Fondos_Gradientes from "./pages/V27_Fondos_Gradientes";

// COMPONENTES
import V28_Vinculos_Botones from "./pages/V28_Vinculos_Botones";
import V29_Barra_Navegacion from "./pages/V29_Barra_Navegacion";
import V30_Tablas from "./pages/V30_Tablas";
import V31_Formularios_Accesibles from "./pages/V31_Formularios_Accesibles";
import V32_Modales from "./pages/V32_Modales";

// POSICIONAMIENTO
import V32_Position_Sticky_Fixed from "./pages/V32_Overlay";
import V33_ZIndex_StackingContext from "./pages/V33_ZIndex_StackingContext";

// RESPONSIVE Y ACCESIBILIDAD
import V34_MediaQueries_MobileFirst from "./pages/V34_MediaQueries_MobileFirst";
import V35_Responsive_Grid_Flex from "./pages/V35_Responsive_Grid_Flex";
import V36_Accesibilidad_CSS from "./pages/V36_Accesibilidad_CSS";

// EXTRA
import V37_SASS_Introduccion from "./pages/V37_SASS_Introduccion";
import V38_Bootstrap_Introduccion from "./pages/V38_Bootstrap_Introduccion";
import V39_Tailwind_Introduccion from "./pages/V39_Tailwind_Introduccion";

// EJERCICIOS
import EjerciciosLanding from "./pages/EjerciciosLanding";
import E01_Tarjeta_Perfil from "./pages/E01_Tarjeta_Perfil";
import E02_Tipografia from "./pages/E02_Tipografia";
import E03_Menu_Hover from "./pages/E03_Menu_Hover";
import E04_Botones from "./pages/E04_Botones";
import E05_Variables_CSS from "./pages/E05_Variables_CSS";
import E06_Flexbox_Centra from "./pages/E06_Flexbox_Centra";
import E07_Galeria_Flex from "./pages/E07_Galeria_Flex";
import E08_Formulario from "./pages/E08_Formulario";
import E09_Grid_Galeria from "./pages/E09_Grid_Galeria";
import E10_Grid_Layout from "./pages/E10_Grid_Layout";
import E11_Bootstrap_Grid from "./pages/E11_Bootstrap_Grid";
import E12_Bootstrap_Navbar from "./pages/E12_Bootstrap_Navbar";
import E13_Bootstrap_Cards from "./pages/E13_Bootstrap_Cards";
import E14_Bootstrap_Forms from "./pages/E14_Bootstrap_Forms";
import E15_Bootstrap_Landing from "./pages/E15_Bootstrap_Landing";
import E16_Grid_Areas from "./pages/E16_Grid_Areas";
import E17_Responsive_MobileFirst from "./pages/E17_Responsive_MobileFirst";
import E18_Tailwind_Hero from "./pages/E18_Tailwind_Hero";
import E19_Tailwind_Grid from "./pages/E19_Tailwind_Grid";
import E20_Portfolio_Final from "./pages/E20_Portfolio_Final";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* HOME */}
        <Route index element={<Home />} />

        {/* FUNDAMENTOS */}
        <Route path="css-introduccion" element={<V01_Introduccion />} />
        <Route path="css-interno-externo-1" element={<V02_InternoExterno_I />} />
        <Route path="css-interno-externo-2" element={<V03_InternoExterno_II />} />
        <Route path="css-inline" element={<V04_Inline />} />

        {/* CASCADA */}
        <Route path="css-cascada-1" element={<V05_Cascada_Herencia_Especificidad_I />} />
        <Route path="css-cascada-2" element={<V06_Cascada_Herencia_Especificidad_II />} />
        <Route path="css-devtools" element={<V07_DevTools_Depuracion />} />

        {/* SELECTORES */}
        <Route path="css-selectores-basicos" element={<V08_Selectores_Basicos />} />
        <Route path="css-selectores-avanzados" element={<V09_Selectores_Avanzados />} />
        <Route path="css-pseudoclases" element={<V10_Pseudoclases_Pseudoelementos />} />
        <Route path="css-pseudoclases-funcionales" element={<V10b_Pseudoclases_Funcionales />} />
        <Route path="css-practica-selectores" element={<V11_Practica_Selectores />} />

        {/* VARIABLES */}
        <Route path="css-variables" element={<V12_Variables_CSS_CustomProperties />} />

        {/* TEXTO */}
        <Route path="css-texto-1" element={<V13_Texto_I />} />
        <Route path="css-texto-2" element={<V14_Texto_II />} />
        <Route path="css-tipografia" element={<V15_Tipografia_Legibilidad />} />

        {/* CAJA Y FLUJO */}
        <Route path="css-box-model" element={<V16_BoxModel_BoxSizing />} />
        <Route path="css-display" element={<V17_Display_Flujo />} />
        <Route path="css-overflow" element={<V18_Overflow_Contencion />} />

        {/* FLEX Y GRID */}
        <Route path="css-flexbox-1" element={<V19_Flexbox_I />} />
        <Route path="css-flexbox-2" element={<V20_Flexbox_II_Alineacion />} />
        <Route path="css-grid-1" element={<V21_Grid_I />} />
        <Route path="css-grid-2" element={<V22_Grid_II_Fracciones />} />
        <Route path="css-grid-areas" element={<V23_Grid_Areas_Layouts />} />

        {/* IMÁGENES */}
        <Route path="css-imagenes-1" element={<V24_Imagenes_I />} />
        <Route path="css-imagenes-2" element={<V25_Imagenes_II />} />
        <Route path="css-fondos" element={<V27_Fondos_Gradientes />} />

        {/* COMPONENTES */}
        <Route path="css-botones-vinculos" element={<V28_Vinculos_Botones />} />
        <Route path="css-navbar" element={<V29_Barra_Navegacion />} />
        <Route path="css-tablas" element={<V30_Tablas />} />
        <Route path="css-formularios" element={<V31_Formularios_Accesibles />} />
        <Route path="css-modales" element={<V32_Modales />} />
        <Route path="css-overlays" element={<V32_Position_Sticky_Fixed />} />

        {/* POSICIONAMIENTO */}
        <Route path="css-position" element={<V32_Position_Sticky_Fixed />} />
        <Route path="css-zindex" element={<V33_ZIndex_StackingContext />} />

        {/* RESPONSIVE */}
        <Route path="css-media-queries" element={<V34_MediaQueries_MobileFirst />} />
        <Route path="css-responsive-layout" element={<V35_Responsive_Grid_Flex />} />
        <Route path="css-accesibilidad" element={<V36_Accesibilidad_CSS />} />

        {/* EXTRA */}
        <Route path="css-sass" element={<V37_SASS_Introduccion />} />
        <Route path="css-bootstrap" element={<V38_Bootstrap_Introduccion />} />
        <Route path="css-tailwind" element={<V39_Tailwind_Introduccion />} />

        {/* EJERCICIOS */}
        <Route path="ejercicios" element={<EjerciciosLanding />} />
        <Route path="ejercicios/e01-tarjeta-perfil" element={<E01_Tarjeta_Perfil />} />
        <Route path="ejercicios/e02-tipografia" element={<E02_Tipografia />} />
        <Route path="ejercicios/e03-menu-hover" element={<E03_Menu_Hover />} />
        <Route path="ejercicios/e04-botones" element={<E04_Botones />} />
        <Route path="ejercicios/e05-variables-css" element={<E05_Variables_CSS />} />
        <Route path="ejercicios/e06-flexbox-basico" element={<E06_Flexbox_Centra />} />
        <Route path="ejercicios/e07-galeria-flex" element={<E07_Galeria_Flex />} />
        <Route path="ejercicios/e08-formulario" element={<E08_Formulario />} />
        <Route path="ejercicios/e09-grid-galeria" element={<E09_Grid_Galeria />} />
        <Route path="ejercicios/e10-grid-layout" element={<E10_Grid_Layout />} />
        <Route path="ejercicios/e11-bootstrap-grid" element={<E11_Bootstrap_Grid />} />
        <Route path="ejercicios/e12-bootstrap-navbar" element={<E12_Bootstrap_Navbar />} />
        <Route path="ejercicios/e13-bootstrap-cards" element={<E13_Bootstrap_Cards />} />
        <Route path="ejercicios/e14-bootstrap-forms" element={<E14_Bootstrap_Forms />} />
        <Route path="ejercicios/e15-bootstrap-landing" element={<E15_Bootstrap_Landing />} />
        <Route path="ejercicios/e16-grid-areas" element={<E16_Grid_Areas />} />
        <Route path="ejercicios/e17-responsive-mobile-first" element={<E17_Responsive_MobileFirst />} />
        <Route path="ejercicios/e18-tailwind-hero" element={<E18_Tailwind_Hero />} />
        <Route path="ejercicios/e19-tailwind-grid" element={<E19_Tailwind_Grid />} />
        <Route path="ejercicios/e20-portfolio-final" element={<E20_Portfolio_Final />} />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
