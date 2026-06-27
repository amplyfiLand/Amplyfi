import { landingContent } from "@/shared/config/landingContentClean";
import styles from "./StatsBar.module.scss";

export function StatsBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bar}>
        {landingContent.stats.map((stat, index) => (
          <div key={stat.value} className={styles.item}>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
            {index < landingContent.stats.length - 1 && (
              <div className={styles.divider} aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
