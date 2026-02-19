import { useEffect } from "react";

export default function SelectoresBasicos() {
  useEffect(() => {
    document.title = "CSS · Selectores básicos";
  }, []);

  return (
    <main className="doc" id="contenido">
      {/* =========================
          INTRO
      ========================== */}
      <section className="card">
        <h1>CSS · Selectores básicos</h1>
        <p>
          Un <strong>selector</strong> es la “pregunta” que le haces al navegador para decirle{" "}
          <em>a qué elementos</em> debe aplicar unas reglas CSS. Sin selectores, CSS no podría
          “apuntar” a nada: tendrías estilos, pero no sabrías <strong>dónde</strong> aplicarlos.
        </p>

        <div className="callout tip">
          Idea clave: <strong>Selector + Declaraciones</strong> = “A estos elementos aplícales estos estilos”.
        </div>

        {/* HUECO PARA IMAGEN */}
        <figure className="media">
          <img
            src="/selectores.png"
            alt="Esquema visual de selectores CSS"
            width="900"
            height="420"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Imagen: <code>selectores</code> (pon el archivo en <code>public/selectores.png</code>).
          </figcaption>
        </figure>
      </section>

      {/* ESTRUCTURA DE LOS SELECTORES */}
<section className="card">
  <h2>Estructura de los selectores CSS</h2>

  <p>
    Antes de aprender tipos de selectores, es fundamental entender
    <strong> cómo se escriben</strong> y <strong>qué significan</strong>.
    Un selector no es más que una forma de describir
    <em>a qué elementos del HTML queremos aplicar estilos</em>.
  </p>

  <details className="dd" open>
    <summary>1) Estructura básica de una regla CSS</summary>
    <div className="dd-body">
      <p>
        Toda regla CSS sigue siempre la misma estructura:
      </p>

      <pre>
        <code>{`selector {
  propiedad: valor;
  propiedad: valor;
}`}</code>
      </pre>

      <p>
        Donde:
      </p>

      <ul>
        <li><strong>Selector</strong>: indica <em>qué elementos</em> se seleccionan</li>
        <li><strong>Propiedad</strong>: qué aspecto se quiere cambiar</li>
        <li><strong>Valor</strong>: el cambio concreto</li>
      </ul>

      <div className="callout tip">
        Piensa el selector como una pregunta y el bloque como la respuesta visual.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>2) Cómo se lee un selector</summary>
    <div className="dd-body">
      <p>
        Un buen hábito es <strong>leer el selector en voz alta</strong>.
        Eso evita errores y ayuda a entender por qué se aplica (o no) un estilo.
      </p>

      <pre>
        <code>{`.menu a.active{
  color: red;
}`}</code>
      </pre>

      <p>
        Lectura correcta:
        <em>
          “Selecciona los enlaces (<code>a</code>) que están dentro de
          <code>.menu</code> y que además tienen la clase <code>active</code>”.
        </em>
      </p>

      <div className="callout">
        Si no puedes leer el selector con palabras normales, probablemente sea demasiado complejo.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>3) Partes que puede tener un selector</summary>
    <div className="dd-body">
      <p>
        Un selector puede estar formado por una o varias de estas partes:
      </p>

      <ul>
        <li><strong>Etiqueta</strong>: <code>p</code>, <code>h1</code>, <code>button</code></li>
        <li><strong>Clase</strong>: <code>.card</code>, <code>.active</code></li>
        <li><strong>ID</strong>: <code>#header</code></li>
        <li><strong>Combinadores</strong>: espacio, <code>&gt;</code>, <code>+</code></li>
        <li><strong>Pseudoclases</strong>: <code>:hover</code>, <code>:first-child</code></li>
        <li><strong>Pseudoelementos</strong>: <code>::before</code>, <code>::after</code></li>
      </ul>

      <div className="callout tip">
        En los selectores básicos nos centraremos solo en etiqueta, clase, ID y descendientes.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>4) Selectores simples vs selectores compuestos</summary>
    <div className="dd-body">
      <p>
        Un selector puede ser:
      </p>

      <ul>
        <li>
          <strong>Simple</strong>: una sola parte
          <pre><code>{`p
.card
#intro`}</code></pre>
        </li>
        <li>
          <strong>Compuesto</strong>: varias partes combinadas
          <pre><code>{`.menu a
.card .title
button.primary`}</code></pre>
        </li>
      </ul>

      <div className="callout">
        Cuantas más partes tenga un selector, más específico suele ser.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>5) Orden y precisión: lo importante</summary>
    <div className="dd-body">
      <p>
        El orden de las partes del selector <strong>no es aleatorio</strong>.
        CSS se lee de <strong>derecha a izquierda</strong> internamente:
      </p>

      <pre>
        <code>{`.card p.note{}`}</code>
      </pre>

      <p>
        El navegador piensa:
      </p>

      <ol>
        <li>Busca elementos <code>p</code> con clase <code>note</code></li>
        <li>Comprueba si están dentro de <code>.card</code></li>
      </ol>

      <div className="callout warn">
        Selectores largos y enrevesados suelen indicar un HTML o CSS mal estructurado.
      </div>
    </div>
  </details>

  <details className="dd">
    <summary>6) Error común: confundir selector y propiedad</summary>
    <div className="dd-body">
      <p>
        Un error típico al empezar es pensar que cosas como <code>color</code>
        o <code>background</code> son selectores.
      </p>

      <pre>
        <code>{`/* ❌ Incorrecto */
color{
  red: true;
}`}</code>
      </pre>

      <pre>
        <code>{`/* ✅ Correcto */
p{
  color: red;
}`}</code>
      </pre>

      <div className="callout">
        El selector siempre apunta al HTML; las propiedades describen el estilo.
      </div>
    </div>
  </details>
</section>


      {/* =========================
          DOCUMENTACIÓN + VIDEO
      ========================== */}
      <section className="card">
        <h2>Recursos (documentación + vídeo)</h2>

        <ul>
          <li>
            📘 Documentación (W3Schools):{" "}
            <a
              href="https://www.w3schools.com/css/css_selectors.asp"
              target="_blank"
              rel="noreferrer"
            >
              CSS Selectors
            </a>
          </li>
          <li>
            🎥 Vídeo (selectores básicos):{" "}
            <a
              href="https://www.youtube.com/watch?v=o4srpChv-eg"
              target="_blank"
              rel="noreferrer"
            >
              Selectores básicos en CSS
            </a>
          </li>
        </ul>

        <div className="callout">
          Consejo: abre la documentación en una pestaña y el editor en otra. Vas probando cada selector
          y anotando “qué selecciona” y “cuándo usarlo”.
        </div>

        <div className="dd-body" style={{ marginTop: "1rem" }}>
          <div className="callout tip">
            Vamos a ver un vídeo corto que resume los selectores básicos y su funcionamiento.
          </div>

          <div className="media" style={{ maxWidth: 900 }}>
            <iframe
              width="900"
              height="506"
              src="https://www.youtube.com/embed/o4srpChv-eg"
              title="Vídeo: selectores básicos en CSS"
              frameBorder="0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ borderRadius: "0.75rem", width: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* =========================
          CONCEPTO: POR QUÉ + CÓMO
      ========================== */}
      <section className="card">
        <h2>Qué es un selector y cómo funciona</h2>

        <details className="dd" open>
          <summary>1) La estructura de una regla CSS</summary>
          <div className="dd-body">
            <p>
              Una regla CSS se compone de:
              <strong> selector</strong> (a quién) + <strong>bloque de declaraciones</strong> (qué estilos).
            </p>

            <pre>
              <code>{`/* selector */   /* declaraciones */
p{
  color: #0f172a;
  line-height: 1.6;
}`}</code>
            </pre>

            <div className="callout tip">
              Traducción mental: “A <code>todos los &lt;p&gt;</code> aplícales estos estilos”.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>2) ¿Por qué hacen falta?</summary>
          <div className="dd-body">
            <p>
              En una página hay <strong>muchos</strong> elementos. El selector decide con precisión:
            </p>
            <ul>
              <li>si afecta a <strong>todos</strong> (ej: <code>p</code>)</li>
              <li>si afecta a un <strong>grupo</strong> (ej: <code>.card</code>)</li>
              <li>si afecta a un elemento <strong>concreto</strong> (ej: <code>#cabecera</code>)</li>
              <li>si afecta por <strong>posición</strong> (ej: <code>.menu a</code>)</li>
            </ul>

            <div className="callout">
              CSS no “adivina” qué quieres: tú defines el objetivo con selectores.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>3) ¿Cuántos hay?</summary>
          <div className="dd-body">
            <p>
              Hay <strong>muchos</strong> (decenas) entre básicos, combinadores, pseudoclases, pseudoelementos
              y selectores de atributos. Pero el 80% del tiempo dominarás con:
              <strong> etiqueta</strong>, <strong>clase</strong>, <strong>ID</strong>,
              <strong> descendientes</strong> y algunas <strong>pseudoclases</strong>.
            </p>

            <div className="callout tip">
              En este tema nos centramos en los <strong>selectores básicos</strong> (lo mínimo imprescindible).
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          SELECTORES BÁSICOS
      ========================== */}
      <section className="card">
        <h2>Selectores básicos (los imprescindibles)</h2>

        <details className="dd" open>
          <summary>1) Selector de etiqueta (type selector)</summary>
          <div className="dd-body">
            <p>
              Selecciona <strong>todas</strong> las etiquetas de un tipo: <code>p</code>, <code>h1</code>,{" "}
              <code>ul</code>, <code>button</code>…
            </p>

            <pre>
              <code>{`p{ 
  color: #334155;
}`}</code>
            </pre>

            <div className="callout warn">
              Ojo: es muy amplio. Úsalo para estilos generales (tipografía base, márgenes coherentes, etc.).
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>2) Selector de clase (.)</summary>
          <div className="dd-body">
            <p>
              Selecciona elementos que tengan una clase. Es el selector más usado en proyectos porque es
              <strong> reutilizable</strong> y no “ata” el estilo a una etiqueta concreta.
            </p>
            <p>
  A diferencia del <code>id</code>, un <strong>selector de clase</strong>
  (<code>.clase</code>) <strong>sí puede repetirse</strong> tantas veces como sea
  necesario dentro de un documento HTML. Esto permite aplicar un mismo conjunto
  de estilos a varios contenedores que cumplen la misma función o comparten un
  diseño común, como tarjetas, secciones o bloques de contenido. Por ejemplo,
  varios <code>&lt;div&gt;</code> pueden tener la clase <code>card</code> para
  mantener una apariencia coherente en toda la página. Si en alguno de esos
  contenedores se necesita un estilo especial o una variación concreta, se puede
  añadir una segunda clase (por ejemplo <code>card destacada</code>) o utilizar
  un selector más específico que actúe solo sobre los elementos internos de ese
  contenedor, combinando clases y jerarquía para ajustar el diseño sin romper la
  reutilización del estilo base.
</p>


            <pre>
              <code>{`.card-demo{
  padding: 1rem;
  border: 1px solid #cbd5e1;
  border-radius: .75rem;
}`}</code>
            </pre>

            <div className="callout tip">
              Regla pro: si algo se repite, suele ser una <strong>clase</strong>.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>3) Selector de ID (#)</summary>
          <div className="dd-body">
            <p>
              Selecciona un elemento con un ID concreto. En HTML un ID debe ser<strong>único</strong>.
            </p>
            <p>
  En HTML, el atributo <code>id</code> identifica a un elemento de forma
  <strong>única</strong> dentro de la página. Esto significa que
  <strong>no puede haber dos elementos con el mismo <code>id</code></strong>,
  ya que navegadores, CSS, JavaScript y tecnologías de accesibilidad
  asumen que ese identificador apunta a un solo nodo del documento.
  Si se repite un <code>id</code>, el HTML deja de ser válido y pueden aparecer
  comportamientos inesperados, como estilos mal aplicados o scripts que solo
  afectan al primer elemento encontrado. Cuando varios elementos necesitan
  compartir estilos o comportamiento, la solución correcta es usar
  <code>class</code>, que sí puede repetirse.
</p>


            <pre>
              <code>{`#hero{
  padding: 2rem;
}`}</code>
            </pre>

            <div className="callout warn">
              En CSS moderno, el ID se usa poco para estilo porque tiene <strong>mucha especificidad</strong>.
              Mejor usa clases para mantener el CSS flexible.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>4) Selector universal (*)</summary>
          <div className="dd-body">
            <p>
              Selecciona <strong>todo</strong>. Se usa con cuidado, por ejemplo para normalizar el box model.
            </p>

            <pre>
              <code>{`*{
  box-sizing: border-box;
}`}</code>
            </pre>

            <div className="callout tip">
              Útil como “base”, pero evita usarlo para estilos pesados (puede afectar a rendimiento y a todo).
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>5) Selector por agrupación (,)</summary>
          <div className="dd-body">
            <p>
              Aplica el mismo bloque de estilos a varios selectores separados por coma.
            </p>

            <pre>
              <code>{`h1, h2, h3{
  letter-spacing: .2px;
}`}</code>
            </pre>

            <div className="callout">
              Sirve para evitar duplicar reglas.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>6) Descendiente (espacio)</summary>
          <div className="dd-body">
            <p>
              Selecciona elementos <strong>dentro</strong> de otros. Ejemplo: enlaces dentro de un menú.
            </p>

            <pre>
              <code>{`.menu a{
  text-decoration: none;
}`}</code>
            </pre>

            <div className="callout tip">
              Se lee: “Selecciona <code>a</code> que estén dentro de <code>.menu</code>”.
            </div>
          </div>
        </details>
      </section>

      {/* =========================
          RECORDATORIO: ESPECIFICIDAD
      ========================== */}
      <section className="card">
        <h2>Recordatorio importante: especificidad (para que no te “mienta” el CSS)</h2>

        <p>
          Cuando varias reglas apuntan al mismo elemento, el navegador decide cuál gana usando
          la <strong>cascada</strong> y la <strong>especificidad</strong>. Esto es clave en selectores,
          porque a veces “escribes bien el CSS” y aun así no se aplica… y el motivo suele ser:
          <strong> otra regla más específica</strong>.
        </p>

        <div className="callout tip">
          Norma rápida: <strong>ID</strong> gana a <strong>clase</strong> y la <strong>clase</strong> gana a{" "}
          <strong>etiqueta</strong>. Y si empatan, suele ganar la regla que esté <strong>más abajo</strong>
          (la última en el CSS).
        </div>

        <details className="dd">
          <summary>Mini-ejemplo (tres reglas, ¿cuál gana?)</summary>
          <div className="dd-body">
            <pre>
              <code>{`p{ color: green; }       /* etiqueta */
.note{ color: blue; }    /* clase */
#intro{ color: red; }    /* ID */`}</code>
            </pre>

            <p>
              Si el elemento tiene <code>id="intro"</code> y <code>class="note"</code>, el texto será{" "}
              <strong>rojo</strong> porque el selector de ID es más específico.
            </p>
          </div>
        </details>

        <p style={{ marginTop: ".75rem" }}>
          📌 Para repasar especificidad con ejemplos:{" "}
          <a
            href="https://www.w3schools.com/css/css_specificity.asp"
            target="_blank"
            rel="noreferrer"
          >
            CSS Specificity (W3Schools)
          </a>
        </p>

        <div className="callout warn">
          Consejo pro: evita “peleas” de especificidad. Prioriza <strong>clases</strong> y estructura tus estilos
          para no depender de IDs ni selectores excesivamente largos.
        </div>
      </section>

      {/* =========================
          PRÁCTICA SIN JS
      ========================== */}
      <section className="card">
        <h2>Práctica guiada</h2>

        <p>
          Copia esto en CodePen. Objetivo: entender qué selecciona cada regla y por qué.
        </p>

        <details className="dd" open>
          <summary>HTML para practicar</summary>
          <div className="dd-body">
            <pre>
              <code>{`<main>
  <h1 id="intro" class="title">Título principal</h1>

  <nav class="menu">
    <a href="#">Inicio</a>
    <a href="#" class="active">Cursos</a>
    <a href="#">Contacto</a>
  </nav>

  <section class="card-demo">
    <h2 class="subtitle">Tarjeta</h2>
    <p class="note">Un párrafo dentro de una tarjeta.</p>
  </section>

  <p class="note">Un párrafo fuera de la tarjeta.</p>
</main>`}</code>
            </pre>
          </div>
        </details>

        <details className="dd">
          <summary>CSS para practicar </summary>
          <div className="dd-body">
            <pre>
              <code>{`/* 1) etiqueta */
p{ color: #334155; }

/* 2) clase */
.note{ font-weight: 700; }

/* 3) id (muy específico) */
#intro{ text-transform: uppercase; }

/* 4) descendiente */
.menu a{ text-decoration: none; padding: .25rem .5rem; display: inline-block; }

/* 5) clase extra */
.menu a.active{ border-bottom: 2px solid currentColor; }`}</code>
            </pre>

            <div className="callout tip">
              Método: comenta una regla, recarga, observa qué cambia. Así aprendes más rápido.
            </div>
          </div>
        </details>

        <details className="dd">
          <summary>Retos </summary>
          <div className="dd-body">
            <ol>
              <li>Cambia el selector <code>p</code> por <code>.card-demo p</code> y observa qué párrafo cambia.</li>
              <li>Añade una clase <code>note</code> a un enlace del menú. ¿Qué estilos se aplican y por qué?</li>
              <li>Haz que solo el <code>h2</code> de la tarjeta tenga otro color usando una clase.</li>
              <li>Escribe dos reglas que se contradigan y explica cuál gana (pista: especificidad o “la última regla”).</li>
              <li>Crea un contenedor con la clase tarjeta y luego otro contenedor dentro con una clase diferente. Aplica estilos distintos a cada uno usando selectores adecuados.</li>
              <li>Ahora crea otro contenedor con la clase tarjeta pero que la letra sea 3 px superior</li>
            </ol>
          </div>
        </details>
      </section>
    </main>
  );
}
