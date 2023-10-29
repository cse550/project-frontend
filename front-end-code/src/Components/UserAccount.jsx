import { useState } from "react";

export const useUserAccount = () => {
    const [userAcount, setUserAcount] = useState({
        userName: "",
        passWord: "",
        handle: "",
        bio: "",
        webSite: "",
        profilePic: "",
    });

    const handleChange = e => {
        setUserAcount({
            ...userAcount,
            [e.target.name]: e.target.value,
        });
    };

    return{ userAcount, setUserAcount, handleChange};
}
