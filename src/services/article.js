import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/assets/' }),
  endpoints: (builder) => ({
    getArticleBySlug: builder.query({
      query: (slug) => `article-${slug}.json`,
    }),
    getArticles: builder.query({
      query: () => 'article-list.json',
    }),
  }),
});

export const { useGetArticleBySlugQuery, useGetArticlesQuery } = articleApi;
