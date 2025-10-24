export interface createpostform{
    createPost:(title:string, body:string) => void,
    otherProps?:unknown
}