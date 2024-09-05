interface PropriedadesY {
    show: boolean;
}


const ComponenteY = (props: PropriedadesY) => {
    return (
        <>
            {props.show && <div>Ativo</div>}
        </>
    )
}

export default ComponenteY