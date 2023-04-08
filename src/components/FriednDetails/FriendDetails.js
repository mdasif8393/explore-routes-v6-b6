import React from 'react';
import { useParams } from 'react-router-dom';
import {useLoaderData} from "react-router-dom";

const FriendDetails = () => {
    const {id} = useParams();
    const friend = useLoaderData();
    console.log(friend)
    return (
        <div>
            <h1>Friend Details: {id}</h1>
        </div>
    );
};

export default FriendDetails;