import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    return (
        <div className="App ui inverted vertical masthead center aligned segment">
            <div class="main main-center">
                <div className="main-center ui text container">
                    <h1 className="ui inverted header">
                        Log In
                    </h1>
                    <form class="ui large form">
                        <div class="ui inverted segment">
                            <div class="field">
                                <div class="ui inverted left icon input big">
                                    <i class="user icon"></i>
                                    <input type="text" name="email" placeholder="E-mail address" />
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui inverted left icon input big">
                                    <i class="lock icon"></i>
                                    <input type="password" name="password" placeholder="Password" />
                                </div>
                            </div>
                            <div class="ui fluid large teal submit button">Login</div>
                            <div class="ui error message">
                            </div>
                            <div class="ui message">
                                Novo aqui ? <Link to="/signin" >Cadastre-se</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;