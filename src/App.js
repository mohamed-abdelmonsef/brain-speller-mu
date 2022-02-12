import { BrowserRouter as Router, Route } from "react-router-dom";


import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>  
  );
}

export default App;
