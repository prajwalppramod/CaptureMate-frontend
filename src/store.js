import { configureStore } from '@reduxjs/toolkit'
import { userApi } from './services/user/userApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import userReducer from './services/user/userSlice'
import photoReducer from './services/photo/photoSlice'
import { photoApi } from './services/photo/photoApi'

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [photoApi.reducerPath]: photoApi.reducer,
        'user': userReducer,
        'photo': photoReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware).concat(photoApi.middleware),
})

setupListeners(store.dispatch)