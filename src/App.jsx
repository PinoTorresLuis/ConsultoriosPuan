import Article from "./Componentes/Articulos/Article"
import Card from "./Componentes/Card/Card"
import Copy from "./Componentes/Copyrigth/Copy"
import Footer from "./Componentes/Footer/Footer"
import Header from "./Componentes/Header/Header"
import Main from "./Componentes/Main/Main"
import Nav from "./Componentes/Navbar/Nav"

function App() {

  return (
    <div className="grid-container">
     <Header/>
     <Nav/>
     <Main/>
     <Article/>
     <Card/>
     <Footer/>
     <Copy/>
    </div>
  )
}

export default App
