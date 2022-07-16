import { RootState } from "../../index";
import { createSelector } from "reselect";

const ErrorSelector = (state: RootState) => state.errorSlice;

export const selectErrorStatus = createSelector(
  ErrorSelector,
  (state) => state.hasError
);

export const selectErrorMessage = createSelector(
    ErrorSelector,
  (state) => state.errorMessage
);
