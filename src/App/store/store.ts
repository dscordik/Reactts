import { combineReducers, configureStore, createSelector } from '@reduxjs/toolkit';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { initialUsersState, usersReducer, type UsersStoredAction } from '../modules/users/users.slice.ts';
import { type CounterId, countersReducer } from '../modules/counters/counter.slice.ts';


const reducer = combineReducers({
    users:usersReducer,
    counters:countersReducer,
});

export const store  = configureStore({
    reducer: reducer,
});

store.dispatch({ type: 'usersStored', playload:{ users: initialUsersState } } satisfies UsersStoredAction);



export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
export const createAppSelector = createSelector.withTypes<AppState>();