import logo from './logo.svg';
import react, { useState } from "react"
import './App.css';
import Navbar from './Componenets/Navbar';
import TextForm from './Componenets/TextForm';
import About from './Componenets/About';
import Alert from './Componenets/Alert';
import {  BrowserRouter , Route, Routes } from "react-router-dom"
 
function App() {

  const [ mode , setMode] = useState("light")
  const [alert , setAlert]  = useState(null)

  const showAlert = (message ,type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      showAlert(null)
    }, 2000);
  }

  const ToggleMode = () =>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "grey"
      showAlert("Dark Mode has been Enabled" , "primary")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been Enabled" , "success")
    }
  }
  return (
    <BrowserRouter>
        <Navbar title="TextUtils" about="About" mode={mode} ToggleMode={ToggleMode}/>
        <Alert alert={alert}/>
    <Routes>
        <Route path="/" element={<TextForm showAlert= {showAlert} heading="Enter the Text to analyze Below" mode={mode} />}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
