import { createSlice } from '@reduxjs/toolkit';

const initialTodos = [
    {
        id: 0,
        content: "Em ăn cơm chưa?",
    },
    {
        id: 1,
        content: "Đã có cơm trong bụng của e chưa?",
    },
    {
        id: 2,
        content: "Dạ dày của em đang ốm hay mập?",
    },
]

const noteSlice = createSlice({
    name: 'todos',
    initialState: initialTodos,
    reducers: {
        addNote: ( state, action ) => {
            console.log("payload: " + action.payload);
            const generateID = new Date().getTime();
            const content = action.payload;

            // console.log("Payload: " + action.payload);
            // console.log("Type: " + action.type);
            // console.log("State: " + state);
            // console.log("Content: " + content);
            
            state.push( { id: generateID, content: content } );
        },
        editNote: ( state, action ) => {
            const { id, content } = action.payload;
            // console.log("Action: " + action.payload);
            // console.log("ID: " + id + " | Content: " + content);
            const indexOfEditNote = state.findIndex( (note) => note.id === id );

            if (indexOfEditNote !== -1)
                state[indexOfEditNote].content = content;
            
            return state;
        },
        removeNote: ( state, action ) => {
            const idRemove = action.payload;

            state = state.filter( (note) => {
                if (note.id === idRemove){
                    return false;
                }
                return true;
            })

            return state;
        },
    }
})

const { reducer, actions } = noteSlice;
export const { addNote, editNote, removeNote } = actions;
export default reducer;