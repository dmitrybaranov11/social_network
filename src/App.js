import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import New from "./components/New/New";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogContainer from "./components/Dialog/DialogContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";

const App = (props) => {
  return (
      <div className='app-wrapper'>
          <Header />
          <Navbar />
          <div className='app-wrapper-content'>
              <Routes>
                  <Route path='/dialogs/*' element={ <DialogContainer /> } />
                 <Route path='/profile' element={ <Profile /> } />
                 <Route path='/friends' element={ <FriendsContainer /> } />
                 <Route path='/news' element={ <New /> } />
                 <Route path='/music' element={ <Music /> } />
                 <Route path='/settings' element={ <Settings /> } />
             </Routes>
          </div>
      </div>
  );
}

export default App;
