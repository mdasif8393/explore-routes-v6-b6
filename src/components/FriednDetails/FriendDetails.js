import React from 'react';
import { useParams } from 'react-router-dom';
import {useLoaderData} from "react-router-dom";

const FriendDetails = () => {
    const {id} = useParams();
    const friend = useLoaderData();
    const {name, email, phone} = friend;
    return (
        <div>
            <h3>name: {name}</h3>
            <p>Email: {email}</p>
            <p>Contact: {phone}</p>
        </div>
    );
};

export default FriendDetails;