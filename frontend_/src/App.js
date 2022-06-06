
import './App.css';
import {BrowserRouter as Router , Link , Route , Routes} from "react-router-dom";

import Login from "./components/User/Forms/Login";
import SignUp from "./components/User/Forms/Signup";
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">

    <Router>
      <div>

            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>

        </div>

    </Router>

    </div>
  );
}

export default App;
