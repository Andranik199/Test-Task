import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {charactersSlice} from './slices/characters'
import {useDispatch} from "react-redux";
import {errorSlice} from "./slices/errors";


const reducers = combineReducers({
    [charactersSlice.name]: charactersSlice.reducer,
    [errorSlice.name]: errorSlice.reducer,
})
const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        [
            ...getDefaultMiddleware({
                serializableCheck: false,
            }),
        ] as ReturnType<typeof getDefaultMiddleware>,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export default store
