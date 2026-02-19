import { Link } from "react-router-dom";

export default function V02_InternoExterno_I() {
  return (
    <div className="doc">
      {/* HERO */}
      <section className="card hero">
        <p className="doc-kicker">Fundamentos</p>
        <h1>Cómo enlazar y aplicar CSS</h1>
        <p className="doc-lead">
          Antes de hablar de colores, layouts o tipografías, hay una pregunta
          fundamental:{" "}
          <strong>¿cómo llega el CSS a afectar realmente a un documento HTML?</strong>
        </p>

        
      </section>

      {/* INTRO CONCEPTUAL */}
      <section className="card">
        <h2>Por qué este tema es clave</h2>
        <p>
          Uno de los errores más comunes al empezar con CSS es pensar que el
          problema está en las propiedades, cuando en realidad el navegador{" "}
          <strong>ni siquiera está leyendo tu CSS</strong>.
        </p>

        <p>
          Si no entiendes cómo se enlaza y se aplica una hoja de estilos, todo lo
          demás falla: reglas que “no funcionan”, estilos que no se aplican o
          comportamientos que parecen aleatorios.
        </p>

        <div className="callout tip">
          Antes de aprender a escribir buen CSS, asegúrate de que el navegador
          sabe dónde está tu CSS y cuándo debe aplicarlo.
        </div>
      </section>

      {/* CONCEPTO GENERAL (DETAILS) */}
      <details className="dd" open>
        <summary>Cómo aplica CSS el navegador</summary>
        <div className="dd-body">
          <p>
            El navegador no “adivina” tus estilos. Solo aplica CSS cuando se lo
            indicas explícitamente. Para ello, HTML y CSS deben estar{" "}
            <strong>correctamente conectados</strong>.
          </p>

          <p>
            Existen <strong>tres formas principales</strong> de aplicar CSS a un
            documento HTML. Todas funcionan, pero no todas son igual de adecuadas
            para un proyecto real.
          </p>

          <div className="callout">
            Piensa en esto como la “puerta de entrada”: si el CSS no está bien
            enlazado, nada de lo demás importa.
          </div>
        </div>
      </details>

      {/* MÉTODOS (DETAILS) */}
      <details className="dd" open>
        <summary>1) Hoja de estilos externa (la forma recomendada)</summary>
        <div className="dd-body">
          <p>
            Es la forma más común, más limpia y más profesional de trabajar con
            CSS. Los estilos se escriben en un archivo <code>.css</code> separado y
            se enlazan desde el HTML mediante la etiqueta <code>&lt;link&gt;</code>{" "}
            dentro del <code>&lt;head&gt;</code>.
          </p>

          <pre>
            <code>{`<!-- Enlace en el HTML -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>`}</code>
          </pre>

          <pre>
            <code>{`/* Código en styles.css */
body {
  background-color: lightblue;
}`}</code>
          </pre>

          <h3>Ventajas</h3>
          <ul>
            <li>✔️ Separa estructura (HTML) y presentación (CSS)</li>
            <li>✔️ Facilita el mantenimiento y la lectura del código</li>
            <li>✔️ Permite reutilizar estilos en múltiples páginas</li>
            <li>✔️ Mejora el rendimiento gracias a la caché del navegador</li>
          </ul>

          <div className="callout tip">
            En proyectos reales, la hoja de estilos externa no es “una opción”:
            es el estándar.
          </div>
        </div>
      </details>

      <details className="dd">
        <summary>2) Estilos internos (dentro del HTML)</summary>
        <div className="dd-body">
          <p>
            Los estilos internos se declaran directamente en el documento HTML,
            dentro de la etiqueta <code>&lt;style&gt;</code> ubicada en el{" "}
            <code>&lt;head&gt;</code>.
          </p>

          <pre>
            <code>{`<head>
  <style>
    h1 {
      color: maroon;
    }
  </style>
</head>`}</code>
          </pre>

          <p>
            Es útil en situaciones concretas (por ejemplo, una sola página o
            pruebas), pero escala mal cuando el proyecto crece.
          </p>

          <h3>Cuándo puede tener sentido</h3>
          <ul>
            <li>✔️ Prototipos rápidos</li>
            <li>✔️ Ejemplos educativos</li>
            <li>✔️ Páginas HTML aisladas</li>
          </ul>

          <div className="callout warn">
            En cuanto una web crece, los estilos internos se vuelven difíciles
            de mantener y estandarizar.
          </div>
        </div>
      </details>

      <details className="dd">
        <summary>3) Estilos en línea (inline)</summary>
        <div className="dd-body">
          <p>
            Los estilos en línea se aplican directamente a un elemento HTML
            usando el atributo <code>style</code>.
          </p>

          <pre>
            <code>{`<h2 style="color: blue; font-size: 20px;">
  Título azul
</h2>`}</code>
          </pre>

          <p>
            Aunque funcionan, rompen la separación entre contenido y presentación
            y suelen generar conflictos de mantenimiento.
          </p>

          <h3>Problemas frecuentes</h3>
          <ul>
            <li>❌ Difíciles de mantener</li>
            <li>❌ No reutilizables</li>
            <li>❌ Complican la lectura del HTML</li>
            <li>❌ Generan conflictos de especificidad</li>
          </ul>

          <div className="callout warn">
            En desarrollo web profesional, los inline se evitan salvo casos muy
            concretos (por ejemplo, emails HTML).
          </div>
        </div>
      </details>

      {/* PRIORIDAD (DETAILS) */}
      <details className="dd" open>
        <summary>¿Qué forma de enlazar CSS tiene prioridad?</summary>
        <div className="dd-body">
          <p>
            Cuando un mismo elemento recibe estilos desde diferentes lugares, el
            navegador necesita decidir cuál aplicar. El primer criterio es la{" "}
            <strong>procedencia del estilo</strong>.
          </p>

          <h3>Orden de prioridad (de menor a mayor)</h3>
          <ol>
            <li>
              <strong>Hoja de estilos externa</strong> (menor prioridad)
            </li>
            <li>
              <strong>Estilos internos</strong>
            </li>
            <li>
              <strong>Estilos en línea (inline)</strong> (mayor prioridad, en general)
            </li>
          </ol>

          <div className="callout tip">
            Si el mismo elemento tiene estilos externos, internos e inline para
            la misma propiedad, el inline suele ser el que se aplique.
          </div>

          <h3>Ejemplo básico</h3>
          <pre>
            <code>{`<!-- HTML -->
<head>
  <link rel="stylesheet" href="styles.css">

  <style>
    h1 {
      color: red;
    }
  </style>
</head>

<body>
  <h1 style="color: blue;">Título</h1>
</body>`}</code>
          </pre>

          <pre>
            <code>{`/* styles.css */
h1 {
  color: green;
}`}</code>
          </pre>

          <p>
            En este caso, el texto se mostrará en <strong>azul</strong>.
          </p>

          <h3>La excepción importante: la especificidad</h3>
          <p>
            Ojo: esto no significa que “el interno siempre gana al externo”.
            Existe una excepción fundamental: la <strong>especificidad</strong>.
          </p>

          <p>
            Si el CSS externo usa un selector mucho más específico, puede
            sobrescribir un selector interno más débil.
          </p>

          <div className="callout warn">
            Esto confunde mucho: “¿cómo puede ganar el externo?”.  
            Respuesta: por la especificidad del selector.
          </div>

          <pre>
            <code>{`/* CSS externo */
#cabecera h1 {
  color: green;
}

/* CSS interno */
h1 {
  color: red;
}`}</code>
          </pre>

          <p>
            Si el <code>&lt;h1&gt;</code> está dentro de un elemento con{" "}
            <code>id="cabecera"</code>, se aplicará <strong>verde</strong> porque{" "}
            <code>#cabecera h1</code> es más específico.
          </p>

          <div className="callout tip">
            Idea clave: primero importa el origen, pero después el navegador
            compara la fuerza real de los selectores (especificidad).
          </div>
        </div>
      </details>

      {/* RESUMEN */}
      <section className="card">
        <h2>Resumen comparativo</h2>

        <ul>
          <li><strong>CSS externo</strong> → limpio, escalable, profesional</li>
          <li><strong>CSS interno</strong> → útil solo en casos puntuales</li>
          <li><strong>CSS inline</strong> → excepción, no norma</li>
        </ul>

        <div className="callout">
          Aprender CSS también es aprender a tomar buenas decisiones técnicas.
        </div>
      </section>

      {/* CIERRE */}
      <section className="card">
        <h2>Qué debes tener claro antes de continuar</h2>

        <p>
          A partir de ahora trabajaremos principalmente con{" "}
          <strong>hojas de estilo externas</strong>. Entender bien este punto te
          evitará muchos errores y frustraciones en los siguientes temas.
        </p>

        <p>
          En el próximo apartado entraremos en el corazón de CSS:{" "}
          <strong>cascada y especificidad</strong>.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="/css-interno-externo-2" className="btn btn-primary">
            Continuar con CSS interno / externo (II)
          </Link>
          
        </div>
      </section>
    </div>
  );
}
