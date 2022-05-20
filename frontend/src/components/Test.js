import './Login.css';
import React , {useState} from 'react';

function Test( props ) {
    const [num , setNum] = useState ( 0 );
    return (
        <div>
            <h1>Hello {num}</h1>
            <div>
                <button onClick={() => {
                    setNum ( num + 1 )
                }}> Check
                </button>
            </div>
        </div>
    );
}

export default Test;
