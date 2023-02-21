import '../menu/Menu.css';
import  '../inputText/input.css';
import '../divisao/divisao.css'
import '../InputTextArea/inputTextArea.css'
import '../button/button.css'

import InputTextArea from '../InputTextArea/inputTextArea';
import Input from '../inputText/input';
import Divisao from '../divisao/divisao';
import Button from '../button/button';
function Despesa(){
    return(
<div>
<Divisao label = "Cadastrar Despesa"></Divisao>
   <div className='row'>
      <Input column = "12" label = "Nome" placeholder = "Nome"></Input>
      <Input column = "3" label = "Valor" placeholder = "Valor"></Input>
      <Input column = "3" label = "Data" placeholder = "Data"></Input>
      <Input column = "6" label = "Tipo de Despesa" placeholder = "Tipo de Despesa"></Input>
    <InputTextArea column = "12" label = "Descrição" placeholder = "Descrição"></InputTextArea>
    </div>

<Divisao label = "Imagens"></Divisao>
</div>)
}

export default Despesa;