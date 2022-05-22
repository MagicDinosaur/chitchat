import '../Form.css';
import React , {useRef , useState} from "react";
import {useDispatch , useSelector} from "react-redux";
import {login} from "../../../actions/auth";

function Login( props ) {
    const form = useRef ();
    const checkBtn = useRef ();
    const [username , setUsername] = useState ( "" );
    const [password , setPassword] = useState ( "" );
    const [loading , setLoading] = useState ( false );
    const { isLoggedIn } = useSelector ( state => state.auth );
    const { message } = useSelector ( state => state.message );
    const dispatch = useDispatch ();
    const onChangeUsername = ( e ) => {
        const username = e.target.value;
        setUsername ( username );
    };
    const onChangePassword = ( e ) => {
        const password = e.target.value;
        setPassword ( password );
    };
    // const handleLogin = ( e ) => {
    //     e.preventDefault ();
    //     setLoading ( true );
    //     // form.current.validateAll ();
    //     if (checkBtn.current.context._errors.length === 0) {
    //         dispatch ( login ( username , password ) )
    //             .then ( () => {
    //                 props.history.push ( "/profile" );
    //                 window.location.reload ();
    //             } )
    //             .catch ( () => {
    //                 setLoading ( false );
    //             } );
    //     } else {
    //         setLoading ( false );
    //     }
    // };


    const handleLogin = e => {
        e.preventDefault()
        dispatch ( login ( username , password ) )
                .then ( () => {
                    props.history.push ( "/profile" );
                    window.location.reload ();
                } )
                .catch ( () => {
                    setLoading ( false );
                } );
    }
    if (isLoggedIn) {
        // return <Redirect to="google.com" />;
        alert( "Logged In!!!!" );
    }
    return (
        <div className="form-container sign-in-container">
            <form onSubmit={handleLogin} ref={form}>
                {/*<p>Testing time: {time} </p>*/}
                <h1>Sign in</h1>
                <span>Enjoy your endless fun!!</span>
                <input type="email" placeholder="Email" value={username} onChange={onChangeUsername}/>
                <input type="password" placeholder="Password" value={password} onChange={onChangePassword}/>
                <a href="#">Forgot your password?</a>
                 {/*<input type='submit'/>*/}
                <button ref={checkBtn}>Sign In</button>
            </form>
        </div>
    )
}

export default Login;