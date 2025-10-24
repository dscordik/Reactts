export interface Posts{
    id:string,
    title:string,
    body:string
}
export interface PostListProps {
    posts:Posts[],
    deletePost:(id:string) => void
}