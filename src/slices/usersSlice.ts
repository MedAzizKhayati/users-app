import { createSlice } from '@reduxjs/toolkit';
import UserCreateDto from '../types/user-create.dto';
import User from '../types/user.type';

const initialState: User[] = [];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action: { payload: UserCreateDto }) => {
            let id = -1;
            for (const u of state) {
                if (u.id > id) {
                    id = u.id;
                }
            }
            id++;
            return [{ ...action.payload, id }, ...state];
        },
        removeUser: (state, action: { payload: number }) => {
            return state.filter((user) => user.id !== action.payload);
        },
        setUsers: (state, action: { payload: User[] }) => {
            return action.payload;
        }
    }
});

export const { addUser, removeUser, setUsers } = usersSlice.actions;

export default usersSlice.reducer;