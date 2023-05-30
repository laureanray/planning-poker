import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <h1 className="text-red-500 font-bold text-3xl"> Hello Solid! </h1>
    </div>
  );
};

export default App;
