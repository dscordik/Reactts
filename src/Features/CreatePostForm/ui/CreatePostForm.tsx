import { useState } from 'react';
import type { CreatePostFormProps } from '../CreatePostFromTypes/CreatePostForm.ts';
import cl from './CratePostForm.module.css';
import { useAppDispatch } from '../../../App/HooksRTK/hooksRTK.ts';
import { addNewPost } from '../../../Entities/PostsSlice/model/postsSlice.ts';
import type { PostsData } from '../../../Entities/PostsSlice/model/types.ts';
import { v4 as uuidv4 } from 'uuid';

const CreatePostForm = (props:CreatePostFormProps) => {
    const dispatch = useAppDispatch();
    const { ...otherProps } = props;
    const  [title, setTitle]  = useState<string>('');
    const [body, setBody]  = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const newPost:PostsData = {
            id:uuidv4(),
            title: title,
            body: body,
            isDone: false,
        };
        if (title.trim() && body.trim()) {
            dispatch(addNewPost(newPost));
            setTitle('');
            setBody('');
        }
    };
    return (
        <div className={cl.CreatePostForm} {...otherProps}>
            <form onSubmit={handleSubmit}>
                <input className={cl.Input} onInput={(event) => setTitle((event.target as HTMLInputElement).value)} value={title} type='text'/>
                <input className={cl.Input} onInput={(event) => setBody((event.target as HTMLInputElement).value)} value={body} type='text'/>
                <button className={cl.Btn} >Создать пост</button>
            </form>
        </div>
    );
};

export default CreatePostForm;