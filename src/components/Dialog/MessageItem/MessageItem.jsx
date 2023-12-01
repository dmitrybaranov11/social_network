import React from "react";
import s from "../Dialog.module.css";

const MessageItem = (props) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    );
}

export default MessageItem;