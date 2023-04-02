import { combineReducers } from '@reduxjs/toolkit';

import { productReducer } from 'store/product/slice';

const rootReducer = combineReducers({
  product: productReducer,
});

export { rootReducer };
