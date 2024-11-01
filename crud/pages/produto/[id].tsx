import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import  styled  from "styled-components";

const Container = styled.div`
    width:70%;
    margin: auto;
    font-family:arial;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-itens:center
`

const FormGroup = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom:10px;
`

const Label = styled.label`
    width:100px;
    text-align:right;
    margin-right:10px;
`

const Input = styled.input`
    padding:5px;
`

const Button = styled.button`
    padding: 10px 15px;
    background-color:${(props) => (props.primary ? "yellowgreen" : "white")};
    color: ${(props => props.primary ? "white" : "black")};
    border: 2px solid yellowgreen;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover{
        background-color:${(props) => (props.primary ? "darkgreen" : "lightgray")};
        color : ${(props) => (props.primary ? "white" : "black")}
    }
`;

const InserirProduto = () =>{

    const router = useRouter();
    const { id } = router.query;

    const [produto,setProduto] = useState({
        titulo : "",
        preco : "",
        quantidade : ""
    })

    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");

    useEffect(()=>{
        if(id && id !== "novo"){
            fetch(`http://localhost:8080/appRWD/rest/produto/${ id }`)
                .then((resp) =>{
                    if(!resp.ok){
                        throw new Error("Erro ao buscar o produto!");
                    }
                    return resp.json();
                })
                .then((data) =>{
                    setProduto(data);
                    setLoading(false);
                })
                .catch((error)=>{
                    setError("Erro ao buscar o produto");
                    setLoading(false);
                })
        } else{
            setLoading(false)
        }
    },[id])

    const handleChange = (e) =>{
        setProduto({ ...produto,[e.target.name] : e.target.value })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const method = id && id !== "novo" ? "PUT" : "POST";
        const url = id && id !== "novo" ? `http://localhost:8080/appRWD/rest/produto/${id}` : "http://localhost:8080/appRWD/rest/produto";

        fetch(url,{
            method,
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(produto)
        })
        .then(()=>{
            router.push("/");
        })
        .catch((error)=>{
            console.error("Erro ao salvar o produto: ", error);
        })
    }

    return(
        <>
            <Container>
                <h1>{ id && id !== "novo" ? "Editar Produto" : "Novo Produto" }</h1>
                <Form onSubmit={ handleSubmit }>
                    <FormGroup>
                        <Label htmlFor="titulo">Título:</Label>
                        <Input type="text" name="titulo" id="titulo" value={produto.titulo} onChange={handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="preco">Preço:</Label>
                        <Input type="number" name="preco" id="preco" value={produto.preco} step="0.01" onChange={handleChange} />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label htmlFor="quantidade">Quantidade:</Label>
                        <Input type="number" name="quantidade" id="quantidade" value={produto.quantidade} onChange={handleChange} />
                    </FormGroup>

                    { id && id !== "novo" ? (
                            <Button type="submit" primary={true}>Salvar</Button>
                        ) : (
                            <Button type="submit" primary={true}>Incluir Produto</Button>
                        )
                    }



                </Form>
            </Container>
        </>
    )
}

export default InserirProduto;