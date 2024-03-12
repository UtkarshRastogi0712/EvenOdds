import Sidebar from "./Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import './Navbar.css';
import Profile from './Profile';
import Activebets from './Activebets';
import Closedbets from './Closedbets';

function Dash() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' component={Profile} />
          <Route path='/activebets' component={Activebets} />
          <Route path='/closedbets' component={Closedbets} />
        </Routes>

      </Router>

    </>
  );
}

export default Dash;
