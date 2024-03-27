import { Header, Footer, Map } from './components';
import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.app__main}>
        <Map />
      </main>

      <Footer />
    </div>
  );
};
