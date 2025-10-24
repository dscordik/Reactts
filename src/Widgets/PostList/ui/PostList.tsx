import PostCard from '../../PostCard/ui/PostCard.tsx';
import type { PostListProps } from '../PostListTypes/PostList.ts';


const PostList = (props:PostListProps) => {
    const { posts,deletePost } = props;
    return (
        <div>
            {posts.map((post) => <PostCard deletePost={deletePost} key={post.id} post={post}/>)}
        </div>
    );
};

export default PostList;

