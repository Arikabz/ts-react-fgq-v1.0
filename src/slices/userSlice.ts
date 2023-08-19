import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    name: '',
    userID: '',
    leagueID: '',
}

export const userSlice = createSlice({
    name: 'week',
    initialState,
    reducers:{
        setAuthData: (state, action) => {
            state.email = action.payload.email;
            state.name= action.payload.name;
        },
        setOtherData: (state, action) => {
            state.userID = action.payload.userID;
            state.leagueID = action.payload.leagueID;
        },
    }
})

export const { setAuthData } = userSlice.actions;

export default userSlice.reducer;
