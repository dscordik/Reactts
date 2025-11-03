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
        deletePost(state, action:PayloadAction<string>) {
            (state.posts = state.posts.filter((item) => item.id !== action.payload));
        },
    },
});

export const { addNewPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;