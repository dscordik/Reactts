import { memo, useState } from 'react';
import {
    type AppState,
    useAppDispatch,
    useAppSelector,
} from '../../store/store.ts';

const selectSortedUsers = (state: AppState, sort: 'asc' | 'desc') => {
    const users = state.users.ids
        .map((id) => state.users.entities[id])
        .filter((user): user is User => {
            const isValid = user !== undefined && user.name !== undefined;
            return isValid;
        });

    console.log('Users to sort:', users);

    return [...users].sort((a, b) => {
        if (sort === 'asc') {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });
};

const selectSelectedUser = (state: AppState) =>
    state.users.selectedUserId ? state.users.entities[state.users.selectedUserId] : undefined;

export function UsersList() {
    console.log('render users list');
    const [sortType, setSortType] = useState<'asc' | 'desc'>('asc');
    const dispatch = useAppDispatch();

    const sortedUsers = useAppSelector((state) => selectSortedUsers(state, sortType));
    const selectedUser = useAppSelector(selectSelectedUser);

    const handleBackButtonClick = () => {
        dispatch({ type: 'userRemoveSelected' } satisfies UserRemoveSelectedAction);
    };

    return (
        <div className="flex flex-col items-center">
            {!selectedUser ? (
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center">
                        <button
                            onClick={() => setSortType('asc')}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Asc
                        </button>
                        <button
                            onClick={() => setSortType('desc')}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Desc
                        </button>
                    </div>
                    <ul className="list-none">
                        {sortedUsers.map((user) => (
                            <UserListItem
                                user={user}
                                key={user.id}
                            />
                        ))}
                    </ul>
                </div>
            ) : (
                <SelectedUser
                    user={selectedUser}
                    onBackButtonClick={handleBackButtonClick}
                />
            )}
        </div>
    );
}

const UserListItem = memo(function UserListItem({
    userId,
}: {
    userId: UserId;
}) {
    console.log('render', userId);
    const user = useAppSelector((state) => state.users.entities[userId]);
    const dispatch = useAppDispatch();

    const handleUserClick = () => {
        dispatch({
            type: 'userSelected',
            playload: { userId: user.id },
        } satisfies UserSelectedAction);
    };

    return (
        <li className="py-2" onClick={handleUserClick}>
            <span className="hover:underline cursor-pointer">{user.name}</span>
        </li>
    );
});

function SelectedUser({
    user,
    onBackButtonClick,
}: {
    user: User;
    onBackButtonClick: () => void;
}) {
    return (
        <div className="flex flex-col items-center">
            <button
                onClick={onBackButtonClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Back
            </button>
            <h2 className="text-3xl">{user.name}</h2>
            <p className="text-xl">{user.description}</p>
        </div>
    );
}