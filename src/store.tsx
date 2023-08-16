import { configureStore } from "@reduxjs/toolkit";
import { weekApi } from "./slices/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query"

export const store = configureStore({
    reducer: {
        [weekApi.reducerPath]: weekApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weekApi.middleware)
}); 

setupListeners(store.dispatch)
