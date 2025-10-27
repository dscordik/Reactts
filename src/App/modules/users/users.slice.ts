export type UserId = string
export type User = {
    id:UserId,
    name:string,
    description: string
}

export const initialUsersState: User[] = Array.from({ length:3000 }, (_, index) => ({
    id: `user${index + 11}`,
    Id: `User${index + 11}`,
    description: `Description for User${index + 11}`,
}));

type UsersState = {
    entities: Record<UserId, User>
    ids:UserId[]
    selectedUserId: UserId | undefined
}
export type UserSelectedAction = {
    type: 'userSelected',
    playload: {
        userId: UserId
    }
}

export type UserRemoveSelectedAction = {
    type: 'userRemoveSelected'
}

export type UsersStoredAction = {
    type:'usersStored'
    playload:{
        users:User[]
    }
}

type Action =
    UserSelectedAction
    | UsersStoredAction
    | UserRemoveSelectedAction

const initialUsersState:UsersState = {
    entities:{},
    ids:[],
    selectedUserId:undefined,
};

export const usersReducer = (state = initialUsersState, action:Action):UsersState => {
    switch (action.type) {
    case 'usersStored': {
        const { users } = action.playload;
        return {
            ...state,
            entities: users.reduce((acc,user) => {
                acc[user.id] = user;
                return acc;
            }, {} as Record<UserId, User>),
            ids: users.map((user) => user.id),

        };
    }
    case'userSelected':{
        const { userId } = action.playload;
        return{
            ...state,
            selectedUserId:userId,
        };
    }
    case 'userRemoveSelected':{
        return {
            ...state,
            selectedUserId:undefined,
        };
    }
    default:
        return state;
    }
};

