// import viteLogo from '/vite.svg';
import { Header, Footer } from './components';
import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.app__main}></main>

      <Footer />
    </div>
  );
};
