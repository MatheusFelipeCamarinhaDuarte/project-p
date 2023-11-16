"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Page() {

    const [usuariosExistentes, setUsuariosExistentes] = useState([])
    const [bike, setBike] = useState('')
    const [bikeUser, setBikeUser] = useState(null)
    const [telefone, setTelefone] = useState('')
    const [nome, setNome] = useState('');
    const [nomeApresentado, setNomeApresentado] = useState('');
    const [cpf, setCpf] = useState('');
    const [cpfApresentado, setCpfApresentado] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {


                const responseCliente = await fetch("http://localhost:8080/projeto/cliente", { 
                    method: "GET"})
                const dataCliente = await responseCliente.json();
            
                setUsuariosExistentes(dataCliente)
                console.log(dataCliente)
                const userRecuperado = sessionStorage.getItem('infoUser')
                if(userRecuperado){
                    const user = JSON.parse(userRecuperado)
                    
                    setTelefone(user.telefone)
                    setCpfApresentado(user.cpf)
                    setNomeApresentado(user.nome)
                }
            } catch (error) {
                console.error("Erro ao recuperar dados:", error);
            }    
        };    
        
        fetchData();
    },[]);    
    
    function formatarCPF(event) {
        const digits = event.target.value.replace(/\D/g, '');
        
        if (digits.length > 10) {
            event.target.value = `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9, 11)}`;
        } else {
            event.target.value = digits;
        }
    }
    
    const validarFormulario = (event) => {
        event.preventDefault(); 
        if (!nome || !cpf) {
            console.log(usuariosExistentes, bike)
            alert('Por favor, preencha todos os campos obrigatórios.');
        } else {
            
            console.log(usuariosExistentes)
            const cpfInt = cpf.split(/[.-]/).join('');
            for ( let i = 0; i < usuariosExistentes.length; i++){
                if (nome == usuariosExistentes[i].nome && parseInt(cpfInt) == usuariosExistentes[i].cpf){
                    const telefone = usuariosExistentes[i].telefone
                    const id = i+1
                    recolherDados(telefone, id);
                }
            }
            
        }
    };
    
    function recolherDados(telefone, id){
        const infoUser = { 'id':id,'nome':nome, 'cpf':cpf, 'telefone':telefone};
        sessionStorage.setItem('infoUser', JSON.stringify(infoUser));
        abrirUser();
        location.reload();
    }
    
    
    
    const recuperaConect = sessionStorage.getItem('infoUser')
    let login = false
    if(recuperaConect){ 
        login = true
    }
    
    const [mostrarUser, setMostrarUser] = useState(login);
    const [mostrarPagina, setMostrarPagina] = useState(!login);
      
    const abrirUser = () => {
        setMostrarUser(true);
        setMostrarPagina(false);
    };
      
    const fecharUser = () => {
        setMostrarUser(false);
        setMostrarPagina(true);
        setNome("")
        setCpf("")
        sessionStorage.clear()
    };


    return (
        <main>
            {mostrarUser && (
                <div className="fundo-pagina">
                    <div className="conteiner-perfil">
                        <div className='conteudo-perfil'>
                            
                            <div className='topo-perfil'>
                                <nav className='dados-perfil-cliente'>
                                    <div className='campos-dados'>
                                        <p>Nome: </p>
                                        <p>CPF: </p>
                                        <p>Telefone: </p>
                                    </div>
                                    <div className='resposta-dados'>
                                        <p>{nomeApresentado}</p>
                                        <p>{cpfApresentado}</p>
                                        <p>{telefone}</p>
                                    </div>
                                </nav>
                            </div>
                            <div className='meio-perfil'>
                                <div>
                                    <Link href="/dados/bike">
                                        <button  className='botao-perfil'>Cadastrar bike</button>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="/login/vizualizar/bike">
                                        <button  className='botao-perfil'>Ver sua(s) bike(s)</button>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="/login/alterar">
                                        <button  className='botao-perfil'>Alterar bike(s)</button>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="/login/deletar">
                                        <button  className='botao-perfil'>Deletar bike(s)</button>
                                    </Link>
                                </div>
                            </div>
                            <div className='fim-perfil'>
                                <div>
                                <Link href="/login/vizualizar/status">
                                    <button  className='botao-perfil'>Status da vistoria</button>
                                </Link>
                                </div>
                                <div>
                                    <Link href="/login/vizualizar/contratos">
                                        <button  className='botao-perfil'>Ver Contratos</button>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="/login/vizualizar/documentos">
                                        <button  className='botao-perfil'>Ver Documentações</button>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="/login/vizualizar/seguro">
                                        <button  className='botao-perfil'>Ver Seguros</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <div className='container-fechar'>
                            <button onClick={fecharUser} className='sair-conta'>Sair do login</button>
                        </div>
                    </div>  
                </div>
            )}


            {mostrarPagina &&(
                <div className='login'>
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
                        <button  className="botao-telas" onClick={validarFormulario}>Entrar</button>
                    </div>
                </nav>
            </div>
            )}

        </main>
    );
}
