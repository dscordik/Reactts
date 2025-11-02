import { useState } from 'react';
import type { createpostform } from '../CreatePostFromTypes/CreatePostForm.ts';
import cl from './CratePostForm.module.css';
import { useAppDispatch } from '../../../App/HooksRTK/hooksRTK.ts';
import { addNewPost } from '../../../Entities/PostsSlice/model/postsSlice.ts';

const CreatePostForm = (props:createpostform) => {
    const dispatch = useAppDispatch();
    const { createPost, ...otherProps } = props;
    const  [title, setTitle]  = useState<string>('');
    const [body, setBody]  = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (title.trim() && body.trim()) {
            createPost(title, body);
            setTitle('');
            setBody('');
        }
    };
    return (
        <div className={cl.CreatePostForm} {...otherProps}>
            <form onSubmit={handleSubmit}>
                <input className={cl.Input} onInput={(event) => setTitle((event.target as HTMLInputElement).value)} value={title} type='text'/>
                <input className={cl.Input} onInput={(event) => setBody((event.target as HTMLInputElement).value)} value={body} type='text'/>
                <button className={cl.Btn} onClick={() => dispatch(addNewPost)}>Создать пост</button>
            </form>
        </div>
    );
};

export default CreatePostForm;