import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchOneUserInfo} from "../redux/actions";

const User = ({userInfo}) => {
    const dispatch = useDispatch();
    const [show, setShow] =useState(false);

    const getOneUser = (e) => {
        dispatch(fetchOneUserInfo(e.target.value));
        setShow(true)
    }

    return (
        <div>
            <ul>
                <li>Name: {userInfo.name}</li>
                <li>Email: {userInfo.email}</li>
            </ul>

            {show && (
                <div>
                    <ul>
                        <li>ID: {userInfo.id}</li>
                        <li>Username: {userInfo.username}</li>
                        <li>Street: {userInfo.address.street}</li>
                        <li>Phone: {userInfo.phone}</li>
                        <li>Website: {userInfo.website}</li>

                    </ul>
                </div>
            )}

            <button value={userInfo.id} onClick={getOneUser}>Get more</button>

        </div>
    );
};

export default User;