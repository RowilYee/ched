import Nav from './components/Nav'
import './App.css'
import Home from './components/Home'
import SignIn from './components/SignIn'
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {


  return (
    <>

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
