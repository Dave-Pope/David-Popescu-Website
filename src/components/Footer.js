import React from 'react';

const Footer = () => {
    return (
        <div className='Footer'>
            <section className='top-footer'>
                <h3>RESUME</h3>

                <div className='arrow-up'>
                    <span>
                        <img src={require('../assets/icons/arrow-up.png')} alt='' />
                    </span>
                </div>
            </section>

            <section className='bottom-footer'>
                <p>&copy; David Popescu 2020 - Web Design and Development</p>
            </section>
        </div>
    );
};

export default Footer;
