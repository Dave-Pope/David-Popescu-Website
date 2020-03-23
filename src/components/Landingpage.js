import React from 'react';

const Landingpage = () => {
    let isDown = false;
    window.onpageshow = function upDownArrow() {
        if (isDown === false) {
            document.getElementById('arrowDown').style.top = '75%';
            isDown = true;
        } else {
            document.getElementById('arrowDown').style.top = '70%';
            isDown = false;
        }

        setTimeout(upDownArrow, 1500);
    };

    return (
        <div className='Landingpage'>
            <div className='contact-action'>
                <button className='contact-button'>PROJECTS!</button>
            </div>

            <div className='text-area'>
                <p>
                    <span id='pre-title'>WHO AM I?</span> <br />
                    Without ambition,
                    <br /> there is no talent
                </p>

                <span className='arrow-down' id='arrowDown'>
                    <img src={require('../assets/icons/arrow-down.png')} alt='' />
                </span>
            </div>

            <div className='background'>
                <img src={require('../assets/images/background1.jpg')} alt='' />
            </div>
        </div>
    );
};

export default Landingpage;
