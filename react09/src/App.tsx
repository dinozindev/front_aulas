import Contador from "./components/Contador/Contador"
import UseCards from "./components/UseCards/UseCards"


const App = () =>  {
  return (
    <>
    
    <Contador valorInicial={10}/>
    <UseCards nome='Carlos' idade={19} cidade='São Paulo'/>
    <UseCards nome='Josué' idade={18} cidade='Paraná'/>
    <UseCards nome='Marcelo' idade={21} cidade='Rio de Janeiro'/>
    </>
  )
}

export default App
