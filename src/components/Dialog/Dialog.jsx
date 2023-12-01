import React from "react";
import s from './Dialog.module.css';

const Dialog = (props) => {

    const addMessage = () => {
        props.addMessage();
    }

    const onMessageChange = (event) => {
        props.onMessageChange(event.target.value)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { props.dialogs }
            </div>
            <div className={s.messages}>
                { props.messages }
            </div>
            <div>
                <textarea onChange={onMessageChange} value={props.newMessageText} placeholder="Enter your message"/>
            </div>
            <div>
                <button onClick={addMessage}>Add</button>
            </div>
        </div>
    );
}

export default Dialog;