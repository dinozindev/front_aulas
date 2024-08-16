// por ter sido exportado sem default, ele deve ser importado entre chaves, já que podem haver mais variaveis
import { Container } from "./styles";
const Header = () => {
    return (
        <>
            <header>
            <Container></Container>
            <div style={{backgroundColor: "red"}}>Olá</div>
            </header>
        </>
    )
}

export default Header;