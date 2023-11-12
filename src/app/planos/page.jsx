"use client"
import Link from "next/link";
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Page() {
  const [infoUser, setInfoUser] = useState({});
  const [infoBike, setInfoBike] = useState({});
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
  const [mostrarPlanos, setMostrarPlanos] = useState(true);
  const [mostrarCerteza, setMostrarCerteza] = useState(false);
  const [plano, setPlano] = useState(null);

  useEffect(() => {
    const storedPlano = sessionStorage.getItem('plano');
    if (storedPlano) {
      setPlano(JSON.parse(storedPlano));
    }

    const storedInfoUser = localStorage.getItem('infoUser');
    const storedInfoBike = localStorage.getItem('infoBike');
    if (storedInfoUser && storedInfoBike) {
      setInfoUser(JSON.parse(storedInfoUser));
      setInfoBike(JSON.parse(storedInfoBike));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('infoUser', JSON.stringify(infoUser));
  }, [infoUser]);

  useEffect(() => {
    localStorage.setItem('infoBike', JSON.stringify(infoBike));
  }, [infoBike]);

  function recolherDados() {
    if (!opcaoSelecionada) {
      alert('Por favor, Selecione um plano.');
    } else {
      setPlano({ plano: opcaoSelecionada });
      abrirConfirmacao();
    }
  }

  const abrirConfirmacao = () => {
    setMostrarConfirmacao(true);
    setMostrarPlanos(false);
  };

  const fecharConfirmacao = () => {
    setMostrarConfirmacao(false);
    setMostrarPlanos(true);
  };

  const abrirCerteza = () => {
    setMostrarCerteza(true);
  };



  const enviarDados = () => {
    abrirCerteza();
  };

  const nome = infoUser.nome;
  const cpf = infoUser.cpf;
  const modelo = infoBike.modelo;
  const numSerie = infoBike.numSerie;
  const valor = infoBike.valor;

    return (

    <main>
        {mostrarPlanos&&(
            <div>
                <div className='fundo-pagina'>
                    <div className='planos'>
                        <div className='plano'>
                            <h2 className='titulo-plano'>Pedal Essencial</h2> 
                            <Image src="/images/pedal-essencial.jpg" alt="Cara pedalando" width={600} height={500} />
                            <div className='beneficios'>
                            <h3>Benefícios</h3>
                                <ul>
                                    <li>Reparo de câmaras de ar e reparo ou troca de correntes</li>
                                    <li>Substituição ou regulagem de selim e canote de selim, manetes de freios e cabo de aço, freio dianteiro e traseiro</li>
                                </ul>
                            </div>
                        </div>

                        <div className='plano'>
                            <h2 className='titulo-plano'>Pedal Leve</h2>
                            <Image src="/images/pedal-leve.jpg" alt="Cara pedalando" width={600} height={500} />
                            <div className='beneficios'>
                                <h3>Benefícios</h3>
                                <ul>
                                    <li>Benefícios Pedal Essencial</li>  
                                    <li className=''>Lubrificação de correntes e coroas</li>
                                    <li>Transporte do segurado e Bike - limite de 50km, em caso de quebra ou acidente</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className='plano'>
                            <h2 className='titulo-plano'>Pedal Elite</h2>
                            <Image src="/images/pedal-elite.jpg" alt="Cara pedalando" width={600} height={500}/>
                            <div className='beneficios'>
                                <h3>Benefícios</h3>
                                <ul>
                                <li>Benefícios Pedal Leve</li>
                                    <li>Transporte do segurado e Bike - limite de 150km, em caso de quebra ou acidente </li>
                                    <li>Instalação de suporte de parede e chão para bike</li>
                                    <li>Serviço de Leva e Traz, com limite de 50km, mediante agendamento prévio</li>
                                    </ul>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="selecao bg-blue-500 rounded-lg p-4">
                        <h1 className='text-white'>Selecione uma opção:</h1>
                        <select id="opcaoSelecionada" className="p-2 rounded-md" onChange={(e) => setOpcaoSelecionada(e.target.value)}>
                            <option value="">Selecione...</option>
                            <option value="Plano Essencial">Plano Essencial</option>
                            <option value="Plano Leve">Plano Leve</option>
                            <option value="Plano Elite">Plano Elite</option>
                            </select>
                            </div>
                </div>
                <nav className="navegacao">
                    <div>
                        <Link href="/dados/bike">
                            <button className="botao-telas">voltar</button>
                        </Link>    
                    </div>
                    <div>
                        <button  onClick={validarFormulario} className="botao-telas">avançar</button>
                    </div>
                </nav>
            </div>
        )}
        {mostrarConfirmacao &&(
            <div>
                <div className='fundo-pagina'>
                    <div className="pagina-confirm">
                        <legend className="titulo-dados">Confirme as seguintes informações</legend>
                        <nav>
                            <nav>   
                                <div>
                                    <h3 className="text-form">Nome</h3>
                                    <p  className="campo-form" id='idInfoNome'>{nome}</p>
                                </div>
                                <div>
                                    <h3 className="text-form">CPF</h3>
                                    <p  className="campo-form" id='idInfoCPF'>{cpf}</p>
                                </div>
                            </nav>
                            <nav>
                                <div>
                                    <h3 className="text-form">Modelo</h3>
                                    <p  className="campo-form">{modelo}</p>
                                </div>
                                <div>
                                    <h3 className="text-form">Nº de Série</h3>
                                    <p  className="campo-form">{numSerie}</p>
                                </div>
                                <div>
                                    <h3 className="text-form">Preço</h3>
                                    <p  className="campo-form">{valor}</p>
                                </div>
                            </nav>
                            <nav>
                                <div>
                                    <h3 className="text-form">Plano</h3>
                                    <p className="campo-form">{opcaoSelecionada}</p>
                                </div>
                            </nav>
                        </nav>
                    </div>
                </div>
        <nav className="navegacao">
            <div>
                <button  onClick={fecharConfirmacao} className='botao-telas'>voltar</button>
            </div>
            <div>
                    <button onClick={enviarDados} className='botao-telas'>Confirmar</button>
            </div>
        </nav>
            </div>
        )}
        {mostrarCerteza &&(
            <nav class="fixed top-0 left-0 right-0 bottom-0  w-screen h-screen bg-black bg-opacity-60">    
                <div class="fixed bg-white w-5/12 top-1/2 flex left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-lg justify-center ">
                    <nav className='dados-perfil-cliente p-0'>
                        <nav className='campos-dados flex flex-row max-w-none'>
                            <nav>
                            <p>Parabéns, sua Bike foi cadastrada!!</p>    
                            </nav>
                            <nav>
                            <Link href="/login">
                                <button>Voltar ao perfil</button>
                            </Link>
                            </nav>

                        </nav>
                    </nav>
                </div>
            </nav>
        )}
    </main>
)
}
