const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

const initialState = {
        dialogs: [
            {id: 1, name: "Oleg"},
            {id: 2, name: "Tolik"},
            {id: 3, name: "Dima"},
            {id: 4, name: "Anton"},
            {id: 5, name: "Vladimir"}
        ],
        newMessageText: "DefaultMessage",
        messages: [
            {id: 1, message: "Hi!"},
            {id: 2, message: "Hello"},
            {id: 3, message: "How are you?"},
            {id: 4, message: "Fuck you!"},
            {id: 5, message: "Mu the best!"}
        ]
};

export const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: action.id,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = (newId) => ({ type: ADD_MESSAGE, id: newId });
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });