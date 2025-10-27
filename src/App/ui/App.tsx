import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PostList from '../../Widgets/PostList/ui/PostList.tsx';
import CreatePostForm from '../../Features/CreatePostForm/ui/CreatePostForm.tsx';
import type { Post } from '../../Entities/Post/PostTypes/Post.ts';
import {
    type CounterId,
    type DecrementAction,
    type IncrementAction, selectCounter,
    useAppSelector,
} from '../store/store.ts';
import { useDispatch } from 'react-redux';
import { UsersList } from '../modules/users/users-list.tsx';
/*import { useEffect, useReducer } from 'react';*/



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




            <Counter counterId='first'/>
            <Counter counterId='second'/>
            <UsersList/>
        </div>
    );
};


export function Counter({ counterId }:{counterId:CounterId}) {
    const dispatch = useDispatch();
    const counterState = useAppSelector((state) => selectCounter(state,counterId));
    console.log('render counter', counterId);

    /*
    const [,forceUpdate] = useReducer((x) => x + 1, 0);
    console.log('render counter', counterId);

    const lastStateRef = useRef<ReturnType<typeof selectCounter>>();

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const currentState = selectCounter(store.getState(), counterId);
            const lastState = lastStateRef.current;

            if(currentState !== lastState) {
                forceUpdate();
            }
            lastStateRef.current = currentState;
        });
        return unsubscribe;
    }, [counterId]);
*/
    return(
        <div>
            counter{counterState?.counter}
            <button onClick={() => dispatch({ type: 'increment', payload:{ counterId } } satisfies IncrementAction)}>increment</button>
            <button onClick={() => dispatch({ type: 'decrement',  payload:{ counterId } } satisfies DecrementAction)}>decrement</button>
        </div>
    );
}

export default App;