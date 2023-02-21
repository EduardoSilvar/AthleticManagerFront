import '../menu/Menu.css';
import  '../inputText/input.css';
import '../divisao/divisao.css'
import '../InputTextArea/inputTextArea.css'
import '../button/button'

import Input from '../inputText/input';
import Divisao from '../divisao/divisao';
import Button from '../button/button';

function Perfil(){
    return(
<div >
<div className='row'>
      <Input column = "12" label = "Email" placeholder = "Email"></Input>
      <Input column = "6" label = "Nome" placeholder = "Nome"></Input>
      <Input column = "6" label = "Sobrenome" placeholder = "Sobrenome"></Input>
    </div>

   <Divisao label = "Endereço"></Divisao>
   <div className='row'>
      <Input column = "6" label = "Bairro" placeholder = "Bairro"></Input>
    <Input column = "6" label = "Logradouro" placeholder = "Logradouro"></Input>
    </div>
    <row className="row">
    <Input column = "3" label = "Número" placeholder = "Número"></Input>
    <Input column = "3" label = "Cep" placeholder = "Cep"></Input>
    <Input column = "3" label = "Cidade" placeholder = "Cidade"></Input>
    <Input column = "3" label = "Estado" placeholder = "Estado"></Input>
    </row>
   <Divisao label = "Login"></Divisao>
   <div className='row'>
   <Input column = "4" label = "Login" placeholder = "Login"></Input>
    <Input column = "4" label = "Senha" placeholder = "Senha"></Input>
    <Input column = "4" label = "Repetir Senha" placeholder = "Repetir Senha"></Input>
    </div>
    <div className="center-btn">
    <Button nome="Salvar"></Button>
    <Button nome="Atualizar"></Button>
    </div>
</div>
    );
}
export default Perfil;