import { createSlice } from "@reduxjs/toolkit";
const ProdactsSlice = createSlice({
  initialState: [],
  name: "ProdactsSlice",
  reducers: {
    // addProduct: (product, action) => {
    //   const itemIndex = product.findIndex(item => {
    //     return item.id === action.payload.id;
    //   });
    //   if (itemIndex >= 0) {
    //     product[itemIndex].cartQuantity+=1;
    //   } else {
    //     const tempProduct = { ...action.payload, cartQuantity: 1};
    //     product.push(tempProduct);
    //   }
    // },
    addProduct: (product, action) => {
      product.push(action.payload);
    },
    removeProduct: (product, action) => {
      return product.filter((prod) => {
        return prod.id != action.payload;
      });
      // product.push(action.payload);
    },
    clareProduct: (product,) => {
      return (product = []);
    },
  },
});
export default ProdactsSlice.reducer;
export const { addProduct, clareProduct, removeProduct } = ProdactsSlice.actions;
