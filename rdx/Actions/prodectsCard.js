import { createSlice } from "@reduxjs/toolkit";
const ProdactsSlice = createSlice({
  initialState: [],
  name: "ProdactsSlice",
  reducers: {
    addProduct: (product, action) => {
      product.push(action.payload);
    },
    clareProduct: (product, action) => {
      return product = [];
    },
  },
});
export default ProdactsSlice.reducer;
export const { addProduct, clareProduct } = ProdactsSlice.actions;
