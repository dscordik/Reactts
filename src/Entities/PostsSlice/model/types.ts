export interface PostsData {
    id:string;
    title:string;
    body:string;
    isDone:boolean;
}
export interface PostsState{
    posts: PostsData[]
}
