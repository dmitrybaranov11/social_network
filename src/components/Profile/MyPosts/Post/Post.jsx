import React from "react";
import s from './Posts.module.css';
const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png'/>
            { props.message }
            <div>
                <span>{`${props.likeCount} like`}</span>
            </div>
        </div>
    );
}

export default Post;