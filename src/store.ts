import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
})

// take the store.getState and return it to generate/infer the type of the state
export type RootState = ReturnType<typeof store.getState>;
//  return the type of the actions from the store
export type AppDispatch = typeof store.dispatch;
// define the type of redux thunk action
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;