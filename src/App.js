import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.scss';
import { ArticleCreate } from './features/article/ArticleCreate';
import { ArticleEdit } from './features/article/ArticleEdit';
import { ArticleView } from './features/article/ArticleView';
import { Homepage } from './features/home/Homepage';

const App = () => {
  const [currentYear, setCurrentYear] = useState(0);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="App">
      <header id="main-header">
        <Container>
          <Row>
            <Col xss={2}>.</Col>
            <Col xss={8}>
              <Link to="/">Rehlog</Link>
            </Col>
            <Col xss={2}>.</Col>
          </Row>
        </Container>
      </header>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/create" element={<ArticleCreate />} />
            <Route path=":slug" element={<ArticleView />} />
            <Route path=":slug/edit" element={<ArticleEdit />} />
          </Routes>
        </main>
        <footer id="main-footer">
          <p>© {currentYear} Rehan Mulakhel</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
