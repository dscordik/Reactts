import type { Posts } from '../../PostList/PostListTypes/PostList.ts';

export interface postcard {
    post:Posts,
    deletePost:(id:string) => void
}