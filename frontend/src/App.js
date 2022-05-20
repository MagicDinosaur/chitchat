import './App.css';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Form from './components/User/Form';


function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/login" element={<Form/>}/>
                    {/*<Route exact path="/test" element={<Test/>}/>*/}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
