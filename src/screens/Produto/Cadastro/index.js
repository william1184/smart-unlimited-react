import React from 'react';

const Signin = () => {

    return (
         <div className="App ui inverted vertical masthead aligned segment">
            <div class="main main-center">
                <div className="main-center ui text container">
                    <h1 className="ui inverted header">
                        Cadastro Produto
                    </h1>

                    <form class="ui inverted form">
                        <div class="field">
                            <label>GTIN</label>
                            <input type="text" name="first-name" placeholder="Ex. Arnaldo" />
                        </div>
                        <div class="field">
                            <label>Nome</label>
                            <input type="email" name="email" placeholder="example@email.com" />
                        </div>
                        <div class="field">
                            <label>Descricao</label>
                            <textarea name="last-name" />
                        </div>
                        <div class="field">
                            <label>Preço</label>
                            <input type="text" name="last-name" />
                        </div>
                        <div class="field">
                            <label>Preço Minimo</label>
                            <input type="text" name="last-name" />
                        </div>
                        <div class="field">
                            <label>Preço Medio</label>
                            <input type="text" name="last-name" />
                        </div>
                        <div class="field">
                            <label>Preço Maximo</label>
                            <input type="text" name="last-name" />
                        </div>
                         <div class="field">
                            <label>Imagem</label>
                            <input type="text" name="last-name" />
                        </div>
                        <button class="ui button" type="submit">Cadastrar</button>
                        <button class="ui button" type="submit">Voltar</button>
                    </form>
                </div>
            </div>
        </div>

    )

}

export default Signin;