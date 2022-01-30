import logo from './logo.svg';
import './App.css';
import { Fragment  } from 'react';
import NavBar from './Components/NavBar';
import TrackingCard from './Components/TrackingCard';
import ShippingDetails from './Components/ShippingDetails';
import TrackingSearch from './Components/TrackingSearch';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <NavBar />
        <Routes>
        <Route path="/" element={[<TrackingSearch />]}></Route>
          
          <Route path="/TrackingSearch" element={<TrackingSearch />}></Route>

        <Route path="/shippmentDetails" element={[<TrackingCard />,<ShippingDetails /> ]}></Route>


        </Routes>
        <Footer/>



      </div>

    </BrowserRouter>

  );
}

export default App;
