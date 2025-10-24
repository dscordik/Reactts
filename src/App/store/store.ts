import { configureStore } from '@reduxjs/toolkit';

type State = {
    counter:number
}

export const store = configureStore({
    reducer: {},
});