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
        <h3>1. Hva gjør CSS-preprosessorer som SCSS og Less?</h3>
      </div>

      <div className="question-card">
        <h3>2. Hva kan man gjøre med en preprosessor som ikke går an med vanlig CSS?</h3>
      </div>

      <div className="question-card">
        <h3>3. Hvordan fungerer CSS-in-JS løsninger som styled-components, vanilla-extract og panda-css?</h3>
      </div>

      <div className="question-card">
        <h3>4. Hvordan påvirkes ytelse av build vs runtime i CSS-in-JS løsningene?</h3>
      </div>

      <div className="question-card bonus">
        <h3>Bonusoppgave: Lag stiler til en toast-komponent med ulike farger ved bruk av SCSS mixins. Mixin skal ta inn bakgrunnsfarge, tekstfarge og ikonfarge som argument, og støtte temafarger for success, warning, error og info.</h3>
      </div>
    </section>

  </div>
);
