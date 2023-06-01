import { Navbar, Reservation,Homepage, Menu, Login, Register, 
  Aboutus,Footer,YMenu,IndianC,ItalianC,JapaneseC, Dashboard} from './components/index';
import { Navigate,Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './config/firebase';
import ContactMess from './components/Admin/ContactMess';

function App() {
  const user = useSelector(selectUser)
  const dispatch=useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName: userAuth.displayName
        }));

      }else{
        dispatch(logout());
       
      }
    });
  },[dispatch]);

  return (
    <div className="App">
        <Navbar />
        
          {!user ?  (
            <Routes>
              <Route exact path="/Login" element={<Login />} />
              <Route exact path="/Register" element={<Register />} />
              <Route path="*" element={<Navigate replace to="/Login"  />} />
              {/* {window.location.reload()} */}
            </Routes>
          ) : (
            user.email === 'admin@gmail.com'?
            <Routes>
              <Route exact path="/Dashboard" element={<Dashboard />} />
              <Route exact path="/Message" element={<ContactMess />} />
              <Route path="*" element={<Navigate to="/Dashboard" replace />} />
            </Routes> 
            :
            <Routes>
              <Route exact path="/Homepage" element={<Homepage />} />
              <Route exact path="/Menu" element={<Menu />} />
              <Route exact path="/Reservation" element={<Reservation />} />
              <Route exact path="/Aboutus" element={<Aboutus />} />
              <Route exact path="/YourMenu" element={<YMenu />} />
              <Route exact path="/IndianCuisine" element={<IndianC />} />
              <Route exact path="/ItalianCuisine" element={<ItalianC />} />
              <Route exact path="/JapaneseCuisine" element={<JapaneseC />} />
              {/* <Route exact path="/Dashboard" element={<Dashboard />} /> */}
              <Route path="*" element={<Navigate to="/Homepage" replace />} />
          </Routes>
          )}
          
      
        
        <Footer/>
    </div>
  )
}

export default App
