import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from './pages/index';
import Detail from './pages/detail';

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/regalo/:id" element={<Detail />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;