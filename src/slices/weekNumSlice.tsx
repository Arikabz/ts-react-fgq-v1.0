import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weekNum: -1,
}

export const weekNumSlice = createSlice({
    name: 'weekNum',
    initialState,
    reducers:{
        setWeekNum: (state, action) => {
            state.weekNum = action.payload.weekNum;
        }
    }
})

export const {setWeekNum} = weekNumSlice.actions;

export default weekNumSlice.reducer; 
