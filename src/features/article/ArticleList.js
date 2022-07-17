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
