'use client'

import { useRouter } from "next/router";
import { useEffect } from "react";

const Dashboard = () => {

    const router = useRouter();

    useEffect(() => {
        const logado = localStorage.getItem('logado');
        if(!logado) {
            localStorage.setItem('erro', '1');
            localStorage.setItem('logado', 'false')
            router.push('/');
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('logado');
        localStorage.clear();
        router.push('/')
    }

    return (
        <>
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Dashboard;