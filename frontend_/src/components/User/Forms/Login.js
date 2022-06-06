import React , {useState} from "react";

// import { login } from "../actions/auth";

function Userform( { login } ) {
    const Alert = ( props ) => {
        return <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-mdb-dismiss="modal"
                                aria-label="Close"></button>
                    </div>
                    <div className="modal-body">...</div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>;
    }
    const [email , setEmail] = useState ( "" );
    const [password , setPassword] = useState ( "" );
    const [error , setError] = useState ( "" );
    const submitForm = () => {
        if (email === "" || password === "") {
            setError ( "Fields are required" );
            return;
        }
        login ( { email , password } );
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-10 col-md-7 col-lg-6 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="text-center mb-3 fw-bold fs-5">Sign In</h5>
                            <form>
                                <span>Enjoy your endless fun!!! test</span>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={e => setEmail ( e.target.value )}
                                    />
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"

                                        placeholder="Password"
                                        value={password}
                                        onChange={e => setPassword ( e.target.value )}
                                    />

                                </div>
                                <div className="d-grid">
                                    <button
                                        className="login-button"
                                        type="submit"
                                        onClick={submitForm}
                                    >
                                        Sign in
                                    </button>
                                </div>
                                {/*        #set error form - need to be done*/}
                                {/*/!*{error && (*!/*/}
                                {/*/!*  <Alert severity="error" onClick={() => setError(null)}>*!/*/}
                                {/*/!*    {error || error}*!/*/}
                                {/*/!*  </Alert>*!/*/}
                                {/*/!*)}*!/*/}
                                <hr className="my-4"/>
                                <span className="sign-up-text">New to chaat? <a href="/signup"
                                                                                style={{ "color" : "#bd9a6a" }}>Sign Up</a> here</span>
                                <span className="sign-up-text"><a href="/signup" style={{ "color" : "#bd9a6a" }}>Forgot password</a></span>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Userform;
