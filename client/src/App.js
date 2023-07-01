import logo from './logo.svg';
import 'antd/dist/antd';
import './App.css';
import { Button } from 'antd';
import {BrowserRouter, NavLink, Navigate, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Templates from './pages/templates';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<ProtectedRoute><Home></Home></ProtectedRoute>}></Route>
            <Route path='/home' element={<ProtectedRoute><Home></Home></ProtectedRoute>}></Route>
            <Route path='/profile' element={<ProtectedRoute><Profile></Profile></ProtectedRoute>}></Route>
            <Route path='/templates/:id' element={<ProtectedRoute><Templates></Templates></ProtectedRoute>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  if(localStorage.getItem('sheyresume-user')){
    return props.children
  } else{
    return <Navigate to="/login"></Navigate>
  }
}