import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { ArticleList } from './ArticleList';
import { useGetArticleQuery } from '../../services/article';
import './ArticleView.scss';

export const ArticleView = () => {
  const params = useParams();
  const [contentHtml, setContentHtml] = useState('');
  const { data, error, isLoading } = useGetArticleQuery(params.slug);

  const config = {
    loader: { load: ['[tex]/html'] },
    tex: {
      inlineMath: [['$', '$']],
      displayMath: [['$$', '$$']],
    },
  };

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
          <MathJaxContext version={3} config={config}>
            <MathJax>
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </MathJax>
          </MathJaxContext>
          <aside>
            <hr />
            <h2>Autres articles</h2>
            <ArticleList />
          </aside>
        </>
      ) : null}
    </div>
  );
};
