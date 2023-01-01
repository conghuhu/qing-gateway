import { useState } from 'react';
import logo from '@/assets/logo.png';
import styles from './index.module.css';

export default function Home() {
  const [count, setCount] = useState(1);
  const updateCount = () => setCount((c) => c + 1);

  return (
    <div className={styles.app}>
      <header>
        <img src={logo} alt="logo" />
        <p>
          Welcome to Qing Gateway
        </p>
      </header>
      <main>
        <button className={styles.button} type="button" onClick={updateCount}>
          👍🏻 {count}
        </button>
      </main>
    </div>
  );
}
