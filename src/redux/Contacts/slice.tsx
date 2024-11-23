import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import data from '../../data';

interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
}

interface ContactsState {
    data: Contact[];
}

const initialState: ContactsState = {
    data,
};

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<Contact>) => {
            state.data.push(action.payload);
        },
        removeContact: (state, action: PayloadAction<number>) => {
            state.data = state.data.filter(item => item.id !== action.payload)
        }
    },
});

export const { addContact, removeContact } = contactSlice.actions;
export default contactSlice.reducer;
