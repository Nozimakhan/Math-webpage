import './App.css';
import Nav from './components/nav/Nav';
import Home from './pages/homepage/Home';
import Download from './pages/downloadpage/Download';
import Expert from './pages/expert/Expert';
import All from './routes/All';
import Algebra from './routes/Algebra';
import Arithmetic from './routes/Arithmetic';
import Geometry from './routes/Geometry';
import Lessons from './pages/lessons/Lessons';
import Premium from './pages/premium/Premium';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/download' element={<Download/>}/>
        <Route path='/expert' element={<Expert/>}>
          <Route path='/expert/all' element={<All/>}/>
          <Route path='/expert/algebra' element={<Algebra/>}/>
          <Route path='/expert/arithmetic' element={<Arithmetic/>}/>
          <Route path='/expert/geometry' element={<Geometry/>}/>
        </Route>
        <Route path='/lessons' element={<Lessons/>}/>
        <Route path='/premium' element={<Premium/>}/>
      </Routes>
    </div>
  )
}

export default App
