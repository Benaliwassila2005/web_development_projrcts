import Top_header from "../header/Top_header";
import Bottom_header from "../header/Bottom_header";
import Home from '../page/Home'
import { Route, Router, Routes } from "react-router-dom";
import Products_Details from "../page/Products_Details";

function App() {

   

    return (
        <>
           <header>
                 <Top_header></Top_header>
                 <Bottom_header></Bottom_header>

          
           </header>

        <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products/:id" element={<Products_Details/>} />
     </Routes>

           
        </>
    )

}

export default App
