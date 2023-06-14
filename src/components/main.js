import { useState } from 'react';
import '../css/main.css';

function Main(){
    const [sandwich, setSandwich] = useState(1);
    const test = () =>{
        setSandwich(sandwich + 1);
        {sandwich >= 3 ? setSandwich(1) :  console.log('') }
    }
    return (
        <div>
            <button onClick={test}>Test</button>
            <div className='images'>
            <img src={`${process.env.PUBLIC_URL}/img/sandwich${sandwich}.jpg`}></img>
            </div>
        </div>
    )
}


export default Main;