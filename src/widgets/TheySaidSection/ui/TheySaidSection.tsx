import { landingContent } from "@/shared/config/landingContentClean";
import styles from "./TheySaidSection.module.scss";

export function TheySaidSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{landingContent.theySaid.eyebrow}</p>
        <div className={styles.list}>
          {landingContent.theySaid.items.map((item) => (
            <div key={item.objection} className={styles.item}>
              <div className={styles.objectionBox}>
                <span className={styles.objectionText}>{item.objection}</span>
              </div>
              <p className={styles.responseText}>{item.response}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
