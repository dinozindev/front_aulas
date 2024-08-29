import { Route, Routes } from "react-router-dom"
import Erro404 from "./components/Erro404/Erro404"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Produtos from "./components/Produtos/Produtos"
import Servicos from "./components/Servicos/Servicos"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/*" element={<Erro404 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
