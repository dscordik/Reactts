import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PostList from '../../Widgets/PostList/ui/PostList.tsx';
import CreatePostForm from '../../Features/CreatePostForm/ui/CreatePostForm.tsx';
import type { Post } from '../../Entities/Post/PostTypes/Post.ts';


const App = () => {
    const [posts, setPosts] = useState<Post[]>([
        { id: uuidv4(), title: 'Первый пост', body: 'Я учусь' },
        { id: uuidv4(), title: 'Второй пост', body: 'Писать' },
        { id: uuidv4(), title: 'Третий пост', body: 'На typescript' },
    ]);

    function createPost(title: string, body: string) {
        const newPost: Post = {
            id: uuidv4(),
            title: title,
            body: body,
        };
        setPosts([newPost, ...posts]);
    }

    function deletePost(id: string) {
        setPosts(posts.filter((item) => item.id !== id));
    }

    return (
        <div>
            <CreatePostForm createPost={createPost}/>
            <PostList deletePost={deletePost} posts={posts}/>
        </div>
    );
};

export default App;