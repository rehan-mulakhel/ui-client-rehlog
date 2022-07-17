import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import { useGetAllQuery } from '../../services/article';
import './ArticleList.scss';

export const ArticleList = () => {
  const { data, error, isLoading } = useGetAllQuery();

  return (
    <div id="article-list">
      {error ? (
        <>Error occured</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <ul>
          <li>
            <Link to="/create">
              <Button variant="primary">Create new article</Button>
            </Link>
          </li>
          {data.map((article, i) => {
            return (
              <li key={i}>
                <NavLink
                  to={`/${article.aid}`}
                  style={({ isActive }) => ({
                    borderLeft: isActive ? '8px solid #000' : '8px solid #fff',
                  })}
                >
                  {article.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};
