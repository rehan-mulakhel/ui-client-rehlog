import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    createArticle: builder.mutation({
      query: (form) => ({
        url: '/articles/create',
        method: 'POST',
        body: form,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }),
    }),
    getAll: builder.query({
      query: () => '/articles/list',
    }),
    getArticle: builder.query({
      query: (id) => `articles/${id}`,
    }),
  }),
});

export const { useCreateArticleMutation, useGetArticleQuery, useGetAllQuery } =
  articleApi;
