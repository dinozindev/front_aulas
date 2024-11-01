import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 70%;
    margin: auto;
    font-family: arial;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
`;

const Form = styled.form``;

const Label = styled.label`
    width: 100px;
    text-align: right;
    margin-right: 10px;
`;

const Input = styled.input`
    padding: 5px;
`;

const Button = styled.button`
    padding: 10px 15px;
    background-color: ${(props) => (props.primary ? "yellowgreen" : "white")};
    color: ${(props) => (props.primary ? "white" : "black")};
    border: 2px solid yellowgreen;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${(props) => (props.primary ? "darkgreen" : "lightgray")};
        color: ${(props) => (props.primary ? "white" : "black")};
    }
`;

const InserirVeiculo = () => {
    const router = useRouter();
    const { placa } = router.query;

    const [veiculo, setVeiculo] = useState({
        marca: "",
        modelo: "",
        placa: placa === "novo" ? "" : placa || "",
        ano: "",
        quilometragem: "",
        usuario: {
            cpfUsuario: "11122233344",
            nomeUsuario: "Lucas",
            senha: "lucas099321",
            email: "lucas@gmail.com",
            telefone: "11982939834"
        }
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (placa && placa !== "novo") {
            fetch(`http://localhost:8080/sprint4-java/rest/veiculo/${placa}`)
                .then((resp) => {
                    if (!resp.ok) {
                        throw new Error("Erro ao buscar o veículo!");
                    }
                    return resp.json();
                })
                .then((data) => {
                    setVeiculo(data);
                    setLoading(false);
                })
                .catch((error) => {
                    setError("Erro ao buscar o veículo!");
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [placa]);

    const handleChange = (e : any) => {
        setVeiculo({ ...veiculo, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e : any) => {
        e.preventDefault();
        const method = placa && placa !== "novo" ? "PUT" : "POST";
        const url = placa && placa !== "novo" 
            ? `http://localhost:8080/sprint4-java/rest/veiculo/${placa}` 
            : "http://localhost:8080/sprint4-java/rest/veiculo";
    
        const veiculoData = {
            ...veiculo,
            ano: Number(veiculo.ano), 
            quilometragem: Number(veiculo.quilometragem), 
        };
    
        console.log("Dados enviados:", JSON.stringify(veiculoData)); 
    
        try {
            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(veiculoData),
            });
    
            if (!response.ok) {
                const errorMessage = await response.text(); 
                console.error("Erro da API:", errorMessage); 
                throw new Error(`Erro: ${errorMessage}`);
            }
    
            router.push("/");
        } catch (error) {
            console.error("Erro ao salvar o veículo: ", error);
        }
    };

    return (
        <Container>
            <h1>{placa && placa !== "novo" ? "Editar Veículo" : "Novo Veículo"}</h1>
            <form onSubmit={handleSubmit}>
                {placa === "novo" && (
                    <FormGroup>
                        <Label htmlFor="placa">Placa: </Label>
                        <Input
                            type="text"
                            name="placa"
                            id="placa"
                            value={veiculo.placa}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                )}
                <FormGroup>
                    <Label htmlFor="modelo">Modelo: </Label>
                    <Input
                        type="text"
                        name="modelo"
                        id="modelo"
                        value={veiculo.modelo}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="marca">Marca: </Label>
                    <Input
                        type="text"
                        name="marca"
                        id="marca"
                        value={veiculo.marca}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="ano">Ano: </Label>
                    <Input
                        type="number"
                        name="ano"
                        id="ano"
                        value={veiculo.ano}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="quilometragem">Quilometragem: </Label>
                    <Input
                        type="number"
                        name="quilometragem"
                        id="quilometragem"
                        value={veiculo.quilometragem}
                        onChange={handleChange}
                    />
                </FormGroup>
                <Button type="submit" >{placa && placa !== "novo" ? "Salvar" : "Incluir Veículo"}</Button>
            </form>
        </Container>
    );
};

export default InserirVeiculo;