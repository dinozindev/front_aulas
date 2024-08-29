import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <header>
                <div className="content">
                    <h1>Header</h1>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/servicos">Serviços</Link></li>
                            <li><Link to="/produtos">Produtos</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header