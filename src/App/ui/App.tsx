import PostList from '../../Widgets/PostList/ui/PostList.tsx';
import CreatePostForm from '../../Features/CreatePostForm/ui/CreatePostForm.tsx';

const App = () => {

    return (
        <div>
            <CreatePostForm/>
            <PostList/>
        </div>
    );
};

export default App;