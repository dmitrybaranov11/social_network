import {combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialogs-reducer";
import {friendsReducer} from "./friends-reducer";


const reducers = combineReducers({
    profilePade: profileReducer,
    dialogsPage: dialogReducer,
    friendsPage: friendsReducer
});


const store= legacy_createStore(reducers);

export default store;