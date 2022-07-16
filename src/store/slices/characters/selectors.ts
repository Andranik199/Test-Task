import { RootState } from "../../index";
import { createSelector } from "reselect";

const CharactersSelector = (state: RootState) => state.charactersSlice;

export const selectCharacters = createSelector(
  CharactersSelector,
  (state) => state.items
);

export const selectTotalCount = createSelector(
  CharactersSelector,
  (state) => state.totalCount
);

export const selectPerCharachter = createSelector(
  CharactersSelector,
  (state) => state.character
);
