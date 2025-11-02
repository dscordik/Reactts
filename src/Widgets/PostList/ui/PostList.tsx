import PostCard from '../../PostCard/ui/PostCard.tsx';
import type { PostListProps } from '../PostListTypes/PostList.ts';
import {  useAppSelector } from '../../../App/HooksRTK/hooksRTK.ts';
import type { RootState } from '../../../App/store/store.ts';

const PostList = (props:PostListProps) => {

    const postsRTK = useAppSelector((state:RootState) => state.posts.posts);

    const { deletePost } = props;
    return (
        <div>
            {postsRTK.map((post) => <PostCard deletePost={deletePost} key={post.id} post={post}/>)}
        </div>
    );
};

export default PostList;