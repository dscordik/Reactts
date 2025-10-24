import Button from '../../../Shared/ui/Button.tsx';
import Post from '../../../Entities/Post/ui/Post.tsx';
import type { postcard } from '../PostCArdTypes/PostCard.ts';


const PostCard = (props:postcard) => {
    const { post,deletePost } = props;
    return (
        <div>
            <Post post={post}/>
            <Button onClick={() => deletePost(post.id)}>
                Удалить пост
            </Button>
        </div>
    );
};

export default PostCard;