import { Link } from "react-router-dom";
import Quiz from "../components/Quiz";

export default function V12_Variables_CSS_CustomProperties() {
  return (
    <div className="doc">
      {/* HERO */}
      <section className="card hero">
        <p className="doc-kicker">Variables CSS</p>
        <h1>Custom Properties: variables reales en CSS</h1>
        <p className="doc-lead">
          Las variables en CSS (también llamadas <strong>custom properties</strong>)
          te permiten definir valores una vez y reutilizarlos en todo tu proyecto.
          Lo potente es que <strong>participan en la cascada y la herencia</strong>,
          así que puedes crear temas, componentes y sistemas de diseño con lógica
          profesional.
        </p>

       
      </section>

      {/* INTRO */}
      <section className="card">
        <h2>Por qué este tema es un salto a nivel profesional</h2>

        <p>
          Cuando un proyecto crece, lo normal es repetir valores: colores, espacios,
          tamaños de fuente, sombras… Si cambias un color “marca” y está escrito 40 veces,
          es cuestión de tiempo que algo se quede mal.
        </p>

        <p>
          Las <strong>CSS Variables</strong> solucionan ese problema de raíz: centralizan
          valores, mejoran mantenimiento y te abren la puerta a <strong>temas (light/dark)</strong>,
          variantes por componente y personalización en tiempo real.
        </p>

        <div className="callout tip">
          Objetivo del tema: que puedas construir un “mini sistema de diseño” con variables,
          sin duplicar valores y entendiendo exactamente qué ocurre con cascada y herencia.
        </div>
      </section>

    {/* CONCEPTOS CLAVE (ANTES DE ESCRIBIR CÓDIGO) */}
<section className="card">
  <h2>Conceptos clave (los 5 que debes dominar)</h2>

  <details className="dd" open>
    <summary>1) Qué es una custom property</summary>
    <div className="dd-body">
      <p>
        Una <strong>custom property</strong> (también llamada <em>variable CSS</em>) es una propiedad
        definida por el desarrollador cuyo nombre comienza por <code>--</code>.
        A diferencia de las propiedades CSS clásicas (<code>color</code>, <code>margin</code>, etc.),
        su valor no tiene significado por sí mismo: <strong>sirve para guardar información reutilizable</strong>.
      </p>

      <p>
        Se declara como cualquier propiedad CSS y se utiliza mediante la función
        <code>var()</code>. El navegador sustituye <code>var(--nombre)</code> por el valor real
        en tiempo de ejecución.
      </p>

      <pre>
        <code>{`:root{
  --brand: #4f46e5;
  --space: 1rem;
}

body{
  color: var(--brand);
  padding: var(--space);
}`}</code>
      </pre>

      <div className="callout">
        Regla fundamental: <strong>--nombre</strong> para definir,
        <strong>var(--nombre)</strong> para usar.
      </div>

      <div className="callout tip">
        Las custom properties <strong>no son constantes</strong>: pueden cambiar según el contexto,
        la cascada o incluso con JavaScript.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>2) Cascada y herencia con variables</summary>
    <div className="dd-body">
      <p>
        El verdadero poder de las variables CSS está en que <strong>participan en la cascada</strong>
        y <strong>se heredan</strong>, igual que otras propiedades como <code>color</code> o
        <code>font-family</code>.
      </p>

      <p>
        Esto significa que puedes definir una variable de forma global y luego
        <strong>sobrescribirla localmente</strong> sin afectar al resto del documento.
      </p>

      <pre>
        <code>{`:root{ --accent: #06b6d4; }

.card{ --accent: #d12bc9; }

.card p{ color: var(--accent); }`}</code>
      </pre>

      <div className="callout tip">
        El navegador busca el valor de la variable siguiendo la cascada:
        primero en el propio elemento, luego en sus padres y finalmente en <code>:root</code>.
      </div>

      <div className="callout">
        Este comportamiento es lo que hace posibles sistemas de diseño, temas y componentes reutilizables.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>3) Scope: dónde “vive” una variable</summary>
    <div className="dd-body">
      <p>
        El <strong>scope</strong> de una variable es el conjunto de elementos donde esa variable existe.
        Una custom property vive:
      </p>

      <ul>
        <li>En el selector donde se declara</li>
        <li>En todos sus elementos descendientes (por herencia)</li>
      </ul>

      <p>
        Esto te permite crear <strong>contextos visuales independientes</strong> sin duplicar CSS.
      </p>

      <pre>
        <code>{`.panel{
  --bg: #0f172a;
  --text: #ffffff;
  background: var(--bg);
  color: var(--text);
}`}</code>
      </pre>

      <div className="callout">
        Piensa en cada contenedor como un “micro-entorno”: lo que declares ahí
        solo afecta a lo que hay dentro.
      </div>

      <div className="callout tip">
        Este patrón es la base de los <strong>temas (dark / light)</strong> y de los
        componentes con estilos encapsulados.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>4) Fallback: qué pasa si la variable no existe</summary>
    <div className="dd-body">
      <p>
        CSS permite definir un <strong>valor de reserva</strong> (fallback) por si una variable
        no está definida o no es válida. Se escribe como segundo parámetro de <code>var()</code>.
      </p>

      <pre>
        <code>{`.badge{
  background: var(--badge-bg, #e2e8f0);
  color: var(--badge-text, #0f172a);
}`}</code>
      </pre>

      <p>
        Si <code>--badge-bg</code> existe, se usa. Si no, el navegador aplica el color de reserva.
      </p>

      <div className="callout warn">
        Si no hay fallback y la variable no existe, el navegador puede ignorar
        completamente esa declaración.
      </div>

      <div className="callout tip">
        Buen hábito profesional: usa fallbacks en variables críticas
        (colores, fondos, tipografía).
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>5) Variables CSS ≠ preprocesadores (Sass, Less)</summary>
    <div className="dd-body">
      <p>
        Aunque se parecen en sintaxis, las variables CSS <strong>no son lo mismo</strong>
        que las variables de Sass o Less.
      </p>

      <ul>
        <li>Las variables CSS existen <strong>en el navegador</strong></li>
        <li>Participan en la cascada y la herencia</li>
        <li>Pueden cambiar en tiempo real</li>
      </ul>

      <p>
        Las variables de Sass, en cambio, se resuelven <strong>antes</strong> de llegar al navegador
        y desaparecen al compilar.Es el CSS lo que llega al navegador, sin variables.
      </p>

      <div className="callout">
        Las custom properties son parte del estándar CSS moderno y funcionan sin herramientas externas.
      </div>

     
    </div>
  </details>
</section>


     

      {/* DOCUMENTACIÓN */}
      <section className="card">
        <h2>Documentación oficial recomendada (MDN y W3C)</h2>

        <p>
          Esta guía de MDN explica de forma clara cómo funcionan las custom properties y su relación con
          cascada/herencia:
        </p>

        <div className="doc-link-card">
          <a
            href="https://developer.mozilla.org/es/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties"
            target="_blank"
            rel="noreferrer"
          >
            📘 MDN — Using custom properties (cascading variables)
          </a>
          <p className="doc-link-card__desc">
            Lectura imprescindible para reforzar: definición, herencia, overrides, fallbacks y uso real.
          </p>
        </div>
        <li className="bonus-links__item">
  <a
    className="bonus-links__link"
    href="https://www.w3schools.com/css/css_specificity.asp"
    target="_blank"
    rel="noreferrer"
  >
    <span className="bonus-links__name">W3Schools · CSS Specificity</span>
    <span className="bonus-links__desc">
      Explicación clara de cómo el navegador decide qué regla CSS “gana” cuando
      varias coinciden: orden de importancia, especificidad y ejemplos rápidos.
      Útil como chuleta mientras practicas selectores.
    </span>
  </a>
</li>


        <div className="callout tip">
          Acostumbrate a leer documentación oficial: MDN es una referencia excelente y gratuita.W3c también tiene guías muy buenas y además permite probar código en su editor online.
        </div>
      </section>

      {/* VÍDEO (con tu estilo resource-section) */}
      <section className="resource-section resource-videos">
        <header className="resource-section__head">
          <h2 className="resource-section__title">Vídeo recomendado: Variables CSS (Custom Properties)</h2>
          <p className="resource-section__lead">
            Este vídeo te ayuda a visualizar el flujo completo: cómo definir variables, cómo se usan y
            por qué cambian la forma de organizar un CSS real (temas, componentes y mantenimiento).
          </p>
        </header>

        <div className="resource-grid">
          <article className="resource-card is-featured">
            <div className="resource-card__media">
              <iframe
                className="media-video"
                width="100%"
                height="180"
                src="https://www.youtube.com/embed/FDgRCI-2YJA"
                title="Variables CSS (Custom Properties)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            <div className="resource-card__body">
              <p className="resource-card__kicker">CSS · Variables</p>
              <h3 className="resource-card__name">Cómo usar variables en CSS de forma profesional</h3>
              <p className="resource-card__desc">
                Espera ver: definición en <code>:root</code>, reutilización con <code>var()</code>, overrides por componente,
                fallbacks y un enfoque claro para temas (modo oscuro / marca).
              </p>
              <p className="resource-card__meta">
                Recomendado tras: cascada, herencia y especificidad. Ideal antes de meterte con diseño responsive y componentes.
              </p>

              <div className="resource-card__actions">
                <a
                  className="btn btn-primary"
                  href="https://www.youtube.com/watch?v=FDgRCI-2YJA"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver en YouTube
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* EJEMPLOS (PROGRESIVOS) */}
      <section className="card">
        <h2>Ejemplos progresivos (de básico a pro)</h2>

        <details className="dd" open>
          <summary>Ejemplo 1 — Tokens globales en :root (base de un sistema)</summary>
          <div className="dd-body">
            <p>
              Esto es lo más típico: declarar “tokens” de diseño (colores, espacios, radios) en <code>:root</code>.
            </p>

            <pre>
              <code>{`:root{
  --brand: #4f46e5;
  --brand-2: #06b6d4;
  --ink: #0f172a;
  --muted: #334155;

  --radius: 14px;
  --shadow: 0 10px 24px rgba(0,0,0,.08);

  --space-1: .5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;
}

.card-demo{
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: var(--space-2);
  color: var(--ink);
}`}</code>
            </pre>

            <div className="callout tip">
              Cuando necesites cambiar la identidad visual, cambias variables, no 200 reglas sueltas.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Ejemplo 2 — Overwrite por componente (misma UI, otro “tema”)</summary>
          <div className="dd-body">
            <p>
              Definimos variables globales y luego redefinimos valores dentro de un componente.
            </p>

            <pre>
              <code>{`:root{ --accent:#4f46e5; }

.card{
  --accent:#06b6d4; /* override local */
  border-left: 6px solid var(--accent);
  padding: 1rem;
}

.card h3{ color: var(--accent); }`}</code>
            </pre>

            <div className="callout">
              Esta es la base de los “design systems”: misma estructura, diferentes variantes.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Ejemplo 3 — Modo oscuro con una clase en body</summary>
          <div className="dd-body">
            <p>
              Definimos variables para modo claro y las cambiamos con una clase. Es limpio, escalable y muy profesional.
            </p>

            <pre>
              <code>{`:root{
  --bg: #f8fafc;
  --text: #0f172a;
  --card: #ffffff;
}

body{
  background: var(--bg);
  color: var(--text);
}

body.theme-dark{
  --bg: #0b1220;
  --text:#e5e7eb;
  --card:#0f172a;
}`}</code>
            </pre>

            <div className="callout tip">
              El truco es que no cambias 20 reglas: cambias 3 variables y todo responde.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Ejemplo 4 — Fallbacks y robustez</summary>
          <div className="dd-body">
            <p>
              Siempre que una variable pueda faltar (o sea opcional), usa fallback.
            </p>

            <pre>
              <code>{`.tag{
  background: var(--tag-bg, rgba(79,70,229,.10));
  color: var(--tag-text, #0f172a);
  padding: .25rem .5rem;
  border-radius: 999px;
}`}</code>
            </pre>

            <div className="callout warn">
              Fallback = menos “misterios” cuando algo no está definido.
            </div>
          </div>
        </details>
      </section>

   {/* EJERCICIOS */}
<section className="card">
  <h2>Ejercicios (práctica real)</h2>

  <p>
    Hazlos en tu proyecto o en CodePen. Trabaja siempre así:
    <strong> cambia una cosa, guarda, observa y explica qué ha pasado</strong>.
  </p>

  <ol>
    <li>
      <strong>Primeras variables:</strong><br />
      En <code>:root</code> define estas variables:
      <ul>
        <li><code>--color-main</code></li>
        <li><code>--color-text</code></li>
        <li><code>--space</code></li>
      </ul>
      Úsalas en <code>body</code> para el color del texto y el padding.
    </li>

    <li>
      <strong>Una tarjeta sencilla:</strong><br />
      Crea una clase <code>.card-demo</code> que use solo variables:
      fondo, color de texto y padding.
      Duplica la tarjeta dos veces en el HTML y comprueba que todas se ven iguales.
    </li>

    <li>
      <strong>Cambio global:</strong><br />
      Cambia <strong>solo</strong> los valores de las variables en <code>:root</code>.
      Observa cómo cambian todas las tarjetas sin tocar las reglas de <code>.card-demo</code>.
    </li>

    <li>
      <strong>Variantes por contexto:</strong><br />
      Crea una segunda tarjeta con la clase
      <code>.card-demo highlight</code>.
      En <code>.highlight</code> redefine una variable de color
      y observa cómo solo afecta a esa tarjeta.
    </li>

    <li>
      <strong>Valor de reserva (fallback):</strong><br />
      En una propiedad usa:
      <code>var(--color-border, black)</code>.
      Prueba a borrar la variable y comprueba qué color se aplica.
    </li>
  </ol>

  <div className="callout tip">
    Método de aprendizaje: <strong>predice → prueba → explica</strong>.
    Si sabes explicar por qué ha cambiado algo, lo has entendido.
  </div>
</section>

      {/* TEST INTERACTIVO */}
      <Quiz
        title="Test interactivo — Variables CSS"
        lead="Responde razonando. Si dudas, vuelve a los ejemplos y explica el porqué."
        passingScore={0.7}
        questions={[
          {
            id: "v1",
            text: "¿Cómo se declara una variable CSS válida?",
            options: [
              { key: "A", label: "@var main: blue;" },
              { key: "B", label: "--main: blue;" },
              { key: "C", label: "$main: blue;" },
            ],
            correct: "B",
            explain: "Las custom properties se declaran con prefijo --."
          },
          {
            id: "v2",
            text: "¿Cómo se usa una variable CSS dentro de una propiedad?",
            options: [
              { key: "A", label: "use(--main)" },
              { key: "B", label: "var(--main)" },
              { key: "C", label: "get(--main)" },
            ],
            correct: "B",
            explain: "Se accede con la función var(--nombre)."
          },
          {
            id: "v3",
            text: "¿Dónde se suelen definir variables globales del proyecto?",
            options: [
              { key: "A", label: ":root" },
              { key: "B", label: "html body *" },
              { key: "C", label: "Solo en cada componente" },
            ],
            correct: "A",
            explain: ":root es un lugar típico para tokens globales."
          },
          {
            id: "v4",
            text: "¿Qué tiene de especial una CSS variable frente a una variable de Sass?",
            options: [
              { key: "A", label: "Sass es dinámica en el navegador, CSS no" },
              { key: "B", label: "CSS variables pueden cambiar por cascada/herencia en runtime" },
              { key: "C", label: "Son exactamente lo mismo" },
            ],
            correct: "B",
            explain: "CSS variables existen en el navegador y reaccionan a cascada/herencia/DOM."
          },
          {
            id: "v5",
            text: "Si redefino --accent dentro de .card, ¿qué ocurre?",
            options: [
              { key: "A", label: "Solo cambia dentro de .card y sus hijos" },
              { key: "B", label: "Cambia en toda la página" },
              { key: "C", label: "No se aplica porque las variables no heredan" },
            ],
            correct: "A",
            explain: "Por alcance y herencia, afecta al contenedor y descendientes."
          },
          {
            id: "v6",
            text: "¿Para qué sirve el fallback en var(--x, fallback)?",
            options: [
              { key: "A", label: "Para que la propiedad funcione aunque falte la variable" },
              { key: "B", label: "Para aumentar especificidad" },
              { key: "C", label: "Para acelerar el render" },
            ],
            correct: "A",
            explain: "Evita valores inválidos cuando la variable no está definida."
          },
          {
            id: "v7",
            text: "¿Cuál es un uso profesional típico de variables CSS?",
            options: [
              { key: "A", label: "Repetir colores en cada selector" },
              { key: "B", label: "Crear temas (light/dark) redefiniendo variables" },
              { key: "C", label: "Evitar la herencia" },
            ],
            correct: "B",
            explain: "Temas y design tokens son un caso de uso estrella."
          },
        ]}
      />

      {/* CIERRE */}
      <section className="card">
        <h2>Cierre</h2>
        <p>
          Si a partir de ahora te acostumbras a pensar en <strong>tokens</strong> y <strong>variables</strong>,
          tu CSS será más limpio, escalable y mantenible. Este tema conecta directamente con
          componentes, layouts y responsive.
        </p>

        <div className="callout tip">
          Consejo final: no “guardes” variables solo para colores. Úsalas también para espacios, radios,
          sombras y tamaños. Ahí es donde tu CSS empieza a parecer profesional.
        </div>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="/css-texto-1" className="btn">
            Volver a Texto
          </Link>
          <Link to="/css-box-model" className="btn btn-primary">
            Continuar: Box Model
          </Link>
        </div>
      </section>

    </div>
  );
}