import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
  endpoints: (builder) => ({
    getContacts: builder.mutation({
      query: (_) => {
        return {
          url: "/get-contacts",
          method: "get",
        };
      },
    }),
  }),
});

export const {
    useGetContactsMutation
} = userApi;
