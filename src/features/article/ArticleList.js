import React from 'react';
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
            return <li key={i}>{article.name}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
};
