import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGetArticlesQuery } from '../../services/article';
import './ArticleList.scss';

export const ArticleList = () => {
  const { data, error, isLoading } = useGetArticlesQuery();

  return (
    <div id="article-list">
      {error ? (
        <>Error occured</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <ul>
          {data.map((article, i) => {
            return (
              <li key={i}>
                <NavLink
                  to={`/${article.slug}`}
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
