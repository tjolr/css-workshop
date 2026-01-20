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
        <h3>1. Hva er media queries?</h3>
      </div>

      <div className="question-card">
        <h3>2. Hva er container queries, og hvilke properties kreves for å bruke det?</h3>
      </div>

      <div className="question-card">
        <h3>3. Når skal man bruke media vs container queries?</h3>
      </div>

      <div className="question-card bonus">
        <h3>Bonusoppgave: Lag et dashboard med kort, og forandre på kortene ved hjelp av container queries</h3>
      </div>
    </section>

  </div>
);
