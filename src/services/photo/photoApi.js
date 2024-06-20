import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const photoApi = createApi({
    reducerPath: 'photoApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL ?? 'http://localhost:3000/'}),
    endpoints: (builder) => ({
        recognize: builder.mutation({
            query: (body) => ({
                url: 'recognize/recognize',
                method: 'POST',
                body,
            }),
        }),
        send: builder.mutation({
            query: (body) => ({
                url: 'recognize/send',
                method: 'POST',
                body,
            }),
        }),
        getPhotos: builder.query({
            query: ({userId}) => ({
                url: 'recognize/photos',
                params: {
                    userId,
                },
            }),
        }),
        getChat: builder.query({
            query: ({userId, friendId}) => ({
                url: 'recognize/chat',
                params: {
                    userId,
                    friendId,
                },
            }),
        }),
    }),
})

export const { useRecognizeMutation, useSendMutation, useGetPhotosQuery, useGetChatQuery } = photoApi