import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "components/Main/Characters/types";

export type Characters = Array<Character>;

type InitialState = {
  items: Characters;
  totalCount: number;
  character: Character;
};

const initialState: InitialState = {
  items: [],
  totalCount: 0,
  character: {} as Character,
};
export const charactersSlice = createSlice({
  name: "charactersSlice",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Characters>) => {
      return {
        ...state,
        items: action.payload,
      };
    },
    setTotalCount: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        totalCount: action.payload,
      };
    },
    setPerCharachter: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        character: action.payload,
      };
    },
  },
});
