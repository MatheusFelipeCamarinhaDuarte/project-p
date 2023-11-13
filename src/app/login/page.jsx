"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Page() {
    
    // const router = useRouter()
    // () => router.push('/sobre')
    
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
                const response = await fetch("http://localhost:3000/base/api-dados", { method: "GET" });
                const data = await response.json();
                setUsuariosExistentes(data.usuarios)
                const userRecuperado = sessionStorage.getItem('infoUser')
                const user = JSON.parse(userRecuperado)
                setBike(data.bike)
                console.log(user.id)
                console.log(data.bike)
                const bikes = []
                for (let j = 0; j < data.bike.length; j++){
                    if (data.bike[j].idono == user.id){
                        
                        console.log("add")
                        console.log(data.bike[j])
                        bikes.push(data.bike[j])
                    }
                }
                setBikeUser(bikes)
                setTelefone(user.telefone)
                setCpfApresentado(user.cpf)
                setNomeApresentado(user.nome)
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
            alert('Por favor, preencha todos os campos obrigatórios.');
        } else {
            console.log(usuariosExistentes[1].nome)
            console.log(nome)
            console.log(cpf)
            console.log(usuariosExistentes)
            for ( let i = 0; i < usuariosExistentes.length; i++){
                if (nome == usuariosExistentes[i].nome && cpf == usuariosExistentes[i].cpf){
                    const telefone = usuariosExistentes[i].telefone
                    const id = i+1
                    console.log("passou")
                    recolherDados(telefone, id);
                     // Coleta os dados se os campos estiverem preenchidos
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
    
    function conteudoBike(){
        if (bikeUser != null){
            return (
            <nav className='flex flex-col items-center'>
                <ul className='dados-perfil-cliente flex flex-wrap'>
                    {bikeUser.map((bicicletas) =>
                    <li key={bicicletas.id} className='border-4 border-blue-800 rounded-xl p-2'>
                        <p>Modelo: {bicicletas.modelo} </p>
                        <p>Nº de Série: {bicicletas.serial}</p>
                        <p>Preço: {bicicletas.preco}</p>
                        <p>Plano: {bicicletas.plano}</p>
                    </li>
                    )}
                </ul>        
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


      const recuperaConect = sessionStorage.getItem('infoUser')
      let login = false
        if(recuperaConect){ 
            login = true
        }

      const [mostrarUser, setMostrarUser] = useState(login);
      const [mostrarPagina, setMostrarPagina] = useState(!login);
      const [mostrarBikes, setMostrarBikes] = useState(false);

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

      const abrirBikes = () => {
        setMostrarBikes(true);
      }
      const fecharBikes = () => {
        setMostrarBikes(false);
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
