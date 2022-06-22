import { combineReducers,configureStore } from '@reduxjs/toolkit';
// ...
import landingPageReducer from './landingPage';

const rootReducer = combineReducers({
  landingPage:landingPageReducer
});

export const store = configureStore({
  reducer: rootReducer 
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>


export type AppDispatch = typeof store.dispatch