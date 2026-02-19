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

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
