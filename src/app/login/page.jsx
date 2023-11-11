"use client"
import Link from 'next/link';
import React, { useState } from 'react';

export default function Page() {



    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');

    function recolherDados(){
        let infoUser = {'nome':nome, 'cpf':cpf, 'telefone':telefone};
        let conectado = {'login':true}
        sessionStorage.setItem('infoUser', JSON.stringify(infoUser));
        sessionStorage.setItem('conectado', JSON.stringify(conectado));
    }

    function formatarCPF(event) {
        const digits = event.target.value.replace(/\D/g, '');
    
        if (digits.length > 10) {
            event.target.value = `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9, 11)}`;
        } else {
            event.target.value = digits;
        }
    }

    const validarFormulario = (event) => {
        if (!nome || !cpf || !telefone) {
          event.preventDefault(); // Impede o envio do formulário se algum campo estiver vazio
          alert('Por favor, preencha todos os campos obrigatórios.');
        } else {
          recolherDados(); // Coleta os dados se os campos estiverem preenchidos
        }
      };

    return (
        <main>
            <div className='fundo-pagina'>
                <form className="formulario">
                    <legend className="titulo-dados">Login com a Porto</legend>
                    <nav>
                        <fieldset className='m-4'>
                            <legend className="text-form">Nome</legend>
                            <input className='campo-form' type="text" name="nome" id="idNome" placeholder="Digite seu nome" required onChange={(e) => setNome(e.target.value)} />
                        </fieldset>
                        <fieldset className='m-4'>
                            <legend className="text-form">CPF</legend>
                            <input className='campo-form'pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"type="text"name="CPF"id="idCPF"placeholder="Digite seu CPF" required onInput={formatarCPF} onChange={(e) => setCpf(e.target.value)}/>
                        </fieldset>
                        <fieldset className='m-4'>
                            <legend className='text-form'>Telefone</legend>
                            <input className='campo-form' type="text" name="Telefone" id="idTelefone" placeholder="Digite seu telefone" required onChange={(e) => setTelefone(e.target.value)}/>
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
                    <Link href="/login/perfil">
                        <button  className="botao-telas" onClick={validarFormulario}>Entrar</button>
                    </Link>
                </div>
            </nav>
        </main>
    );
}
