import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPost(props) {

    const postItems = props.posts.map(p => (<Post message={p.message} likeCount={p.likeCount}/>));

    const onAddPost = () => {
        props.addPost();
    };

    const onPostChange = (event) => {
        // props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: newPostElement.current.value });
        props.updateNewPostText(event.target.value);
    };


    return (
        <div className = {s.postsBLock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} placeholder="Enter your post"/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postItems }
            </div>
        </div>
    );
}

export default MyPost;