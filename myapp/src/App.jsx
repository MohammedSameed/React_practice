
import Header from "./components/Header";
import "./style/App.css"
import"./style/Header.css"
import {BrowserRouter as Router,Routes , Route} from "react-router-dom";
import Product from "./components/Product";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";


function App(){
    return <Router>
            <Header/>
        <Routes>
        
            <Route  path="/" element={<Home />} />
            <Route  path="/About" element={<About />} />
            <Route  path="/Contact" element={<Contact />} />
            <Route path="Product/id" element={<Product/>}/>
            <Route  path="*" element={<div>Page not found</div>} />
            

        </Routes>

    </Router>
}
export default App;