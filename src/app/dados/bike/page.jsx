"use client"
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

    export default function Page() {


    const [modelo, setModelo] = useState('');
    const [numSerie, setNumSerie] = useState('');
    const [valor, setValor] = useState('');

    function recolherDados(){
        let infoBike = {'modelo':modelo, 'numSerie':numSerie, 'valor':valor};
        sessionStorage.setItem('infoBike', JSON.stringify(infoBike));
        setModelo('')
        setNumSerie('')
        setValor('')
        abrirFotos()
    }

    const validarFormulario = (event) => {
        event.preventDefault(); 
        if (!modelo || !numSerie || !valor) {
          alert('Por favor, preencha todos os campos da bike.');
        } else {
            console.log("validado")
          recolherDados(); // Coleta os dados se os campos estiverem preenchidos
            
        }
    };

    const [mostrarFotos, setMostrarFotos] = useState(false);
    const [mostrarDados, setMostrarDados] = useState(true);

    const abrirFotos = () => {
        setMostrarFotos(true);
        setMostrarDados(false);
    }
    const fecharFotos = () => {
        setMostrarFotos(false);
        setMostrarDados(true);
    } 
    return (
    <main>
        {mostrarDados &&(
        <div>
            <div className='fundo-pagina'>          
                <form className="formulario">
                    <legend className="titulo-dados">Dados da Bike</legend>
                    <nav>
                        <fieldset className="m-4">
                            <legend className='text-form'>Modelo</legend>
                            <input className='campo-form' type="text" name="Modelo" id="idModelo" placeholder="Digite seu Modelo de bike" onChange={(e) => setModelo(e.target.value)} required />
                        </fieldset>
                        <fieldset className="m-4">
                            <legend className='text-form'>Nº de Série</legend>
                            <input className='campo-form uppercase' autocapitalize="characters" maxLength="20" type="text" name="NSerie" id="idNSerie" placeholder="Digite seu Nº Série" onChange={(e) => setNumSerie(e.target.value)} required/>
                        </fieldset>
                        <fieldset className="m-4">
                            <legend className="text-form">Valor</legend>
                            <input className='campo-form'  type="number" name="Valor" id="idValor" placeholder="Digite seu Valor TOTAL da sua bike" onChange={(e) => setValor(e.target.value)} required/>
                        </fieldset>
                    </nav>
                </form>
            </div>

            <nav className="navegacao">
                <div>
                    <Link  href="/login">
                        <button className="botao-telas">voltar</button>
                    </Link>    
                </div>
                <div>
                    <Link href="/dados/bike/fotos">
                        <button onClick={validarFormulario} className="botao-telas">avançar</button>
                    </Link>
                </div>
            </nav>
        </div>
        )}
        {mostrarFotos &&(
        <div>
            <div className='fundo-pagina'>
                <form className='formulario'>
                    <fieldset>
                        <legend className='titulo-fotos'>Fotos</legend>
                        <div className='superior'>
                            <nav className="quadro">
                                <nav>
                                    {/* <img className='img-quadro'/> */}
                                    {/* 100px por 80px */}
                                    <p>Foto do Quadro</p>
                                </nav>
                                <button className="botao-enviar">
                                    {/* <Link className="texto-enviar">Enviar</Link> */}
                                </button>
                            </nav>
                            <nav className="quadro">
                                <nav>
                                    {/* <img  className='img-num'/> */}
                                    {/* 80px por 80px */}
                                    <p>Nº de série</p>
                                </nav>
                                <button className="botao-enviar">
                                    {/* <Link className="texto-enviar">Enviar</Link> */}
                                </button>
                            </nav>
                            <nav className="quadro">
                                <nav>
                                    {/* <img  className='img-roda-tras'/> */}
                                    {/* 60px por 72px */}
                                    <p>Roda traseira</p>
                                </nav>
                                <button className="botao-enviar">
                                    {/* <Link className="texto-enviar">Enviar</Link> */}
                                </button>
                            </nav>
                            <nav className="quadro">
                                <nav>
                                    {/* <img  className='img-roda-frente'/> */}
                                    {/* 60px por 72px */}
                                    <p>Roda frontal</p>
                                </nav>
                                <button className="botao-enviar">
                                    {/* <Link className="texto-enviar">Enviar</Link> */}
                                </button>
                            </nav>
                        </div>
                    <div className='inferior'>
                            <nav className="quadro">
                                <nav>
                                    {/* <img className='img-frente-tras'/> */}
                                    {/* 70px por 72px */}
                                    <p>Foto frontal</p>
                                </nav>
                                <button className="botao-enviar">
                                    {/* <Link className="texto-enviar">Enviar</Link> */}
                                </button>
                            </nav>
                            <nav className="quadro">
                                <nav>
                                    {/* <img  className='img-lateral'/> */}
                                    {/* 100px por 72px */}
                                    <p>Foto Lateral</p>
                                </nav>
                                <button className="botao-enviar">
                                    {/* <Link className="texto-enviar">Enviar</Link> */}
                                </button>
                            </nav>
                            <nav className="quadro">
                                <nav>
                                    {/* <img  className='img-frente-tras'/> */}
                                    {/* 70px por 72px */}
                                    <p>Foto Traseira</p>
                                </nav>
                                <button className="botao-enviar">
                                    {/* <Link className="texto-enviar">Enviar</Link> */}
                                </button>
                            </nav>
                            <nav className="quadro">
                                <nav>
                                    {/* <img  className='img-acessorios'/> */}
                                    {/* 124px por 72px */}
                                    <p>Acessórios</p>
                                </nav>
                                <button className="botao-enviar">
                                    {/* <Link className="texto-enviar">Enviar</Link> */}
                                </button>
                            </nav>
                            </div>
                    </fieldset>
                </form>
            </div>
            <nav className="navegacao">
                <div>
                        <button className="botao-telas" onClick={fecharFotos}>voltar</button>
                </div>
                <div>
                    <Link href='/planos'>
                        <button  className="botao-telas">avançar</button>
                    </Link>
                </div>
            </nav>
        </div>
        )}
    </main>
    )
}
