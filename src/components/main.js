import { useState } from 'react';
import '../css/style.css';
import sandwich1 from '../img/sandwich1.jpg';
import sandwich2 from '../img/sandwich2.jpg';
import sandwich3 from '../img/sandwich3.jpg';
import sandwich4 from '../img/sandwich4.jpg';
import sandwich5 from '../img/sandwich5.jpg';
import sandwich6 from '../img/sandwich6.jpg';
import sandwich7 from '../img/sandwich7.jpg';
import sandwich8 from '../img/sandwich8.jpg';
import sandwich9 from '../img/sandwich9.jpg';
import sandwich10 from '../img/sandwich10.jpg';

// Sandwich Categories
// 차후에 SANDWICH 는 반복문으로 대체해야함 (1차는 그냥 HTML으로 구성)
function Main(){

    return (
        <div>
            <section id='main'>
                <div className='max-container'>
                    <ul className='sandwiches'>
                        <li className='sandwich'>
                            <img src={sandwich1} className='sandwich_img'/>
                        </li>
                        <li className='sandwich'>
                            <img src={sandwich2} className='sandwich_img'/>
                        </li>
                        <li className='sandwich'>
                            <img src={sandwich3} className='sandwich_img'/>
                        </li>
                        <li className='sandwich'>
                            <img src={sandwich4} className='sandwich_img'/>
                        </li>
                        <li className='sandwich'>
                            <img src={sandwich5} className='sandwich_img'/>
                        </li>
                        <li className='sandwich'>
                            <img src={sandwich6} className='sandwich_img'/>
                        </li>
                        <li className='sandwich'>
                            <img src={sandwich7} className='sandwich_img'/>
                        </li>
                        <li className='sandwich'>
                            <img src={sandwich8} className='sandwich_img'/>
                        </li>
                        <li className='sandwich'>
                            <img src={sandwich9} className='sandwich_img'/>
                        </li>
                        <li className='sandwich'>
                            <img src={sandwich10} className='sandwich_img'/>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}


export default Main;