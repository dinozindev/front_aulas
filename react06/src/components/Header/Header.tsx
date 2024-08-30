import { useState } from "react";
import { Link, useLocation } from "react-router-dom"

const Header = () => {
    const local = useLocation();
    const [exibir, setExibir] = useState('')

    return (
        <>
        {local.pathname === '/Erro404' ? setExibir('none') : ''}
            <header style={{display: exibir == 'none' ? 'none': 'block'}}>
                <div className="content">
                    <h1>Header</h1>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/servicos">Serviços</Link></li>
                            <li><Link to="/produtos">Produtos</Link></li>
                            <li><Link to="/state">States</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header