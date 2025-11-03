import PostCard from '../../PostCard/ui/PostCard.tsx';
import {  useAppSelector } from '../../../App/HooksRTK/hooksRTK.ts';
import type { RootState } from '../../../App/store/store.ts';

const PostList = () => {

    const postsRTK = useAppSelector((state:RootState) => state.posts.posts);

    return (
        <div>
            {postsRTK.map((post) => <PostCard key={post.id} post={post}/>)}
        </div>
    );
};

export default PostList;