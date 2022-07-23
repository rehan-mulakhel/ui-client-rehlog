import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { useGetArticleQuery } from '../../services/article';
import './ArticleView.scss';

export const ArticleView = () => {
  const params = useParams();
  const [contentHtml, setContentHtml] = useState('');
  const { data, error, isLoading } = useGetArticleQuery(params.slug);

  useEffect(() => {
    if (!error && !isLoading) {
      setContentHtml(DOMPurify.sanitize(marked.parse(data.content)));
    }
  }, [data]);

  return (
    <div id="article-view">
      {error ? (
        <>Error occured</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h1>{data.name}</h1>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </>
      ) : null}
    </div>
  );
};
