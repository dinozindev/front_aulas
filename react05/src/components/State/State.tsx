import { useState } from "react"

const State = () => {
    const [count, setCount] = useState(0)
  return (
    <>
        <button onClick={() => setCount((count) => count+1)}>+</button>
        <span>Valor: {count}</span>
    </>
  )
}

export default State