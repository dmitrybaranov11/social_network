const ADD_FRIENDS = 'ADD-FRIENDS';
const UPDATE_NEW_FRIENDS_TEXT = 'UPDATE-NEW-FRIENDS-TEXT';
const urlAvatat = 'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png';

const initialState = {
    friends: [
      {id: 1, name: "DIMA", foto: 'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png'},
      {id: 2, name: "TOLIK", foto: 'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png'},
      {id: 3, name: "ANTON", foto: 'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png'}
    ],
    newFriendsName: "DefaultFriendsName"
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIENDS:
      const newFriendItem = {
        id: 1, name: state.newFriendsName, foto: urlAvatat
      };
      state.friends.push(newFriendItem);
      state.newFriendsName = '';
      return  state;
    case UPDATE_NEW_FRIENDS_TEXT:
      state.newFriendsName = action.newFriend;
      return state;
    default:
      return state;
  }
};

export const addFriendsActionCreator = () => ({ type: ADD_FRIENDS });

export const updateNewFriendsTextActionCreator = (newFriend) =>
    ({ type: UPDATE_NEW_FRIENDS_TEXT, newFriend: newFriend });