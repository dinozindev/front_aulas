import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Home from "./Home/Home"
import Servicos from "./Servicos/Servicos"
import Produtos from "./Produtos/Produtos"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element ={ <Home />} />
          <Route path="/servicos" element ={ <Servicos />} />
          <Route path="/produtos" element ={ <Produtos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
