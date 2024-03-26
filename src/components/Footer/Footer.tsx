import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <img
          src="https://mocoding.com/mocoding_footer_word_logo-OyCAU7U2.png"
          alt="Mocoding logo"
        />
      </div>

      <div>
        <span>Made by</span>

        <a href="https://t.me/KatOlista" className={styles.footer__katolista}>
          @KatOlista
        </a>
      </div>
    </footer>
  );
};
