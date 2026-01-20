interface TemplateProps {
  styles: Record<string, string>;
}

const articles = [
  {
    id: 1,
    title: "Introduksjon til CSS Grid",
    excerpt:
      "CSS Grid er et kraftig layout-system som lar deg lage komplekse, todimensjonale layouter med letthet. I motsetning til Flexbox, som primært håndterer én dimensjon om gangen, gir Grid deg full kontroll over både rader og kolonner samtidig. Dette gjør det ideelt for sideoppsett og komplekse komponentstrukturer.",
  },
  {
    id: 2,
    title: "Flexbox Best Practices",
    excerpt:
      "Lær de beste praksisene for å bruke Flexbox i moderne webdesign. Fra å sentrere elementer til å lage responsive navigasjonsbarer, Flexbox er et uunnværlig verktøy for enhver frontend-utvikler. Vi dekker align-items, justify-content, flex-wrap og mye mer i denne omfattende guiden.",
  },
  {
    id: 3,
    title: "CSS Custom Properties which might have a very long title",
    excerpt:
      "CSS variabler, også kjent som custom properties, revolusjonerer måten vi skriver CSS på. De gir oss muligheten til å definere gjenbrukbare verdier som kan oppdateres dynamisk med JavaScript, noe som åpner for kraftige tema-systemer og interaktive design.",
  },
];

export const Template = ({ styles }: TemplateProps) => (
  <div className={styles.container}>
    <div className={styles.grid}>
      {articles.map((article) => (
        <article key={article.id} className={styles.card}>
          <h3 className={styles.cardTitle}>{article.title}</h3>
          <p className={styles.cardExcerpt}>{article.excerpt}</p>
          <a href="#" className={styles.readMore}>
            Les hele artikkelen
          </a>
        </article>
      ))}
    </div>
  </div>
);
