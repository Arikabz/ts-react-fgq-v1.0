import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
//import Login from './pages/Login'
//import Signup from './pages/Signup'
//import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import { useAuth0 } from '@auth0/auth0-react';
//import ForgotPassword from './pages/ForgotPassword'
import FooterSlim from './components/FooterSlim';
import RadialProgress from './components/RadialProgress';
import League from './pages/League';


function App() {
    const {isLoading} = useAuth0();
    //getWeek(6).then(x=>console.log(x.result[0].Games[1].Away))
    if(isLoading){
        return <RadialProgress/>
    }
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<League />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
            <FooterSlim/>
        </div>
    );
}

export default App;
