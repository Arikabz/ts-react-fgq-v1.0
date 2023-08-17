import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataFetched: false,
    Week: -1,
    Games: [],
}

export const weekSlice = createSlice({
    name: 'week',
    initialState,
    reducers:{
        setWeekData: (state, action) => {
            state.dataFetched = true;
            state.Week = action.payload.Week;
            state.Games = action.payload.Games;
        }
    }
})

export const { setWeekData } = weekSlice.actions;

export default weekSlice.reducer;
