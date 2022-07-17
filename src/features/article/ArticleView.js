import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetArticleQuery } from '../../services/article';
import './ArticleView.scss';

export const ArticleView = () => {
  const params = useParams();
  const { data, error, isLoading } = useGetArticleQuery(params.slug);

  return (
    <div id="article-list">
      {error ? (
        <>Error occured</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      ) : null}
    </div>
  );
};
