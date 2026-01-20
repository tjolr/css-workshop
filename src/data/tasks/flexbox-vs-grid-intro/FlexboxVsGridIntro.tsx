import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FlexboxVsGridIntro.css';

export const FlexboxVsGridIntro = () => (
  <div className="intro-page">
    <h1 className="intro-title">Flexbox vs Grid</h1>

    <section className="intro-section">
      <h2>Når bør du bruke hva?</h2>
      <p>
        Både <strong>Flexbox</strong> og <strong>CSS Grid</strong> er kraftige layout-systemer,
        men de utmerker seg i ulike scenarioer. Å forstå når du skal bruke hver av dem vil gjøre
        layoutene dine mer elegante og vedlikeholdbare.
      </p>

      <h2>Kom i gang</h2>
      <p>Se denne utmerkede sammenligningen av Flexbox og Grid:</p>

      <a
        className="intro-video-link"
        href="https://www.youtube.com/watch?v=aEj6k-gi9-s"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="intro-video-icon">▶</span>
        <span>Flexbox vs CSS Grid</span>
        <FontAwesomeIcon icon={faExternalLink} />
      </a>
    </section>

   

  </div>
);
