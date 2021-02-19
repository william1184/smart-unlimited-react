import React from 'react';

const Signin = () => {

    return (
         <div className="App ui inverted vertical masthead aligned segment">
            <div class="main main-center">
                <div className="main-center ui text container">
                    <h1 className="ui inverted header">
                        Cadastro usuario
                    </h1>
                    <form class="ui inverted form">
                        <div class="field">
                            <label>First Name</label>
                            <input type="text" name="first-name" placeholder="Ex. Arnaldo" />
                        </div>
                        <div class="field">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="example@email.com" />
                        </div>
                        <div class="field">
                            <label>Senha</label>
                            <input type="password" name="last-name" />
                        </div>
                        <div class="field">
                            <label>Confirmação de senha</label>
                            <input type="password" name="last-name" />
                        </div>
                        <div class="field">
                            <div class="ui checkbox">
                                <input type="checkbox" tabindex="0" class="hidden" />
                                <label>I agree to the Terms and Conditions</label>
                            </div>
                        </div>
                        <button class="ui button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )

}

export default Signin;