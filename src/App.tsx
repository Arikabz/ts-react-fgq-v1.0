import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import ForgotPassword from './pages/ForgotPassword'
import FooterSlim from './components/FooterSlim';


function App() {
    //getWeek(6).then(x=>console.log(x.result[0].Games[1].Away))
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/forgotPassword' element={<ForgotPassword />} />
            </Routes>
            <FooterSlim/>
        </div>
    );
}

export default App;
