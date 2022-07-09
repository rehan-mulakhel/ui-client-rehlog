import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/assets/' }),
  endpoints: (builder) => ({
    getArticleById: builder.query({
      query: (id) => `article-${id}.json`,
    }),
    getArticles: builder.query({
      query: () => 'article-list.json',
    }),
  }),
});

export const { useGetArticleByIdQuery, useGetArticlesQuery } = articleApi;
