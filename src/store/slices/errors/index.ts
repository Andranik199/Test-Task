import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    hasError: boolean;
    errorMessage: string;
};

const initialState: InitialState = {
  hasError: false,
  errorMessage: ''
};
export const errorSlice = createSlice({
  name: "errorSlice",
  initialState,
  reducers: {
    setErrorMessage: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        errorMessage: action.payload,
      };
    },
    setErrorStatus: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        hasError: action.payload,
      };
    },
  },
});
