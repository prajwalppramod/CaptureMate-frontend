import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL ?? 'http://localhost:3000/'}),
    endpoints: (builder) => ({
        // getPokemonByName: builder.query({
        // query: (name) => `pokemon/${name}`,
        // }),
        registerUser: builder.mutation({
            query: (body) => ({
            url: 'user/register',
            method: 'POST',
            body,
            }),
        }),
        loginUser: builder.mutation({
            query: (body) => ({
                url: 'user/login',
                method: 'POST',
                body,
            }),
        }),
    }),
})

export const { useRegisterUserMutation, useLoginUserMutation } = userApi