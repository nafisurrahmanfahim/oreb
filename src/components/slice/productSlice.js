import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  catrItem: [],
}

export const productSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let findProduct = state.catrItem.findIndex((item)=> item.id == action.payload.id);
      state.addToCart = action.payload
      if(findProduct !== 1) {
        console.log("full details");
      } else{
        console.log("quntiti");
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = productSlice.actions

export default productSlice.reducer