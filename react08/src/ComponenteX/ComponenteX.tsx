import { useState } from "react"
import ComponenteY from "../ComponenteY/ComponenteY"

const ComponenteX = () => {
    const [show, setShow] = useState(true)
    return (
        <>
            <button onClick={() => setShow(!show)}>Trocar</button>
            <ComponenteY show={show} />
        </>
    )
}

export default ComponenteX