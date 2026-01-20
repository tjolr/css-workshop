interface TemplateProps {
  styles: Record<string, string>;
}

const images = [
  { id: 1, color: "#e94560", label: "Bilde 1" },
  { id: 2, color: "#0f3460", label: "Bilde 2" },
  { id: 3, color: "#16213e", label: "Bilde 3" },
  { id: 4, color: "#533483", label: "Bilde 4" },
  { id: 5, color: "#2c7873", label: "Bilde 5" },
];

export const Template = ({ styles }: TemplateProps) => (
  <div className={styles.container}>
    <h3 className={styles.title}>Horisontalt Galleri</h3>
    <p className={styles.hint}>Scroll horisontalt for å se alle bildene</p>
    <div className={styles.gallery}>
      {images.map((img) => (
        <div
          key={img.id}
          className={styles.slide}
          style={{ backgroundColor: img.color }}
        >
          <span className={styles.slideLabel}>{img.label}</span>
        </div>
      ))}
    </div>
  </div>
);
