import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FlexboxVsGridIntro.css';

export const FlexboxVsGridIntro = () => (
  <div className="intro-page">
    <h1 className="intro-title">Flexbox vs Grid</h1>

    <section className="intro-section">
      <h2>When to Use Which?</h2>
      <p>
        Both <strong>Flexbox</strong> and <strong>CSS Grid</strong> are powerful layout systems,
        but they excel in different scenarios. Understanding when to use each will make your
        layouts more elegant and maintainable.
      </p>

      <h2>Get Started</h2>
      <p>Watch this excellent comparison of Flexbox and Grid:</p>

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

    <section className="intro-section">

      <h3>Flexbox</h3>
      <ul className="intro-list">
        <li>
          <strong>One-dimensional layouts</strong> — Arranging items in a row OR a column
        </li>
        <li>
          <strong>Content-driven sizing</strong> — When item sizes should be based on their content
        </li>
        <li>
          <strong>Alignment & distribution</strong> — Centering, spacing, and aligning items
        </li>
        <li>
          <strong>Navigation bars, toolbars, card footers</strong> — Classic flexbox use cases
        </li>
      </ul>

      <h3>CSS Grid</h3>
      <ul className="intro-list">
        <li>
          <strong>Two-dimensional layouts</strong> — Controlling both rows AND columns simultaneously
        </li>
        <li>
          <strong>Layout-driven sizing</strong> — When the grid structure should dictate item sizes
        </li>
        <li>
          <strong>Overlapping elements</strong> — Placing items in the same grid cells
        </li>
        <li>
          <strong>Dashboards, galleries, page layouts</strong> — Classic grid use cases
        </li>
      </ul>

    </section>

  </div>
);
