import './App.css'
import { Navbar, Reservation,Homepage, Menu, Login, Register, Aboutus } from './components/index'
import { Navigate,Route, Routes, useLocation } from 'react-router-dom';

function App() {


  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/Homepage" element={<Homepage/>}/>
          <Route exact path="/Menu" element={<Menu />}/>
          <Route exact path="/Reservation" element={<Reservation />}/>
          <Route exact path="/Login" element={<Login />}/>
          <Route exact path="/Register" element={<Register />}/>
          <Route exact path="/Aboutus" element={<Aboutus />}/>
          <Route path="*" element={<Navigate to="/Homepage" replace />} />
        </Routes>
    </div>
  )
}

export default App
