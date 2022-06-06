import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function Userform() {
  return (
   <div className="container">
  <div className="row">
    <div className="col-sm-10 col-md-7 col-lg-7 mx-auto">
      <div className="card border-0 shadow rounded-3 my-5">
        <div className="card-body p-4 p-sm-5">
          <h5 className="text-center mb-3 fw-bold fs-5">Sign Up</h5>
          <form>
            <span>Welcome buddy ^^</span>
            <div className="form-floating mb-3">
              <input
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="form-floating mb-3 ">
              <input
                type="password"
                placeholder="Password"
              />
                  <div className="form-floating mb-3 mt-3">
              <input
                type="email"
                placeholder="Repeat your password"
              />
            </div>
                  <div className="form-floating mb-3">
              <input
                type="email"
                placeholder="Your username"
              />
            </div>

            </div>
            {/*<div className="form-check mb-3">*/}
            {/*  <input*/}
            {/*    className="form-check-input"*/}
            {/*    type="checkbox"*/}
            {/*    defaultValue=""*/}
            {/*    id="rememberPasswordCheck"*/}
            {/*  />*/}
            {/*  <label*/}
            {/*    className="form-check-label"*/}
            {/*    htmlFor="rememberPasswordCheck"*/}
            {/*  >*/}
            {/*    Remember password*/}
            {/*  </label>*/}
            {/*</div>*/}
            <div className="d-grid">
              <button
                className="login-button"
                type="submit"
              >
                Register
              </button>
            </div>
            <hr className="my-4" />
            <span className="sign-up-text">Already have an account? <a href="/login" style={{"color":"#bd9a6a"}}>Login</a> here</span>

          </form>
        </div>
      </div>
    </div>
  </div>
</div>


  );
}

export default Userform;
