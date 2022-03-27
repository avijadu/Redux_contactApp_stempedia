import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Add from './components/Add';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
