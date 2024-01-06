import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/user",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getContacts: builder.mutation({
      query: (_) => {
        return {
          url: "/get-contacts",
          method: "get",
        };
      },
    }),
    getProfile: builder.mutation({
      query: (_) => {
        return {
          url: "/get-profile",
          method: "get",
        };
      },
    }),
  }),
});

export const { useGetContactsMutation, useGetProfileMutation } = userApi;
