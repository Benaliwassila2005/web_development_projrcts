
import './App.css'
import Header from '../components/header_folder/Header'
import Footer from '../components/footer_folder/Footer'
import  {BrowserRouter,Link,Route,Routes} from "react-router-dom"
import Book_service from '../components/Book_folder/Book_service'

import { Book } from 'lucide-react'
import Admin_dashboard from '../admin_dashboard/Admin_dashboard'
import Login from '../admin_dashboard/Login'
import ViewAll_booking from '../admin_dashboard/ViewAll_booking'



function App() {
 

  return (
     <BrowserRouter>
       
       <Routes>
         
          <Route
             path="/"
             element={
            <>
                <Header />
                <Footer />
            </>
                }
        />
        <Route path="/book"  element={<><Book_service/>

           <Footer/>
        
        </>
      }>
        
        </Route>

        <Route path="/admin" element={<Login />} />

        <Route path="/dashboard" element={<Admin_dashboard />} /> 
        <Route path="/dashboard/ViewAll_booking" element={<ViewAll_booking />} /> 

       
       </Routes>    

     
     </BrowserRouter>
    
  )
}

export default App
