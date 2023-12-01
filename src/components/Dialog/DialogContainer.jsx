import React from "react";
import Dialog from "./Dialog";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageActionCreator, updateNewMessageTextActionCreator,} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    const dialogs = state.dialogsPage.dialogs.map(d => (<DialogItem id={d.id} name={d.name}/>));
    const messages = state.dialogsPage.messages.map(m => (<MessageItem id={m.id} message={m.message}/>));
    return {
        newMessageText: state.dialogsPage.newMessageText,
        messages: messages,
        dialogs: dialogs
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onMessageChange: (text) => {
            const action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        }
    };
};


const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;