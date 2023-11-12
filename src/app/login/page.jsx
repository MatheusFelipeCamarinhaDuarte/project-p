"use client"
import Link from 'next/link';
import React, { useState } from 'react';

export default function Page() {
    let nomelocal = "Não encontrado"
    let cpflocal = "Não encontrado"
    const userRecuperado = localStorage.getItem('infoUser')
    if (userRecuperado){
        const user = JSON.parse(userRecuperado)
        nomelocal = user.nome
        cpflocal = user.cpf
    }
    
    function conteudoBike(){
        const bikeRecuperada = localStorage.getItem('infoBike')
        const planoRecuperado = localStorage.getItem('plano')
        if (bikeRecuperada && planoRecuperado){
            const plano = JSON.parse(planoRecuperado)
            const selecionado = plano.plano
            const bike = JSON.parse(bikeRecuperada)
            const modelo = bike.modelo
            const numSerie = bike.numSerie
            const valor = bike.valor
            return (
                <nav className='dados-perfil-cliente'>
                    <div className='campos-dados'>
                        <p>Modelo: </p>
                        <p>Nº de Série: </p>
                        <p>Preço: </p>
                        <p>Plano: </p>
                    </div>
                    <div className='resposta-dados'>
                        <p>{modelo}</p>
                        <p>{numSerie}</p>
                        <p>{valor}</p>
                        <p>{selecionado}</p>
                    </div>
                    <button onClick={fecharBikes}>FECHAR</button>
                </nav>
            )
        } else {
            return(
            <nav className='dados-perfil-cliente'>
                <div className='campos-dados'>
                    <p>Nenhuma bicicleta encontrada</p>
                </div>
                <div className='resposta-dados'>
                    <Link href="/dados/bike">Cadastre uma bike</Link>
                </div>
                <button onClick={fecharBikes}>FECHAR</button>
            </nav>
        )}
    }


    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');

    function recolherDados(){
        let infoUser = {'nome':nome, 'cpf':cpf};
        let conectado = {'login':true}
        localStorage.setItem('infoUser', JSON.stringify(infoUser));
        localStorage.setItem('conectado', JSON.stringify(conectado));

        abrirUser();
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
        event.preventDefault(); 
        if (!nome || !cpf) {
          alert('Por favor, preencha todos os campos obrigatórios.');
        } else {
          recolherDados(); // Coleta os dados se os campos estiverem preenchidos
            
        }
      };

      const recuperaConect = localStorage.getItem('conectado')
      let login = false
        if(recuperaConect){ 
            const conexao = JSON.parse(recuperaConect)
            login = conexao.login
        }

      const [mostrarUser, setMostrarUser] = useState(login);
      const [mostrarPagina, setMostrarPagina] = useState(!login);
      const [mostrarBikes, setMostrarBikes] = useState(false);
      const [mostrarContrato, setMostrarContrato] = useState(false);
      const [mostrarVistoria, setMostrarVistoria] = useState(false);

      const abrirUser = () => {
        setMostrarUser(true);
        setMostrarPagina(false);
      };
    
      const fecharUser = () => {
        setMostrarUser(false);
        setMostrarPagina(true);
        setNome("")
        setCpf("")

        localStorage.clear()
      };

      const abrirBikes = () => {
        setMostrarBikes(true);
      }
      const fecharBikes = () => {
        setMostrarBikes(false);
      } 
      const abrirContrato = () => {
        setMostrarContrato(true);
      }
      const fecharContrato = () => {
        setMostrarContrato(false);
      } 
      const abrirVistoria = () => {
        setMostrarVistoria(true);
      }
      const fecharVistoria = () => {
        setMostrarVistoria(false);
      } 

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
                                        <p>{nomelocal}</p>
                                        <p>{cpflocal}</p>
                                        <p>Telefone</p>
                                    </div>
                                </nav>
                                <nav className='btn-alterar'>
                                    <Link href='/login/alterar'>
                                        <button className='botao-perfil'>Alterar Informações</button>
                                    </Link>
                                </nav>
                            </div>
                            <div className='meio-perfil'>
                                <div>
                                    <Link href="/dados/bike">
                                        <button  className='botao-perfil'>Cadastrar/alterar bike</button>
                                    </Link>
                                </div>
                                <div>
                                    <button  className='botao-perfil' onClick={abrirBikes}>Ver sua bike</button>
                                    {mostrarBikes && (
                                            <nav class="fixed top-0 left-0 right-0 bottom-0  w-screen h-screen bg-black bg-opacity-60">    
                                                <div class="fixed bg-white w-3/4  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-lg">
                                                    {conteudoBike()}
                                                </div>
                                            </nav>
                                    )}
                                </div>
                            </div>
                            <div className='fim-perfil'>
                                <div>
                                    <button className='botao-perfil' onClick={abrirContrato}>Contrato</button>
                                    {mostrarContrato &&(
                                        <nav class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60">
                                            <div class="fixed bg-white w-3/4 md:max-w-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-lg">
                                                <p>Contrato</p>
                                                <button onClick={fecharContrato}>FECHAR</button>
                                            </div>
                                        </nav>
                                    )}
                                </div>
                                <div>
                                    <button className='botao-perfil' onClick={abrirVistoria}>Status da vistoria</button>
                                    {mostrarVistoria &&(
                                        <nav class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60">
                                            <div class="fixed bg-white w-3/4 md:max-w-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-lg">
                                                <p>Vistoria</p>
                                                <button onClick={fecharVistoria}>FECHAR</button>
                                            </div>
                                        </nav>
                                    )}
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
