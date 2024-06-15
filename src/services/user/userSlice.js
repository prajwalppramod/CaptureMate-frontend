import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            if(action.payload !== null) {
                state.user = action.payload;
                localStorage.setItem('user', JSON.stringify(action.payload));
            }
            else {
                state.user = null;
                localStorage.removeItem('user');
            }
        },
        setOnboarded: (state, action) => {
            state.user = {...state.user, onboarded: action.payload};
            localStorage.setItem('user', JSON.stringify(state.user));
        }
    },
})

export const { setUser, setOnboarded } = userSlice.actions

export default userSlice.reducer