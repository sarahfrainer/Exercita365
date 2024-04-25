import './App.css';
import { LocaisContextProvider } from "./context/LocaisContext";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <LocaisContextProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </LocaisContextProvider>
  );  
}

export default App;