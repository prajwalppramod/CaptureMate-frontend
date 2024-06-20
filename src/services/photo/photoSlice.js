import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    photoId: null,
    recipients: []
}

export const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {
        setPhotoId: (state, action) => {
            state.photoId = action.payload;
        },
        setRecipients: (state, action) => {
            state.recipients = action.payload;
        },
        removeRecipient: (state, action) => {
            state.recipients = state.recipients.filter(recipient => recipient.userId !== action.payload);
        }
    },
})

export const { setRecipients, removeRecipient, setPhotoId } = photoSlice.actions

export default photoSlice.reducer