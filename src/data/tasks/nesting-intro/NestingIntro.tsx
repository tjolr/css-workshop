import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NestingIntro.css';

export const NestingIntro = () => (
  <div className="intro-page">
    <h1 className="intro-title">CSS Nesting</h1>

    

    <section className="intro-section">
      <h2>Kom i gang</h2>
      <p>Se denne introduksjonen til CSS Nesting:</p>

      <a
        className="intro-video-link"
        href="https://www.youtube.com/watch?v=h4Xp1QgNkhU"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="intro-video-icon">▶</span>
        <span>CSS Nesting Tutorial</span>
        <FontAwesomeIcon icon={faExternalLink} />
      </a>
    </section>
  </div>
);
