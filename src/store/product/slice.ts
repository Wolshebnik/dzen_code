import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

const productInitialState = {
  option: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState: productInitialState,
  reducers: {
    setOption: (state, { payload }: PayloadAction<string>) => {
      state.option = payload;
    },
  },
});

export const getProductOption = (state: RootState) => state.product.option;

const {
  reducer: productReducer,
  actions: { setOption },
} = productSlice;

export { productReducer, setOption };
