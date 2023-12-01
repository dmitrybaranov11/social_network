import React from "react";

const Friends = (props) => {
    const onNewFriendNameChange =(event) => {
        props.onNewFriendNameChange(event.target.value);
    }

    const onAddNewFriendClick = () => {
        props.onAddNewFriendClick();
    }

    return (
        <div>
            {props.friends}
            <div>
                <textarea onChange={onNewFriendNameChange} value={props.newFriendsName} placeholder='Добавить друга'/>
            </div>
            <div>
                <button onClick={onAddNewFriendClick}>Add friend</button>
            </div>

        </div>
    );
};

export default Friends;