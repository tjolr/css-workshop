import './AdvancedSelectors.css';

export const AdvancedSelectors = () => (
  <div className="group-page">
    <h1 className="group-title">:has() :is() og :where()</h1>
    <p className="group-subtitle">Avanserte CSS-selektorer</p>

    <section className="group-section">
      <h2>Ressurser</h2>
      <ul className="resource-list">
        <li><a href="https://www.youtube.com/watch?v=3ncFpP8GP4g" target="_blank" rel="noopener noreferrer">Advanced CSS Selectors (YouTube)</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:has" target="_blank" rel="noopener noreferrer">MDN: :has()</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:is" target="_blank" rel="noopener noreferrer">MDN: :is()</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:where" target="_blank" rel="noopener noreferrer">MDN: :where()</a></li>
      </ul>
    </section>

    <section className="group-section">
      <h2>Oppgaver</h2>

      <div className="question-card">
        <h3>1. Hva gjør <code>:is()</code> selectoren? Vis et eksempel på bruk av <code>:is()</code> selectoren.</h3>
      </div>

      <div className="question-card">
        <h3>2. Hva gjør <code>:where()</code>? Vis et eksempelbruk.</h3>
      </div>

      <div className="question-card">
        <h3>3. Hvordan skiller <code>:where()</code> seg fra <code>:is()</code> selectoren?</h3>
      </div>

      <div className="question-card">
        <h3>4. Hva gjør <code>:has()</code> selectoren, og hvorfor kalles den for "parent selector"?</h3>
      </div>

      <div className="question-card">
        <h3>5. Hva er noen gode bruksområder for <code>:has()</code>?</h3>
      </div>

      <div className="question-card bonus">
        <h3>Bonusoppgave hvis tid: Finn et eksempel der du kombinerer både <code>:has()</code> og <code>:is()</code></h3>
      </div>
    </section>

  </div>
);
