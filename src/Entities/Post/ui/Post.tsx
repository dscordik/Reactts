import type { PostProps } from '../PostTypes/Post.ts';
const Post = (props:PostProps) => {
    const { post, ...otherProps } = props;
    return (
        <div {...otherProps}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;