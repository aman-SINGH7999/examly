import {Routes, Route} from 'react-router-dom';
import Container from './components/Container';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Auth from './pages/Auth';
import DashBoard from './pages/DashBoard';
import Home from './pages/Home';
import Exams from './pages/Exams';
import Progress from './pages/Progress';
import SubNavBar from './components/SubNavBar';
import { useState } from 'react';
import { TitleProvider } from './redux/context/TitleContext';
import Components from './pages/Components';
function App() {
    const [title, setTitle] = useState('')
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Auth type='login' />}></Route>
                <Route path='/signup' element={<Auth type='signup' />}></Route>
                <Route path='/' element={<Home />}></Route>
            </Routes>
            <TitleProvider>
                <SubNavBar>
                    <Routes>
                        <Route path='/dashboard' element={<DashBoard /> } ></Route>
                        <Route path='/components' element={<Components /> } ></Route>
                        <Route path='/exams' element={<Exams />} ></Route>
                        <Route path='/progress' element={<Progress />} ></Route>
                    </Routes>
                </SubNavBar>
            </TitleProvider>
        </>
    );
}

export default App;
