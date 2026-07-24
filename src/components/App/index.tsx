import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Header } from '../Header';
import { Content } from '../Content';
import styles from './App.module.scss';

export const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className={styles.app}>
        <Header onSearch={setSearchQuery} />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Content searchQuery={searchQuery} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
