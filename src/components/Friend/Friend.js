import React from 'react';
import './Friends.css'
import {Link} from 'react-router-dom'

const Friend = ({friend}) => {
    const {name, email, username, id} = friend;
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <small>UserName: <Link to={`friend/${id}`}>{username}</Link></small>
        </div>
    );
};

export default Friend;