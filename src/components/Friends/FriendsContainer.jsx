import React from "react";
import FriendsItem from "./FriendsItem/FriendsItem";
import {addFriendsActionCreator, updateNewFriendsTextActionCreator} from "../../Redux/friends-reducer";
import Friends from "./Friends";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    const friends = state.friendsPage.friends.map(f => (<FriendsItem state={f}/>));
    return {
        newFriendsName: state.friendsPage.newFriendsName,
        friends: friends
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewFriendNameChange: (text) => {
            dispatch(updateNewFriendsTextActionCreator(text));
        },
        onAddNewFriendClick: () => {
            dispatch(addFriendsActionCreator());
        }
    }
}


const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);


export default FriendsContainer;