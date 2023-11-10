import Link from 'next/link';
import React from 'react'



function recolherDados(){
    let inputNome = document.getElementById("idNome");
    let nome = inputNome.value;
    let inputCpf = document.getElementById("idCPF");
    let cpf = inputCpf.value;
    let inputTelefone = document.getElementById("idTelefone");
    let telefone = inputTelefone.value;
    let infoUser = [nome, cpf, telefone];
    localStorage.setItem("infoUser", JSON.stringify(infoUser));
}

export default function page() {
  return (
    <main>
        <div className='fundo-pagina'>
            <form className="formulario">
                <legend className="titulo-dados">Seus dados</legend>
                <nav className= "form-cliente">
                    <fieldset className='m-4'>
                        <legend className="text-form">Nome</legend>
                        <input className='campo-form' type="text" name="nome" id="idNome" placeholder="Digite seu nome" required />
                    </fieldset>
                    <fieldset className='m-4'>
                        <legend className="text-form">CPF</legend>
                        <input className='campo-form'  type="text" name="CPF" id="idCPF" placeholder="Digite seu CPF" required/>
                    </fieldset>
                    <fieldset className='m-4'>
                        <legend className='text-form'>Telefone</legend>
                        <input className='campo-form' type="text" name="Telefone" id="idTelefone" placeholder="Digite seu telefone" required/>
                    </fieldset>
                </nav>
            </form>
       </div>
        <nav className="navegacao">
            <div>
                <Link href="/">
                <button className="botao-telas">
                    <span>voltar</span>
                </button>
                </Link>
            </div>
            <div>
                <Link href="/dados/bike">
                    <button  className="botao-telas" onClick="">avançar</button>
                </Link>
            </div>
        </nav>
    </main>
    )
}
