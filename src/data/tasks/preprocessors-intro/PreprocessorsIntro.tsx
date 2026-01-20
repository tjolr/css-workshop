import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PreprocessorsIntro.css';

export const PreprocessorsIntro = () => (
  <div className="intro-page">
    <h1 className="intro-title">CSS Preprocessors</h1>

    <section className="intro-section">
      <h2>Hvorfor preprocessors?</h2>
      <p>
        CSS preprocessors som <strong>Sass</strong>, <strong>Less</strong> og <strong>Stylus</strong> utvider
        CSS med kraftige funksjoner som gjør stylesheets mer vedlikeholdbare, organiserte og effektive.
      </p>

      <p>De løser vanlige CSS-utfordringer:</p>

      <ul className="intro-list">
        <li>
          <strong>Variabler</strong> — Definer farger, fonter og størrelser én gang, gjenbruk overalt
        </li>
        <li>
          <strong>Nesting</strong> — Skriv selektorer som speiler HTML-strukturen din
        </li>
        <li>
          <strong>Mixins</strong> — Lag gjenbrukbare stilblokker (som funksjoner)
        </li>
        <li>
          <strong>Partials & Imports</strong> — Del opp stiler i håndterbare filer
        </li>
        <li>
          <strong>Matematikk & Funksjoner</strong> — Beregn verdier dynamisk
        </li>
      </ul>

      <p className="intro-note">
        Merk: Moderne CSS støtter nå mange av disse funksjonene nativt (som CSS-variabler og nesting),
        men preprocessors tilbyr fortsatt ekstra kraft og er mye brukt i produksjon.
      </p>
    </section>

    <section className="intro-section">
      <h2>Kom i gang</h2>
      <p>Se denne introduksjonen til Sass, den mest populære CSS preprocessor:</p>

      <a
        className="intro-video-link"
        href="https://www.youtube.com/watch?v=akDIJa0AP5c"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="intro-video-icon">▶</span>
        <span>Sass Tutorial for Beginners</span>
        <FontAwesomeIcon icon={faExternalLink} />
      </a>
    </section>
  </div>
);
