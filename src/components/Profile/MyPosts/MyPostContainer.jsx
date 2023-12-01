import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePade.posts,
        newPostText: state.profilePade.newPostText
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            const action = addPostActionCreator();
            dispatch(action);
        },
        updateNewPostText: (text) => {
            const action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    };
};


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);


export default MyPostContainer;