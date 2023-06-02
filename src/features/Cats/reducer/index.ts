import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { request } from "../../Common/services/request";
import { ICatsCategory, ICatsData } from "../interfaces";

export interface ICatsState {
  cats: ICatsData[];
  isLoading: boolean;
  catsCategories: ICatsCategory[] | null;
  selectedCategoryId: number | null;
  currentPage: number
}

const initialState: ICatsState = {
  cats: [],
  isLoading: false,
  catsCategories: null,
  selectedCategoryId: null,
  currentPage: 1
};

export const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    setCatsData: (state, action) => {
      const currentData = state.currentPage > 1 ? state.cats : [];
      state.cats =  [...currentData, ...action.payload];
      state.isLoading = false;
    },
    setCatsCategories: (state, action) => {
      state.catsCategories = action.payload;
      state.isLoading = false;
    },
    setSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  setIsLoading,
  setCatsData,
  setCatsCategories,
  setSelectedCategoryId,
  setCurrentPage
} = catsSlice.actions;

export default catsSlice.reducer;
