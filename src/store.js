import { configureStore } from '@reduxjs/toolkit'
import { userApi } from './services/user/userApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import userReducer from './services/user/userSlice'

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        'user': userReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
})

setupListeners(store.dispatch)