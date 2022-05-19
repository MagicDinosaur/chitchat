import './Login.css';
import React, {Component, useState, useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {userPostFetch} from 'redux-actions';
function Test(props) {
  const [num, setNum] = useState(0);
  return (
  <div>
    <h1>Hello {num}</h1>
    <div >
    <button onClick={() => {setNum(num +1)}}> Check</button>
    </div>
  </div>
  );
}

export default Test;
