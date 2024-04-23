import './App.css';
import Router from './routers/Router';
import {Outlet} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  <Router>

<Navbar />

<Outlet />

<Footer />

</Router>
  
}

export default App
