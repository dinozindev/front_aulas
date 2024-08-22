import { useState } from "react"

const Valores = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>Componente Valores</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <span>Total: {count}</span>
            <button onClick={() => setCount(count - 1)}>-</button>
        </>
    )
}

export default Valores