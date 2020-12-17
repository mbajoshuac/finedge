import React from 'react';
import "./ProfileItem.css";

function ProfileItem(props) {
    return (
        <div className="profile-item flex">
            <h3>{props.heading}</h3>
            <h3>{props.value}</h3>
            <h3><a href="#">{props.edit && "Edit"}</a></h3>
        </div>
    )
}

export default ProfileItem;
