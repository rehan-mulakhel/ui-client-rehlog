import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.scss';
import { ArticleList } from './features/article/ArticleList';
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
        <Link to="/">Rehlog</Link>
      </header>
      <div>
        <Container>
          <Row>
            <Col md={4}>
              <ArticleList />
            </Col>
            <Col md={8}>
              <main>
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path=":slug" element={<ArticleView />} />
                </Routes>
              </main>
            </Col>
          </Row>
        </Container>
        <footer id="main-footer">
          <p>© {currentYear} Rehan Mulakhel</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
