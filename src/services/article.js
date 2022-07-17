import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => '/articles/list',
    }),
    getArticle: builder.query({
      query: (id) => `articles/${id}`,
    }),
  }),
});

export const { useGetArticleQuery, useGetAllQuery } = articleApi;
