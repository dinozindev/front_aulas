'use client'
import { useEffect } from "react";

const LogoutPage = () => {
    useEffect(() => {
        localStorage.setItem("logado", "false")
        localStorage.setItem("usuario", "")
    })

    return (
        <>
        <main className="main__alternative">
            <h1>Desconectado</h1>
        </main>
        </>
    )
}

export default LogoutPage;