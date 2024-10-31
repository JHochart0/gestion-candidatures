import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Components/Pages/Home';
import NotFound404 from './Components/Pages/NotFound404';
function App() {
    return(
        <Router>
            <div className="app">
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="*" element={<NotFound404 />}></Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
