import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PreprocessorsIntro.css';

export const PreprocessorsIntro = () => (
  <div className="intro-page">
    <h1 className="intro-title">CSS Preprocessors</h1>

    <section className="intro-section">
      <h2>Why Preprocessors?</h2>
      <p>
        CSS preprocessors like <strong>Sass</strong>, <strong>Less</strong>, and <strong>Stylus</strong> extend
        CSS with powerful features that make stylesheets more maintainable, organized, and efficient.
      </p>

      <p>They solve common CSS pain points:</p>

      <ul className="intro-list">
        <li>
          <strong>Variables</strong> — Define colors, fonts, and sizes once, reuse everywhere
        </li>
        <li>
          <strong>Nesting</strong> — Write selectors that mirror your HTML structure
        </li>
        <li>
          <strong>Mixins</strong> — Create reusable blocks of styles (like functions)
        </li>
        <li>
          <strong>Partials & Imports</strong> — Split styles into manageable files
        </li>
        <li>
          <strong>Math & Functions</strong> — Calculate values dynamically
        </li>
      </ul>

      <p className="intro-note">
        Note: Modern CSS now supports many of these features natively (like CSS variables and nesting),
        but preprocessors still offer additional power and are widely used in production.
      </p>
    </section>

    <section className="intro-section">
      <h2>Get Started</h2>
      <p>Watch this introduction to Sass, the most popular CSS preprocessor:</p>

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
