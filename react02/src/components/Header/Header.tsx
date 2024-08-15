// import styled from "styled-components";
// css com arquivo
// import "./Header.css";

// css com styled-components
// const HeaderStyled = styled.header`
//     background-color: cyan;
//     width: 100%;
//     height: 400px;
// `

// const Header = () => {
//     css usando variável
//     let parag = {
//         color: '#fcc',
//         backgroundColor: '#000000',
//         fontSize: '2rem'
//     }

//     let parag2 = {
//         color: '#ffffff',
//         backgroundColor: '#000000',
//         fontSize: '2.5rem'
//     }
//     return (
//         <>
//             <HeaderStyled>
//                 <h1>Header</h1>
//                 <p style={parag}>Qualquer coisa</p>
//                 <p style={parag2}>Qualquer coisa 2</p>
//                 {/* css inline */}
//                 <p style={{ color: 'blue', backgroundColor: 'red', fontSize: '3.5rem', margin: 0, padding: 0 }}>Qualquer coisa 3</p>
//                 <p className="parag">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis culpa at fugit dolor, praesentium id in quia fuga esse neque molestias iure tempore harum beatae placeat suscipit accusamus voluptatum sit.</p>
//             </HeaderStyled>
//         </>
//     )
// }

// export default Header;

export default function Header() {
    return (
        <>
            <header>
                <h1>Cabeçalho</h1>
            </header>
        </>
    )
}
