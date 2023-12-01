import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialogs-reducer";
import {friendsReducer} from "./friends-reducer";


let store = {
    _state: {
        profilePade: {
            posts: [
                {id: 1, message: "Hi, how are you?", likeCount: "4"},
                {id: 2, message: "It's my first post!", likeCount: "15"}
            ],
            newPostText: "XUI"
        },
        dialogsPage: {
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
        },
        friendsPage: {
            friends: [
                {id: 1, name: "DIMA", foto: 'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png'},
                {id: 2, name: "TOLIK", foto: 'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png'},
                {id: 3, name: "ANTON", foto: 'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png'}
            ],
            newFriendsName: "DefaultFriendsName"
        }
    },


    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;  // observer
    },


    dispatch(action) { // type: 'action'
        this._state.profilePade = profileReducer(this._state.profilePade, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action);
        this._callSubscriber(this._state);
}
};


export default store;
window.store = store;













