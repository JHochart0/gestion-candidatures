import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Components/Pages/Home';
function App() {
    return(
        <Router>
            <div className="app">
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/signup" element={<Home/>}></Route>
                        <Route path="/login" element={<Home/>}></Route>
                        <Route path="/create" element={<Home/>}></Route>
                        <Route path="*" element={<NotFound404 />}></Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
