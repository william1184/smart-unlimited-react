
import React from 'react';
import Navbar from '../../components/Navbar';
import './style.css';

const Home = () => {
    
    return (

            <div className="App ui inverted vertical masthead center aligned segment">
                <Navbar />
                <div class="main main-center">
                    <div className="main-center ui text container">
                        <h1 className="ui inverted header">
                            Smart-Unlimited-Apps
                        </h1>
                        <h2>Um conjunto de aplicativos que facilitam seu dia-a-dia.</h2>
                        <div className="ui huge primary button">Comece agora <i className="right arrow icon"></i></div>
                    </div>
                </div>
            </div>
    )


}

export default Home;