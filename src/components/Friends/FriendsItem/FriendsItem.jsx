import React from "react";

const FriendsItem = (props) => {
    return (
        <div>
            <span>
                <img src='https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png'/>{`Имя друга: ${props.state.name}`}
            </span>
        </div>
    );
};

export default FriendsItem;