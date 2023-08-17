import { configureStore } from "@reduxjs/toolkit";
import { weekApi } from "./slices/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import weekNumReducer from './slices/weekNumSlice'
import weekReducer from './slices/weekSlice'

export const store = configureStore({
    reducer: {
        [weekApi.reducerPath]: weekApi.reducer,
        weekNum: weekNumReducer,
        week: weekReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weekApi.middleware)
}); 


setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
