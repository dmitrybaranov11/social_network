import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='http://thewowstyle.com/wp-content/uploads/2015/02/beautiful-mountains-lake.jpg' width='600px'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;