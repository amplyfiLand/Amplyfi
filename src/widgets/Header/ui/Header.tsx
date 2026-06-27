import { AmplifyLogo } from "@/shared/ui/AmplifyLogo/AmplifyLogo";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <a href="#" aria-label="Amplify home">
        <AmplifyLogo gradientId="logo-header" />
      </a>
    </header>
  );
}
