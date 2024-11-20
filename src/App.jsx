
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Userauth from './components/Userauth'
import Signup from './components/Signup';
import Home from './components/Home';

function App() {


  return (
    <>
<div>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element={<Userauth />} />
    <Route path="/signup" element={<Signup />}/>
      
      </Routes>
      </div>
    </>
  )
}

export default App
