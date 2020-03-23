import React from 'react';

const Content = () => {
    return (
        <div className='Content'>
            <section>
                <h1>David Popescu</h1>
                <hr />

                <p>
                    My name is David and I am an 18 years old Web Developer from Bucharest, Romania.
                    I love to design and create beautiful websites and web applications.
                    <br />
                    <br />I started to code 5 years ago because I loved the idea of creating
                    something that can be apreciated by milions of people. I started with simple C#
                    games made in Unity, then, 3 years ago, I migrated to Web Development. After
                    building lots of static websites, only HTML5 and CSS3, I decided that I need to
                    evolve my skills so I learned ReactJS and now it is my main framework.
                </p>
            </section>

            <section>
                <h1>What I know?</h1>
                <hr />

                <div className="logos">
                    <img src={require('../assets/images/logo-react.png')} alt=""/>
                    <img src={require('../assets/images/logo-redux.png')} alt=""/>
                    <img src={require('../assets/images/logo-js.png')} alt=""/>
                    <img src={require('../assets/images/logo-sass.png')} alt=""/>
                    <img src={require('../assets/images/logo-bootstrap.png')} alt=""/>
                    <img src={require('../assets/images/logo-html.png')} alt=""/>
                </div>
            </section>
        </div>
    );
};

export default Content;
