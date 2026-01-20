import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NestingIntro.css';

export const NestingIntro = () => (
  <div className="intro-page">
    <h1 className="intro-title">CSS Nesting</h1>

    <section className="intro-section">
      <h2>What is CSS Nesting?</h2>
      <p>
        CSS Nesting allows you to write selectors that mirror your HTML structure,
        making stylesheets more readable and maintainable. Instead of repeating parent
        selectors, you can nest child rules directly inside their parents.
      </p>

      <p>Key benefits of CSS Nesting:</p>

      <ul className="intro-list">
        <li>
          <strong>Cleaner code</strong> — Group related styles together logically
        </li>
        <li>
          <strong>Less repetition</strong> — No need to repeat parent selectors
        </li>
        <li>
          <strong>Better organization</strong> — Styles mirror HTML structure
        </li>
        <li>
          <strong>Native support</strong> — Now available in modern browsers without preprocessors
        </li>
      </ul>

      <p className="intro-note">
        Note: CSS Nesting was traditionally only available in preprocessors like Sass,
        but is now natively supported in CSS. The syntax is slightly different from Sass nesting.
      </p>
    </section>

    <section className="intro-section">
      <h2>Get Started</h2>
      <p>Watch this introduction to CSS Nesting:</p>

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
