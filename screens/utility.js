import { useContext } from 'react';
import { Authentication } from '../App';
const {address,user,card } = useContext(Authentication);
export const handleuserClick = () => {
    user.name = name
    user.email = email
    user.phone = phone
};
export const handleaddressClick = () => {
    console.log("Button clicked in Card.js");
    // Add your logic here
};
export const handlecardClick = () => {
    console.log("Button clicked in Card.js");
    // Add your logic here
};

