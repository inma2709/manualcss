import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="doc">
      {/* FOTO (usa el estilo .media que ya tenéis) */}
      <figure className="media">
        <img
          src="/css.png"
          alt="Portada del Manual CSS @Inma Contreras"
          width="500"
          height="320"
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          Manual de CSS creado por Inma Contreras (@inmaco) para aprender CSS
          desde cero
        </figcaption>
      </figure>
{/* HISTORIA Y EVOLUCIÓN DE CSS */}
<section className="card">
  <h2>¿Qué es CSS y por qué existe?</h2>

  <p>
    CSS (<strong>Cascading Style Sheets</strong>) es el lenguaje encargado de
    definir la <strong>presentación visual</strong> de los documentos HTML:
    colores, tipografías, espacios, distribución y comportamiento visual en
    diferentes dispositivos.
  </p>

  <p>
    Mientras que HTML describe la <strong>estructura y el significado</strong>
    del contenido, CSS se encarga de <strong>cómo se ve</strong>. Esta
    separación no es casual: responde a una necesidad histórica y técnica.
  </p>

  <div className="callout tip">
    HTML dice <em>qué es</em> el contenido. CSS decide <em>cómo se muestra</em>.
  </div>
</section>

<section className="card">
  <h2>El origen de CSS: resolver un problema real</h2>

  <p>
    En los primeros años de la web (principios de los 90), el diseño se hacía
    directamente en HTML: etiquetas como <code>&lt;font&gt;</code>,
    <code>&lt;center&gt;</code> o atributos como <code>bgcolor</code> mezclaban
    contenido y presentación.
  </p>

  <p>
    El resultado era un código difícil de mantener, poco accesible y
    prácticamente imposible de reutilizar. Cada cambio visual obligaba a
    modificar decenas de páginas.
  </p>

  <p>
    En 1996, el W3C publica la primera especificación de CSS con un objetivo
    claro:
  </p>

  <ul>
    <li>Separar estructura y presentación</li>
    <li>Facilitar el mantenimiento de los sitios web</li>
    <li>Permitir estilos reutilizables</li>
    <li>Dar control visual sin romper el HTML</li>
  </ul>

  <div className="callout">
    CSS no surge para “hacer cosas bonitas”, sino para hacer la web sostenible
    a largo plazo.
  </div>
</section>

<section className="card">
  <h2>La evolución de CSS: de lo básico a sistemas de diseño</h2>

  <p>
    CSS ha evolucionado durante décadas. No es un lenguaje estático, sino un
    sistema vivo que se adapta a nuevas necesidades: dispositivos móviles,
    accesibilidad, diseño complejo y rendimiento.
  </p>

  <details className="dd">
    <summary>Principales hitos en la evolución de CSS</summary>
    <div className="dd-body">
      <ul>
        <li>
          <strong>CSS1 (1996)</strong>: colores, fuentes, márgenes básicos.
        </li>
        <li>
          <strong>CSS2 / CSS2.1</strong>: posicionamiento, z-index, media types.
        </li>
        <li>
          <strong>CSS3</strong>: transición a módulos independientes
          (flexbox, animaciones, gradientes, etc.).
        </li>
        <li>
          <strong>CSS moderno</strong>: Grid, variables, funciones avanzadas,
          diseño responsivo nativo.
        </li>
      </ul>

      <div className="callout tip">
        CSS ya no se publica como “versiones”, sino como módulos que evolucionan
        de forma independiente.
      </div>
    </div>
  </details>
</section>

<section className="card">
  <h2>¿Por qué surge SASS?</h2>

  <p>
    A medida que los proyectos crecían, CSS empezó a mostrar ciertas
    limitaciones prácticas: repetición de valores, archivos largos, dificultad
    para organizar el código y ausencia de lógica.
  </p>

  <p>
    Para resolver estos problemas aparece <strong>SASS</strong>, un
    preprocesador de CSS que añade características que el CSS original no
    tenía.
  </p>

  <details className="dd">
    <summary>Qué aporta SASS frente a CSS tradicional</summary>
    <div className="dd-body">
      <ul>
        <li>Variables reutilizables</li>
        <li>Anidamiento de selectores</li>
        <li>Funciones y mixins</li>
        <li>División de archivos (partials)</li>
        <li>Mejor organización del código</li>
      </ul>

      <div className="callout">
        Durante años, SASS cubrió carencias importantes del CSS estándar.
      </div>
    </div>
  </details>

  <div className="callout warn">
    SASS no sustituye a CSS: lo amplía. El navegador nunca interpreta SASS,
    solo CSS compilado.
  </div>
</section>

<section className="card">
  <h2>CSS moderno: muchas ideas de SASS ya son nativas</h2>

  <p>
    En los últimos años, CSS ha incorporado de forma nativa muchas de las
    características que hicieron popular a SASS.
  </p>

  <details className="dd">
    <summary>Avances clave del CSS actual</summary>
    <div className="dd-body">
      <ul>
        <li>Variables CSS (<code>--custom-properties</code>)</li>
        <li>
          Layouts complejos con <strong>Flexbox</strong> y{" "}
          <strong>Grid</strong>
        </li>
        <li>Funciones como <code>calc()</code>, <code>clamp()</code></li>
        <li>Media queries avanzadas</li>
        <li>Mejor soporte para accesibilidad</li>
        <li>Animaciones y transiciones optimizadas</li>
      </ul>

      <div className="callout tip">
        Hoy se puede hacer CSS potente sin depender siempre de preprocesadores.
      </div>
    </div>
  </details>
</section>

<section className="card">
  <h2>Últimas novedades y hacia dónde va CSS</h2>

  <p>
    CSS sigue evolucionando activamente. Algunas de las novedades más
    relevantes apuntan a un CSS más inteligente, más modular y más cercano a
    los sistemas de diseño.
  </p>

  <details className="dd">
    <summary>Novedades recientes y en adopción</summary>
    <div className="dd-body">
      <ul>
        <li><strong>Container Queries</strong></li>
        <li><strong>:has()</strong> (selectores relacionales)</li>
        <li>Subgrid</li>
        <li>Funciones de color avanzadas</li>
        <li>Mejor control tipográfico</li>
      </ul>

      <div className="callout">
        CSS ya no es solo “estilos”: es una herramienta de diseño completa.
      </div>
    </div>
  </details>
</section>

<section className="card">
  <h2>Ideas claves </h2>

  <p>
    CSS no es un lenguaje menor ni “solo visual”. Es una pieza central del
    desarrollo frontend moderno.
  </p>

  <p>
    Entender su historia y su evolución te permite:
  </p>

  <ul>
    <li>Valorar por qué existen ciertas reglas</li>
    <li>Usar herramientas como SASS con criterio</li>
    <li>Aprovechar el CSS moderno sin parches</li>
    <li>Diseñar con mentalidad profesional</li>
  </ul>

  <div className="callout tip">
    Aprender CSS hoy es aprender un sistema maduro, potente y en constante
    evolución.
  </div>
</section>

      {/* HERO */}
      <section className="card hero">
        <p className="doc-kicker">Manual CSS · React</p>
        <h1>CSS: del caos al control visual</h1>
        <p className="doc-lead">
          Este manual no va de memorizar propiedades. Va de{" "}
          <strong>entender cómo piensa CSS</strong> para diseñar interfaces
          claras, accesibles y profesionales.Vamos a intentar que CSS deje de
          ser frustrante y se convierta en una herramienta poderosa pero para ello hay que entender su lógica.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="tema-1" className="btn btn-primary">
            Empezar Tema 1
          </Link>

          <a
            href="https://developer.mozilla.org/es/docs/Web/CSS"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Ver CSS en MDN
          </a>
        </div>
      </section>

      {/* INTRO AMPLIA */}
      <section className="card">
        <h2>Bienvenida/o al Manual de CSS (desde cero hasta nivel profesional)</h2>

        <p>
          Si estás empezando, es normal que CSS parezca “caprichoso”: a veces
          algo se mueve sin sentido, otras no se centra, y en cuanto crece una
          página… aparecen los famosos “parches”.
        </p>

        <p>
          La buena noticia es que CSS <strong>no es magia</strong>. Es un sistema
          con reglas claras. Y cuando entiendes su lógica (cascada, herencia,
          especificidad, flujo del documento y modelos de layout), dejas de
          “probar cosas” y empiezas a <strong>tomar decisiones</strong>.
        </p>

        <div className="callout tip">
          Aquí no vas a memorizar una lista infinita de propiedades: vas a
          aprender a pensar como CSS para construir interfaces sólidas.
        </div>

        <h3>¿Para quién es este manual?</h3>
        <ul>
          <li>
            Para quien empieza desde cero y quiere una base firme, sin lagunas.
          </li>
          <li>
            Para quien ya “ha tocado CSS” pero siente que le falta orden y
            criterio.
          </li>
          <li>
            Para quien quiere llegar a un nivel profesional: escribir CSS limpio,
            mantenible y accesible.
          </li>
        </ul>

        <h3>Cómo vamos a aprender</h3>
        <p>
          Vamos a comenzar por lo más básico (selectores, caja, tipografía y
          color) y avanzaremos paso a paso hacia lo más potente (layouts con
          Flexbox y Grid, responsive, variables, arquitectura de CSS, buenas
          prácticas y patrones reales).
        </p>

        <p>
          Cada tema combina <strong>teoría clara</strong> con{" "}
          <strong>práctica constante</strong>. La idea es que entiendas el porqué
          de cada decisión, lo pruebes, lo rompas, lo arregles… y lo interiorices.
        </p>

        <ul>
          <li>✔️ Explicaciones progresivas (de lo simple a lo complejo)</li>
          <li>✔️ Ejemplos reales y comentados</li>
          <li>✔️ Ejercicios guiados para practicar de verdad</li>
          <li>✔️ Tests para comprobar lo aprendido</li>
          <li>✔️ Vídeos y recursos para ampliar y reforzar</li>
        </ul>

        <div className="callout">
          No buscamos “que funcione”. Buscamos que entiendas{" "}
          <strong>por qué funciona</strong> y cómo repetirlo en cualquier
          proyecto.
        </div>

        <h3>Objetivo final</h3>
        <p>
          Al terminar, tendrás una base sólida para maquetar interfaces con
          confianza, leer y mejorar CSS ajeno, evitar reglas duplicadas, y
          construir estilos coherentes que escalen cuando el proyecto crece.
        </p>

       <div className="callout warn">
  Aviso honesto: CSS no es fácil. A veces se tiene la sensación de que no es
  importante, que basta con copiar reglas y ver si “funcionan”.  
  La realidad es otra: CSS se domina con práctica. Y con una buena guía y
  constancia, deja de ser frustrante y se convierte en una herramienta
  poderosa.
</div>


        <p>
          Si estás lista/o para pasar del “CSS me vuelve loca/o” al “sé lo que
          estoy haciendo”, empieza por el Tema 1 y vamos paso a paso. 💪
        </p>
      </section>

      {/* DETAILS 1 */}
      <details className="dd" open>
        <summary>Cómo está organizado cada tema</summary>
        <div className="dd-body">
          <p>Cada tema sigue siempre la misma estructura:</p>
          <ol>
            <li>Explicación clara y progresiva</li>
            <li>Ejemplos comentados</li>
            <li>Ejercicios guiados</li>
            <li>Test final para comprobar lo aprendido</li>
          </ol>

          <div className="callout">
            Si entiendes el <strong>por qué</strong>, el <strong>cómo</strong>{" "}
            viene solo.
          </div>
        </div>
      </details>

      {/* DETAILS 2 */}
      <details className="dd">
        <summary>Qué vas a ser capaz de hacer al terminar</summary>
        <div className="dd-body">
          <ul>
            <li>Diseñar layouts sin depender de copiar código</li>
            <li>Leer CSS ajeno y entenderlo</li>
            <li>Evitar “parches” y reglas duplicadas</li>
            <li>Escribir CSS mantenible y ordenado</li>
          </ul>

          <div className="callout warn">
            Advertencia realista: <br />
            CSS no se aprende en un día, pero con práctica constante y una buena guía, es posible dominarlo y utilizarlo para crear diseños web profesionales.
          </div>
        </div>
      </details>
    </div>
  );
}
