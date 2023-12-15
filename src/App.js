import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import NavbarComponent from './components/navbar';
import Banner from './components/banner';
import TabContent from './components/tabs';
import './css/responsive.css'
function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Banner/>
      <TabContent/>
    </div>
  );
}

export default App;
