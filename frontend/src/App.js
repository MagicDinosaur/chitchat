import './App.css';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Login from './components/Login';
import Test from './components/Test';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/test" element={<Test/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
