import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postsReducer from '../../Entities/PostsSlice/model/postsSlice.ts';

const reducer = combineReducers({
    posts: postsReducer,
});

export const store  = configureStore({
    reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store