import { personal } from '../data';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>{personal.name} · {personal.location}</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
