import React from 'react';
import { NavLink } from 'react-router-dom';
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
          {data.map((article, i) => {
            return (
              <NavLink key={i} to={`/${article.aid}`}>
                <li>
                  <b>{article.name}</b> • {article.description}
                </li>
              </NavLink>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};
