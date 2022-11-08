import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Languages {
  name: string;
  isFavorite: boolean;
}

const INITIAL_STATE: Languages[] = [
  { name: "JAVA", isFavorite: false },
  { name: "C#", isFavorite: false },
  { name: "JAVASCRIPT", isFavorite: false },
];

const sliceLanguages = createSlice({
  name: "languages",
  initialState: INITIAL_STATE,
  reducers: {
    addLanguage(state, { payload }: PayloadAction<string>) {
      return [...state, { name: payload, isFavorite: false }];
    },
    turnLanguageToFavorite(state, { payload }: PayloadAction<string>) {
      return state.map((item) =>
        item.name === payload
          ? { ...item, isFavorite: !item.isFavorite }
          : { ...item, isFavorite: false }
      );
    },
  },
});

export default sliceLanguages.reducer;
export const { addLanguage, turnLanguageToFavorite } = sliceLanguages.actions;

export const useLanguages = (state: any) => {
  return state.languages as Languages[];
};
