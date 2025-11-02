import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PostsData, PostsState } from './types.ts';

const initialState: PostsState = {
    posts:[],
}satisfies PostsState as PostsState;

export const postsSlice = createSlice({
    name: 'posts',
    initialState:initialState,
    reducers:{
        addNewPost:(state, action:PayloadAction<PostsData>) => {
            state.posts.push(action.payload);
        },
    },
});

export const { addNewPost } = postsSlice.actions;

export default postsSlice.reducer;