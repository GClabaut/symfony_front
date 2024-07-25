import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate();

    async function logout() {

        await sessionStorage.removeItem('user');
        navigate("/login");
    }

    logout();

    return (
        <div>Logout</div>
    )
}

export default Logout