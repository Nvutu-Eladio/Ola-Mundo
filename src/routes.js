import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrado from "componentes/NaoEncontrado";
import ScrollToTop from "componentes/ScrollToTop";

// console.log(window.location)

// // const pagina = window.location.pathname === '/' ? <div>Olá Mundo!</div> : <div>sobre mim</div>

// const pagina = window.location.pathname === '/' ? <Inicio /> : <SobreMim />


function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Menu />

    <Routes>
      <Route path="/" element={<PaginaPadrao />}>
        <Route path="/" element={<Inicio />} />
        <Route path="sobremim" element={<SobreMim />} />
        
      </Route>
      <Route path="posts/:id" element={<Post />} />
      {/* <Route path="*" element={<div>Página nao encontrada</div>}/> */}
      <Route path="*" element={<NaoEncontrado />}/>
      
    </Routes>

     

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
