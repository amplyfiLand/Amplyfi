import { landingAssets, LandingAssetKey } from "@/shared/assets/landingAssets";
import styles from "./MountainDivider.module.scss";

export function MountainDivider() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div
          className={styles.background}
          style={{ backgroundImage: `url(${landingAssets[LandingAssetKey.MountainDivider]})` }}
          aria-hidden="true"
        />
        <div className={styles.logoMark} aria-hidden="true">
          <svg width="391" height="171" viewBox="0 0 391 171">
            <defs>
              <linearGradient id="lg-divider" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0.26" stopColor="#FF2D87" />
                <stop offset="0.32" stopColor="#FD4A97" />
                <stop offset="0.44" stopColor="#F997C2" />
                <stop offset="0.56" stopColor="#F5F5F7" />
              </linearGradient>
            </defs>
            <path
              d="M 391 171 L 369.484 171 L 276.038 76.534 L 244.853 106.956 L 162.593 21.917 L 21.277 171 L 0 171 L 162.436 0 L 244.689 85.045 L 275.874 54.623 L 391 171 Z"
              fill="url(#lg-divider)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
