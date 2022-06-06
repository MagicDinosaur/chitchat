import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Login'
import SignUp from './Signup'
function Userform() {
  return (
    <Router>
      <div>



            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>

      </div>
    </Router>
  );
}

export default Userform;
