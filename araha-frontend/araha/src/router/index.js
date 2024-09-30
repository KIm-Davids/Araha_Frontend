import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../component/login';
import SignUp from '../component/signup';

function Routing(){
    return (
        <BrowserRouter>
            <Routes>
                <Route index element= {<Login/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/SignUp' element={<SignUp/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing