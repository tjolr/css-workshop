import './MediaContainerQueries.css';

export const MediaContainerQueries = () => (
  <div className="group-page">
    <h1 className="group-title">Media vs Container Queries</h1>

    <section className="group-section">
      <h2>Ressurser</h2>
      <ul className="resource-list">
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries" target="_blank" rel="noopener noreferrer">MDN: Container Queries</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries" target="_blank" rel="noopener noreferrer">MDN: Media Queries</a></li>
      </ul>
    </section>

    <section className="group-section">
      <h2>Oppgaver</h2>

      <div className="question-card">
        <h3>1. Hva er forskjellen mellom Media Queries og Container Queries?</h3>
        <p className="hint">Tenk på hva hver av dem reagerer på - viewport vs. forelder-element.</p>
      </div>

      <div className="question-card">
        <h3>2. Hva må til for at et element skal kunne bruke Container Queries?</h3>
        <p className="hint">Hvilken CSS-egenskap må settes på forelder-elementet?</p>
      </div>
      <div className="question-card">
        <h3>3. Hvorfor er Container Queries bedre for gjenbrukbare komponenter?</h3>
        <p className="hint">Tenk på et kort-komponent som brukes både i sidebar og hovedinnhold.</p>
      </div>

      <div className="question-card">
        <h3>4. Lag et kort-komponent som endrer layout basert på forelderens bredde</h3>
        <p className="hint">Kortet skal vise bilde og tekst vertikalt når smalt, horisontalt når bredt.</p>
      </div>

      <div className="question-card">
        <h3>5. Hva er <code>container-type</code> og hvilke verdier kan den ha?</h3>
        <p className="hint">Undersøk forskjellen mellom <code>inline-size</code>, <code>size</code>, og <code>normal</code>.</p>
      </div>
    </section>

  </div>
);
