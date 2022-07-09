import React from 'react';
import './App.scss';
import { ArticleList } from './features/article/ArticleList';

const App = () => {
  return (
    <div className="App">
      <header id="main-header">Rehlog</header>
      <main>
        <ArticleList />
      </main>
      <footer id="main-footer">
        <p>© 2022 Rehan Mulakhel</p>
      </footer>
    </div>
  );
};

export default App;
