import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__section}>
        <div className={styles.header__letter}>
          <img
            src="https://mocoding.com/M_logo-CPEduoUq.png"
            srcSet="https://mocoding.com/M_logo-DqIicg9u.png"
            alt="m_logo"
            className={styles.header__img}
          />
        </div>

        <div className={styles.header__word}>
          <img
            src="https://mocoding.com/ocoding_logo-BmZ43o3z.png"
            srcSet="https://mocoding.com/ocoding_logo-DBIAwYwm.png"
            alt="ocoding_logo"
            className={styles.header__img}
          />
        </div>
      </div>

      <h1 className={styles.header__title}>Global sea heat map</h1>

      <div className={styles.header__section}>
        <button className={styles.header__button}>Export map</button>
      </div>
    </header>
  );
};
