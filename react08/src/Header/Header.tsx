import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <>
            <header>
                <div className="content">
                    <h1>Cabeçalho</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>                                
                                <Link to="/produtos">Produtos</Link>
                            </li>
                            <li>                                
                                <Link to="/servicos">Serviços</Link>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header;