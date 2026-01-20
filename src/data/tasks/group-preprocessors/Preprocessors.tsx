import './Preprocessors.css';

export const Preprocessors = () => (
  <div className="group-page">
    <h1 className="group-title">CSS Preprocessors</h1>

    <section className="group-section">
      <h2>Ressurser</h2>
      <ul className="resource-list">
        <li><a href="https://sass-lang.com/documentation/" target="_blank" rel="noopener noreferrer">Sass Documentation</a></li>
        <li><a href="https://www.youtube.com/watch?v=akDIJa0AP5c" target="_blank" rel="noopener noreferrer">Sass Tutorial for Beginners (YouTube)</a></li>
      </ul>
    </section>

    <section className="group-section">
      <h2>Oppgaver</h2>

      <div className="question-card">
        <h3>1. Hva er en CSS preprocessor og nevn noen eksempler</h3>
        <p className="hint">Tenk på Sass, Less, Stylus - hva har de til felles?</p>
      </div>

      <div className="question-card">
        <h3>2. Hva er fordelen med variabler i Sass sammenlignet med CSS custom properties?</h3>
        <p className="hint">Tenk på når verdiene evalueres (kompileringstid vs. kjøretid).</p>
      </div>

      <div className="question-card">
        <h3>3. Forklar hva en mixin er og når du ville brukt en</h3>
        <p className="hint">Mixins er som gjenbrukbare "funksjoner" for CSS.</p>
      </div>
      <div className="question-card">
        <h3>4. Hva er forskjellen mellom <code>@extend</code> og <code>@mixin</code> i Sass?</h3>
        <p className="hint">Hvordan påvirker de den kompilerte CSS-en forskjellig?</p>
      </div>

      <div className="question-card">
        <h3>5. Hva er mulig å gjøre med en preprocessor som IKKE er mulig med vanlig CSS i 2026?</h3>
        <p className="hint">CSS har fått mange nye features - variabler, nesting, :has(). Hva gjenstår?</p>
      </div>

      <div className="question-card">
        <h3>6. Hvordan fungerer Sass partials og <code>@use</code> vs <code>@import</code>?</h3>
        <p className="hint">Hvorfor anbefales @use over @import i moderne Sass?</p>
      </div>
    </section>

  </div>
);
