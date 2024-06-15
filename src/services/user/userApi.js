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
        addProfilePicture: builder.mutation({
            query: (body) => ({
                url: 'user/profile-picture',
                method: 'POST',
                params: {
                    userId: body.userId,
                },
                body: body.formData,
            }),
        }),
        addOnboardingPicture: builder.mutation({
            query: (body) => ({
                url: 'user/onboarding',
                method: 'POST',
                params: {
                    userId: body.userId,
                },
                body: body.formData,
            }),
        }),
        findPeople: builder.query({
            query: (filter) => ({
                url: 'user/people',
                params: {
                    query: filter,
                },
            }),
        }),
        getFriends: builder.query({
            query: (userId) => ({
                url: 'user/friends',
                params: {
                    userId,
                },
            }),
        }),
        addFriend: builder.mutation({
            query: (userId, friendId) => ({
                url: `user/friends`,
                method: 'POST',
                body: { userId, friendId },
            }),
        }),
    }),
})

export const { useRegisterUserMutation, useLoginUserMutation, useAddProfilePictureMutation, useAddFriendMutation, useFindPeopleQuery, useGetFriendsQuery, useAddOnboardingPictureMutation } = userApi