import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useGetAllQuery } from '../../services/article';
import './ArticleList.scss';

export const ArticleList = (props) => {
  const { data, error, isLoading } = useGetAllQuery();

  return (
    <div id="article-list">
      {error ? (
        <>Error occured</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <ul>
          {data
            .filter((article) => article.aid != props.currentAid)
            .map((article, i) => {
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

ArticleList.propTypes = {
  currentAid: PropTypes.string,
};
