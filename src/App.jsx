import { Navbar, Reservation,Homepage, Menu, Login, Register, Aboutus,Footer,YMenu,IndianC,ItalianC,JapaneseC } from './components/index'
import { Navigate,Route, Routes } from 'react-router-dom';

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
          <Route exact path="/YourMenu" element={<YMenu />}/>
          <Route exact path="/IndianCuisine" element={<IndianC />}/>
          <Route exact path="/ItalianCuisine" element={<ItalianC />}/>
          <Route exact path="/JapaneseCuisine" element={<JapaneseC />}/>
          <Route path="*" element={<Navigate to="/Homepage" replace />} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
