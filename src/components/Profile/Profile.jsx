import React from "react";
import ProfileInfo from './ProfileInfo/PropfileInfo'
import MyPostContainer from "./MyPosts/MyPostContainer";


function Profile(props) {
    return (
        <div>
            <ProfileInfo />
            <MyPostContainer />
        </div>
    );
}

export default Profile;