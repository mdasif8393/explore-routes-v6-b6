import React from 'react';
import './Friends.css'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Friend = ({friend}) => {
    const {name, email, username, id} = friend;
    const navigate = useNavigate();
    const handleShowDetail = () => {
        navigate(`friend/${id}`)
    }
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <small>UserName: <Link to={`friend/${id}`}>{username}</Link></small>
            <Link to={`friend/${id}`}><button>SHow Detail</button></Link>
            <button onClick={handleShowDetail}>Show Detail</button>
        </div>
    );
};

export default Friend;