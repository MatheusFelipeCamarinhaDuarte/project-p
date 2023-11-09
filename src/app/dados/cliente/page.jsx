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
    <main className='dados'>
        <div className="formulario">
            <legend className="titulo-cliente">Seus dados</legend>
            <nav className= "form-cliente">
                <div>

                    <label className="text-form">Nome</label>
                    <input className='campo-form' type="text" name="nome" id="idNome" placeholder="Digite seu nome" required />
                </div>
                <div>
                    <label className="text-form">CPF</label>
                    <input className='campo-form'  type="text" name="CPF" id="idCPF" placeholder="Digite seu CPF" required/>
                </div>
                <div>
                    <label for="idTelefone">Telefone</label>
                    <input type="text" name="Telefone" id="idTelefone" placeholder="Digite seu telefone" required/>

                </div>
            </nav>
        </div>

        <nav className="navegacao">
            <div>
                <Link href="/">
                <button className="botao-voltar">voltar</button>
                </Link>
            </div>
            <div>
                <Link href="/dados/bike">
                <button className="botao-avancar" onClick="">avançar</button>
                </Link>
            </div>
        </nav>
    </main>
    )
}
