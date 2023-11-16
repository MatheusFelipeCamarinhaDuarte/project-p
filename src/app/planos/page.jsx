"use client"
import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Page() {
    const storegeRecuperadoUser = sessionStorage.getItem('infoUser')
    const storegeRecuperadoBike = sessionStorage.getItem('infoBike')
    const infoUser = JSON.parse(storegeRecuperadoUser)
    const infoBike = JSON.parse(storegeRecuperadoBike)
    const cpfInt = infoUser.cpf.split(/[.-]/).join('');

    
    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
    const route = useRouter()
    
    const handleSubmit = async () => {
        console.log(infoBike)
        console.log(infoUser)
        const novaBike = {
            "cpfDono":parseInt(cpfInt),
            "modelo":infoBike.modelo,
            "numSerie":parseInt(infoBike.numSerie),
            "preco":parseInt(infoBike.valor),
        }
        console.log(novaBike)
        const bikeJson = JSON.stringify(novaBike) 
        console.log(bikeJson)
        try {
            const response = await fetch("http://localhost:8080/projeto/bicicleta", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body: bikeJson,
            });
        const result = await response.json()
        console.log(result)
        route.push('/login')


        } catch (error) {
            console.error("Erro ao enviar dados:", error);
        }    
    };    
    




function recolherDados(){
    let planoEscolhido = {'plano':opcaoSelecionada};
    sessionStorage.setItem('plano', JSON.stringify(planoEscolhido));
    abrirConfirmacao()
}

const validarFormulario = (event) => {
    event.preventDefault(); 
    if (!opcaoSelecionada) {
        alert('Por favor, Selecione um plano.');
    } else {
      recolherDados(); 
    }
};

    const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
    const [mostrarPlanos, setMostrarPlanos] = useState(true);
    const [mostrarCerteza, setMostrarCerteza] = useState(false)

    const abrirConfirmacao = () => {
        setMostrarConfirmacao(true);
        setMostrarPlanos(false);
    };

    const fecharConfirmacao = () => {
        setMostrarConfirmacao(false);
        setMostrarPlanos(true);
    };

    const abrirCerteza = () => {
        setMostrarCerteza(true)
    }

    const enviarDados = (event) => {
        handleSubmit()
        abrirCerteza()
    }

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
                            <option value="Essencial">Plano Essencial</option>
                            <option value="Leve">Plano Leve</option>
                            <option value="Elite">Plano Elite</option>
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
                                    <p  className="campo-form" id='idInfoNome'>{infoUser.nome}</p>
                                </div>
                                <div>
                                    <h3 className="text-form">CPF</h3>
                                    <p  className="campo-form" id='idInfoCPF'>{infoUser.cpf}</p>
                                </div>
                            </nav>
                            <nav>
                                <div>
                                    <h3 className="text-form">Modelo</h3>
                                    <p  className="campo-form">{infoBike.modelo}</p>
                                </div>
                                <div>
                                    <h3 className="text-form">Nº de Série</h3>
                                    <p  className="campo-form">{infoBike.numSerie}</p>
                                </div>
                                <div>
                                    <h3 className="text-form">Preço</h3>
                                    <p  className="campo-form">{infoBike.valor}</p>
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
                        </nav>
                    </nav>
                </div>
            </nav>
        )}
    </main>
)
}
