//

//import logo from './logo.svg';
import './App.css';
import SignUp from './pages/auth/SignUp';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';

// routers
function App() {
  return (      // navigation bar
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />

    </Routes>
  );
}

export default App;
