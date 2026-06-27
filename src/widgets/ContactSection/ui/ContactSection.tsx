import { landingAssets, LandingAssetKey } from "@/shared/assets/landingAssets";
import { landingContent } from "@/shared/config/landingContentClean";
import { AmplifyLogo } from "@/shared/ui/AmplifyLogo/AmplifyLogo";
import styles from "./ContactSection.module.scss";

export function ContactSection() {
  return (
    <div className={styles.wrapper} id="contact">
      <div className={styles.inner}>
        <div
          className={styles.background}
          style={{ backgroundImage: `url(${landingAssets[LandingAssetKey.ContactMountain]})` }}
          aria-hidden="true"
        />
        <div className={styles.overlay} aria-hidden="true" />
        <div className={styles.logoRow}>
          <AmplifyLogo gradientId="logo-contact" />
        </div>
        <h2 className={styles.title}>{landingContent.contact.title}</h2>
        <div className={styles.details}>
          <a href={`tel:${landingContent.contact.phone}`} className={styles.contactLine}>
            {landingContent.contact.phone}
          </a>
          <a href={`mailto:${landingContent.contact.email}`} className={styles.contactLine}>
            {landingContent.contact.email}
          </a>
        </div>
        <a href={`mailto:${landingContent.contact.email}`} className={styles.cta}>
          {landingContent.contact.cta}
        </a>
      </div>
    </div>
  );
}
