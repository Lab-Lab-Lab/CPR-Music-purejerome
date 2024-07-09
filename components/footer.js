import Link from 'next/link';
import styles from '../styles/footer.module.css';

function Footer() {
  return (
    <div className={styles.outerFooter}>
      <nav className={styles.innerFooter}>
        <ul className={styles.navList}>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>Contact</li>
          <li>Credits</li>
          <li>
            <Link href="https://dukesfunder.jmu.edu/project/30270">
              Learn More
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.bottomFooter}>
        <Link href="https://www.jmu.edu/index.shtml">
          Project from James Madison University
        </Link>
      </div>
    </div>
  );
}
export default Footer;
