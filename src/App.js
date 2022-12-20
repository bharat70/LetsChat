import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import "./style.scss"
import Register from './pages/Register';
import Login from './pages/Login';
import { createRoot } from "react-dom/client";
import {Route,Routes,Navigate, BrowserRouter} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const {currentUser}=useContext(AuthContext);
  // console.log(createRoot);
  const ProtectedRoute=({children})=>{
    if(!currentUser){
      return <Navigate to="/login" />;
    }
    return children;
  };

  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={
          <ProtectedRoute>
            <Home/>
           </ProtectedRoute>
          } />
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
  )
}
export default App;
