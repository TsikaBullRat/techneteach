import  { Nav } from "./comp"
import { Landing, Home, About, Contacts, News, Store, Learning } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { gsap } from "gsap"
import "./App.css"

function App() {
  return (
    <Router>
      <Nav />
      <Routes >
        <Route path="/" component={Landing}/>
        <Route path="/home" component={Home}/>
      </Routes>
      
    </Router>
  )
}

export default App;
