import './Form.css';
import React , {useState} from 'react';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
function Form( props ) {
    const [button , setButton] = useState ( true );
    return (
        <div>
            <div className={button ? "container" : "container right-panel-active"} id="container">
                {/*Form dang ky*/}
                <Signup/>
                {/*Form dang nhap*/}
                <Login/>
                {/*form welcome*/}
                {/*<div className="overlay-container">*/}
                {/*    <div className="overlay">*/}
                {/*        <div className="overlay-panel overlay-left">*/}
                {/*            <h1>Welcome Back!</h1>*/}
                {/*            <p>To keep connected with us please login with your personal info</p>*/}
                {/*            <button className="ghost" id="signIn" onClick={() => setButton ( true )}>Sign In</button>*/}
                {/*        </div>*/}
                {/*        /!*<div className="overlay-panel overlay-right">*!/*/}
                {/*        /!*    <h1>Hello, Friend!</h1>*!/*/}
                {/*        /!*    <p>Enter your personal details and start journey with us</p>*!/*/}
                {/*        /!*    <button className="ghost" id="signUp" onClick={() => setButton ( false )}>Sign Up</button>*!/*/}
                {/*        /!*</div>*!/*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Form;
