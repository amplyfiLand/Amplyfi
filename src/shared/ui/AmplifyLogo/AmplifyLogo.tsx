import { landingContent } from "@/shared/config/landingContentClean";
import styles from "./AmplifyLogo.module.scss";

type AmplifyLogoProperties = {
  gradientId: string;
  markWidth?: number;
  markHeight?: number;
};

export function AmplifyLogo({
  gradientId,
  markWidth = 104,
  markHeight = 46
}: AmplifyLogoProperties) {
  return (
    <div className={styles.logo}>
      <svg
        width={markWidth}
        height={markHeight}
        viewBox="0 0 186.595 82.678"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0.25" stopColor="#FF2D87" />
            <stop offset="0.32" stopColor="#FD4A97" />
            <stop offset="0.44" stopColor="#F997C2" />
            <stop offset="0.57" stopColor="#F5F5F7" />
          </linearGradient>
        </defs>
        <path
          className={styles.mark}
          d="M 186.595 82.678 L 176.327 82.678 L 131.733 37.004 L 116.85 51.713 L 77.594 10.597 L 10.154 82.678 L 0 82.678 L 77.519 0 L 116.772 41.119 L 131.654 26.41 L 186.595 82.678 Z"
          fill={`url(#${gradientId})`}
        />
      </svg>
      <div className={styles.text}>
        <span className={styles.name}>{landingContent.brand.name}</span>
        <span className={styles.tagline}>{landingContent.brand.tagline}</span>
      </div>
    </div>
  );
}
