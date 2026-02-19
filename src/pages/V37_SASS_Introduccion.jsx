import { useEffect, useMemo, useState } from "react";

// V37 · Introducción práctica a SCSS (Sass)
// Pensado para alumnado que empieza desde cero con CSS.
// Objetivo: entender QUÉ es, CUÁNDO se usa y 3 superpoderes básicos
// (variables, nesting y ficheros parciales) sin abrumar.

export default function V37_SASS_Introduccion() {
  useEffect(() => {
    document.title = "V37 · Introducción a SCSS (Sass) sin liarse";
  }, []);

  // ==== Mini test muy básico ==== 
  const questions = useMemo(
    () => [
      {
        id: "q1",
        q: "¿Qué es realmente SCSS (Sass) para el navegador?",
        options: [
          "Un tipo nuevo de CSS que solo entienden navegadores modernos",
          "Un preprocesador que se compila a CSS normal",
          "Una librería de JavaScript",
          "Un sustituto de HTML",
        ],
        correct: "Un preprocesador que se compila a CSS normal",
        why:
          "El navegador solo entiende CSS. Tú escribes SCSS, una herramienta lo convierte a .css y eso es lo que carga la página.",
      },
      {
        id: "q2",
        q: "¿Qué diferencia principal hay entre .scss y .sass?",
        options: [
          ".sass usa indentación y .scss usa llaves y ; como CSS",
          "No hay ninguna diferencia",
          ".scss es para móvil y .sass para escritorio",
          ".sass funciona sin compilar y .scss no",
        ],
        correct: ".sass usa indentación y .scss usa llaves y ; como CSS",
        why:
          "Ambas son sintaxis de Sass. En clase usaremos SCSS porque se parece mucho al CSS que ya conoces.",
      },
      {
        id: "q3",
        q: "¿Para qué sirven las variables SCSS ($primary, $space-md…)?",
        options: [
          "Para guardar valores repetidos (colores, tamaños, etc.) en un solo sitio",
          "Para crear animaciones",
          "Para escribir comentarios",
          "Para evitar usar clases en HTML",
        ],
        correct:
          "Para guardar valores repetidos (colores, tamaños, etc.) en un solo sitio",
        why:
          "Con variables puedes cambiar un color o un espaciado en un solo lugar y se actualiza en todos los estilos que lo usan.",
      },
      {
        id: "q4",
        q: "¿Qué ventaja práctica tiene el nesting (anidación) en SCSS?",
        options: [
          "Que el CSS generado es siempre más pequeño",
          "Que puedes agrupar los estilos de un mismo componente de forma visual",
          "Que ya no necesitas clases en el HTML",
          "Ninguna, solo complica el código",
        ],
        correct:
          "Que puedes agrupar los estilos de un mismo componente de forma visual",
        why:
          "El nesting te permite ver de un vistazo todo lo que afecta a, por ejemplo, .card y sus partes internas.",
      },
      {
        id: "q5",
        q: "¿Cuál de estas frases es la más sana para empezar?",
        options: [
          "Voy a reescribir todo mi CSS en SCSS el primer día",
          "Usaré SCSS solo para unas pocas cosas: variables, nesting suave y parciales",
          "Usaré todas las características de Sass a la vez",
          "No voy a mirar nunca el CSS generado",
        ],
        correct:
          "Usaré SCSS solo para unas pocas cosas: variables, nesting suave y parciales",
        why:
          "Al principio, menos es más. Domina bien unas pocas ideas antes de complicar la arquitectura.",
      },
    ],
    []
  );

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    let ok = 0;
    for (const q of questions) if (answers[q.id] === q.correct) ok++;
    return ok;
  }, [answers, questions]);

  const choose = (id, opt) => setAnswers((p) => ({ ...p, [id]: opt }));
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const reset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <main className="doc" id="contenido">
      <a className="skip-link" href="#contenido-real">
        Saltar al contenido
      </a>

      {/* ================= HERO ================= */}
      <header className="doc-hero" id="contenido-real">
        <p className="doc-kicker">Extra · V37</p>
        <h1>SCSS (Sass) para principiantes: una ayuda, no un lío</h1>

        <p className="doc-lead">
          Sass/SCSS es como escribir <strong>CSS con ayudantes</strong>: variables, un
          poco de anidación y mejores archivos. No necesitas saberlo todo; con un
          puñado de ideas puedes ganar orden y productividad sin sentirte
          abrumada.
        </p>

        <div className="callout tip">
          🎯 En esta lección veremos solo lo esencial: qué es un preprocesador,
          qué diferencia hay entre SASS y SCSS, cómo se compila y tres
          superpoderes básicos (variables, nesting y ficheros parciales).
        </div>

        <nav className="doc-index" aria-label="Índice de la lección">
          <h2>🧭 Índice</h2>
          <ol>
            <li>
              <a href="#que-es">1) Qué problema resuelve Sass</a>
            </li>
            <li>
              <a href="#scss-sintaxis">2) SCSS en comparación con CSS (muy poco nuevo)</a>
            </li>
            <li>
              <a href="#compilar">3) Cómo se usa: compilar SCSS → CSS</a>
            </li>
            <li>
              <a href="#variables">4) Variables sencillas con $color-primary</a>
            </li>
            <li>
              <a href="#nesting">5) Nesting suave para componentes</a>
            </li>
            <li>
              <a href="#ejemplo">6) Mini ejemplo guiado + test</a>
            </li>
          </ol>
        </nav>
      </header>

      {/* ========== 1) QUÉ PROBLEMA RESUELVE ========== */}
      <section className="doc-section" id="que-es">
        <details className="dd" open>
          <summary>1) Antes de nada: ¿por qué usar Sass?</summary>
          <div className="dd-body">
            <p>
              Cuando un proyecto crece, el CSS empieza a llenarse de <strong>colores
              repetidos</strong>, tamaños copiados y pegados, archivos largos donde es
              difícil encontrar nada… Sass aparece para poner un poco de orden.
            </p>

            <div className="callout">
              En una frase sencilla: <strong>Sass/SCSS te ayuda a organizar y
              escribir mejor tu CSS</strong>, pero lo que acaba en el navegador sigue
              siendo CSS normal.
            </div>

            <p>
              En este manual lo usaremos solo como una <strong>capa opcional</strong>:
              si entiendes CSS, puedes aprender SCSS sin cambiar tu forma de pensar
              en la maquetación.
            </p>
          </div>
        </details>
      </section>

      {/* ========== 2) SCSS VS CSS (SINTAXIS) ========== */}
      <section className="doc-section" id="scss-sintaxis">
        <details className="dd" open>
          <summary>2) SCSS frente a CSS: se parecen muchísimo</summary>
          <div className="dd-body">
            <p>
              La sintaxis que usaremos es <strong>SCSS</strong>. La idea clave es que
              <strong> cualquier CSS válido también es SCSS válido</strong>. Eso significa
              que puedes copiar tu CSS tal cual y empezar a añadir pequeñas mejoras.
            </p>

            <div className="table-wrap" role="region" aria-label="CSS vs SCSS" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th>CSS</th>
                    <th>SCSS equivalente</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <pre>
                        <code>{`button {
  padding: 0.75rem 1rem;
  border-radius: 999px;
}`}</code>
                      </pre>
                    </td>
                    <td>
                      <pre>
                        <code>{`button {
  padding: 0.75rem 1rem;
  border-radius: 999px;
}`}</code>
                      </pre>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout tip">
              No tienes que “aprender otro lenguaje”. Solo vas a añadir <strong>unos
              pocos extras</strong> sobre el CSS que ya conoces.
            </div>
          </div>
        </details>
      </section>

      {/* ========== 3) COMPILAR SCSS → CSS ========== */}
      <section className="doc-section" id="compilar">
        <details className="dd" open>
          <summary>3) ¿Dónde encaja SCSS en el flujo de trabajo?</summary>
          <div className="dd-body">
            <p>
              El navegador <strong>no</strong> carga archivos <code>.scss</code>.
              Siempre cargas un <code>.css</code>. El paso intermedio es una pequeña
              herramienta que traduce SCSS → CSS.
            </p>

            <pre>
              <code>{`# Ejemplo muy sencillo (línea de comandos)
sass styles/main.scss styles/main.css

# Modo "watch" mientras trabajas
sass --watch styles/main.scss:styles/main.css`}</code>
            </pre>

            <div className="callout tip">
              En proyectos con React/Vite, esa traducción suele hacerla el propio
              sistema de build. Para aprender, piensa en ello como “guardar un
              .scss y que se actualice tu .css automáticamente”.
            </div>
          </div>
        </details>
      </section>

      {/* ========== 4) VARIABLES SENCILLAS ========== */}
      <section className="doc-section" id="variables">
        <details className="dd" open>
          <summary>4) Variables SCSS: un solo sitio para tus colores y tamaños</summary>
          <div className="dd-body">
            <p>
              El primer superpoder útil son las <strong>variables</strong>. En SCSS
              se escriben con <code>$</code> al principio del nombre.
            </p>

            <pre>
              <code>{`// _tokens.scss (parcial)
$color-primary: #2563eb;
$color-accent: #f97316;
$radius-pill: 999px;

button {
  border-radius: $radius-pill;
  background: $color-primary;
}

button--secondary {
  background: $color-accent;
}`}</code>
            </pre>

            <div className="callout tip">
              Más adelante podrás combinar estas variables SCSS con <strong>CSS
              custom properties</strong>, pero para empezar, quédate con la idea:
              “no repitas valores importantes a mano”.
            </div>
          </div>
        </details>
      </section>

      {/* ========== 5) NESTING SUAVE ========== */}
      <section className="doc-section" id="nesting">
        <details className="dd" open>
          <summary>5) Nesting: agrupar estilos de un componente sin pasarse</summary>
          <div className="dd-body">
            <p>
              El nesting te permite escribir los estilos de un componente juntos,
              sin repetir el selector todo el rato. Importante: <strong>no</strong>
              anides más de 2–3 niveles.
            </p>

            <pre>
              <code>{`.card {
  padding: 1rem;
  border-radius: 1rem;

  &__title {
    font-weight: 800;
    margin-bottom: 0.5rem;
  }

  &__actions {
    display: flex;
    gap: 0.5rem;
  }
}`}</code>
            </pre>

            <div className="callout warn">
              Si ves que empiezas a anidar 4, 5 o más niveles, normalmente el
              problema no es Sass, sino la <strong>estructura del HTML</strong> o
              la arquitectura del CSS.
            </div>
          </div>
        </details>
      </section>

      {/* ========== 6) MINI EJEMPLO GUIADO ========== */}
      <section className="doc-section" id="ejemplo">
        <details className="dd" open>
          <summary>6) Ejemplo: de un pequeño SCSS a CSS real</summary>
          <div className="dd-body">
            <p>
              Vamos a ver de forma muy visual qué escribes tú y qué se genera.
            </p>

            <h3>6.1 Lo que tú escribes (SCSS)</h3>
            <pre>
              <code>{`// main.scss
$primary: #2563eb;

.btn {
  padding: 0.6rem 1rem;
  border-radius: 999px;
  border: none;
  background: $primary;
  color: white;

  &--outline {
    background: transparent;
    border: 2px solid $primary;
    color: $primary;
  }
}`}</code>
            </pre>

            <h3>6.2 Lo que ve el navegador (CSS generado)</h3>
            <pre>
              <code>{`.btn {
  padding: 0.6rem 1rem;
  border-radius: 999px;
  border: none;
  background: #2563eb;
  color: white;
}

.btn--outline {
  padding: 0.6rem 1rem;
  border-radius: 999px;
  border: 2px solid #2563eb;
  background: transparent;
  color: #2563eb;
}`}</code>
            </pre>

            <div className="callout">
              Fíjate en dos ideas clave:
              <ul style={{ marginBottom: 0 }}>
                <li>El navegador nunca ve <code>$primary</code>, solo el color final.</li>
                <li>
                  El nesting se transforma en selectores normales (.btn y
                  .btn--outline).
                </li>
              </ul>
            </div>
          </div>
        </details>
      </section>

      {/* ========== 7) TEST FINAL ========== */}
      <section className="doc-section" id="test">
        <details className="dd" open>
          <summary>7) Test corto para comprobar que lo has pillado</summary>
          <div className="dd-body">
            <form onSubmit={submit}>
              {questions.map((q, i) => {
                const picked = answers[q.id];
                const ok = submitted && picked === q.correct;
                const bad = submitted && picked && picked !== q.correct;

                return (
                  <div className="card" key={q.id} style={{ marginTop: "1rem" }}>
                    <h3 style={{ marginTop: 0 }}>
                      {i + 1}. {q.q}
                    </h3>

                    <div className="test-question" role="group" aria-label={`Pregunta ${i + 1}`}>
                      {q.options.map((opt) => (
                        <label key={opt}>
                          <input
                            type="radio"
                            name={q.id}
                            value={opt}
                            checked={picked === opt}
                            onChange={() => choose(q.id, opt)}
                            disabled={submitted}
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>

                    {submitted && (
                      <div className={`callout ${ok ? "tip" : "warn"}`}>
                        {ok && (
                          <>
                            ✅ Correcta. <strong>{q.why}</strong>
                          </>
                        )}
                        {bad && (
                          <>
                            ❌ Incorrecta. Correcta: <strong>{q.correct}</strong>. {q.why}
                          </>
                        )}
                        {!picked && (
                          <>
                            ⚠️ Sin responder. Correcta: <strong>{q.correct}</strong>. {q.why}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="doc-next" style={{ gap: ".6rem" }}>
                {!submitted ? (
                  <button className="btn btn-primary" type="submit">
                    Corregir test
                  </button>
                ) : (
                  <>
                    <div className="badge" aria-live="polite">
                      Resultado: {score}/{questions.length}
                    </div>
                    <button className="btn" type="button" onClick={reset}>
                      Reintentar
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </details>
      </section>

      {/* ========== 8) CIERRE ========== */}
      <section className="doc-section">
        <div className="callout tip">
          ✅ Resumen rápido:
          <ul style={{ marginBottom: 0 }}>
            <li>Sass/SCSS es una <strong>ayuda opcional</strong> sobre tu CSS, no otro mundo.</li>
            <li>El navegador solo ve el <strong>CSS generado</strong>.</li>
            <li>Empieza usando solo <strong>variables</strong>, <strong>nesting suave</strong> y uno o dos archivos parciales.</li>
            <li>Cuando eso te resulte natural, podrás explorar mixins, funciones y arquitecturas más avanzadas.</li>
            <li>
              Código del manual en GitHub:{" "}
              <a
                href="https://github.com/inma2709/manualcss"
                target="_blank"
                rel="noreferrer noopener"
              >
                github.com/inma2709/manualcss
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
