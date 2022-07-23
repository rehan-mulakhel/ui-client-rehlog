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
    editArticle: builder.mutation({
      query: ({ id, form }) => ({
        url: `/articles/${id}/edit`,
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
    getArticleEdit: builder.query({
      query: (id) => `articles/${id}/edit`,
    }),
  }),
});

export const {
  useCreateArticleMutation,
  useEditArticleMutation,
  useGetArticleQuery,
  useGetArticleEditQuery,
  useGetAllQuery,
} = articleApi;
