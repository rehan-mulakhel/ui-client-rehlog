import React, { useEffect, useState } from 'react';
import './App.scss';
import { ArticleList } from './features/article/ArticleList';

const App = () => {
  const [currentYear, setCurrentYear] = useState(0);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="App">
      <header id="main-header">Rehlog</header>
      <main>
        <ArticleList />
      </main>
      <footer id="main-footer">
        <p>© {currentYear} Rehan Mulakhel</p>
      </footer>
    </div>
  );
};

export default App;
