import Button from '../../../Shared/ui/Button.tsx';
import Post from '../../../Entities/Post/ui/Post.tsx';
import type { PostCardProps } from '../types/PostCardTypes.ts';
import { useAppDispatch } from '../../../App/HooksRTK/hooksRTK.ts';
import { deletePost } from '../../../Entities/PostsSlice/model/postsSlice.ts';


const PostCard = (props:PostCardProps) => {
    const { post } = props;

    const dispatch = useAppDispatch();

    return (
        <div>
            <Post post={post}/>
            <Button onClick={() => dispatch(deletePost(post.id))}>
                Удалить пост
            </Button>
        </div>
    );
};

export default PostCard;