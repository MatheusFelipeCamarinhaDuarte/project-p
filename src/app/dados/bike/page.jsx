"use client"
import Link from "next/link";
import { useState } from "react";
import Image from 'next/image';


    export default function Page() {


    const [modelo, setModelo] = useState('');
    const [numSerie, setNumSerie] = useState('');
    const [valor, setValor] = useState('');

    function recolherDados(){
        let infoBike = {'modelo':modelo, 'numSerie':numSerie, 'valor':valor};

        localStorage.setItem('infoBike', JSON.stringify(infoBike));
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



        const [imagemQuadro, setImagemQuadro] = useState('/images/icones/bike/quadro-g.png');
        const [imagemNumero, setImagemNumero] = useState('/images/icones/bike/numero-g.png');
        const [imagemRodaTras, setImagemRodaTras] = useState('/images/icones/bike/roda-tras-g.png');
        const [imagemRodaFrente, setImagemRodaFrente] = useState('/images/icones/bike/roda-frente-g.png');
        const [imagemFontral, setImagemFontral] = useState('/images/icones/bike/frente-g.png');
        const [imagemLateral, setImagemLateral] = useState('/images/icones/bike/lateral-g.png');
        const [imagemTraseira, setImagemTraseira] = useState('/images/icones/bike/frente-g.png');
        const [imagemAcessorios, setImagemAcessorios] = useState('/images/icones/bike/acessorios-g.png');

        const handleImagemChange = (event) => {
            console.log(event.target.files[0])
            let numero = parseInt(event.target.id)
            const file = event.target.files[0];
                if (file) {
                const reader = new FileReader();
            reader.onload = () => {
                if(numero == 1){
                    setImagemQuadro(reader.result);
                } else if (numero == 2){
                    setImagemNumero(reader.result);                            
                } else if (numero == 3){
                    setImagemRodaTras(reader.result);
                } else if (numero == 4){
                    setImagemRodaFrente(reader.result);
                } else if (numero == 5){
                    setImagemFontral(reader.result);
                } else if (numero == 6){
                    setImagemLateral(reader.result);
                } else if (numero == 7){
                    setImagemTraseira(reader.result);
                } else if (numero == 8){
                    setImagemAcessorios(reader.result);
                }

                    }
            reader.readAsDataURL(file);
            };
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
                    <fieldset className="flex flex-col gap-4">
                        <legend className='titulo-dados'>Fotos</legend>
                        <div className='fotos-superior'>
                            <nav className="quadrado-fotos">
                                <nav className="campo-icone">
                                    <Image src={imagemQuadro} alt='icone de quadro de bicicleta' width={256} height={256}/>
                                    <p>Foto do Quadro</p>
                                </nav>
                                <input className="botao-enviar" type="file" id="1" accept="image/*" onChange={handleImagemChange} />
                            </nav>
                            <nav className="quadrado-fotos">
                                <nav  className="campo-icone">
                                    <Image src={imagemNumero} alt='icone de quadro de bicicleta' width={256} height={256}/>
                                    <p>Nº de série</p>
                                </nav>
                                <input className="botao-enviar" type="file" id="2" accept="image/*" onChange={handleImagemChange} />
                            </nav>
                            <nav className="quadrado-fotos">
                                <nav  className="campo-icone">
                                    <Image className="filter grayscale" src={imagemRodaTras} alt='icone de quadro de bicicleta' width={256} height={256}/>
                                    <p>Roda traseira</p>
                                </nav>
                                <input className="botao-enviar" type="file" id="3" accept="image/*" onChange={handleImagemChange} />
                            </nav>
                            <nav className="quadrado-fotos">
                                <nav className="campo-icone">
                                    <Image className="filter grayscale" src={imagemRodaFrente} alt='icone de quadro de bicicleta' width={256} height={256}/>
                                    <p>Roda frontal</p>
                                </nav>
                                <input className="botao-enviar" type="file" id="4" accept="image/*" onChange={handleImagemChange} />
                            </nav>
                        </div>
                    <div className='fotos-inferior'>
                            <nav className="quadrado-fotos">
                                <nav className="campo-icone">
                                    <Image src={imagemFontral} alt='icone da frente de bicicleta' width={256} height={256}/>
                                    <p>Foto frontal</p>
                                </nav>
                                <input className="botao-enviar" type="file" id="5" accept="image/*" onChange={handleImagemChange} />
                            </nav>
                            <nav className="quadrado-fotos">
                                <nav className="campo-icone">
                                    <Image src={imagemLateral} alt='icone da lateral de bicicleta' width={256} height={256}/>
                                    <p>Foto Lateral</p>
                                </nav>
                                <input className="botao-enviar" type="file" id="6" accept="image/*" onChange={handleImagemChange} />
                            </nav>
                            <nav className="quadrado-fotos">
                                <nav className="campo-icone">
                                    <Image src={imagemTraseira} alt='icone da frente de bicicleta' width={256} height={256}/>
                                    <p>Foto Traseira</p>
                                </nav>
                                <input className="botao-enviar" type="file" id="7" accept="image/*" onChange={handleImagemChange} />
                            </nav>
                            <nav className="quadrado-fotos">
                                <nav className="campo-icone">
                                    <Image src={imagemAcessorios} alt='icone de pedal de bicicleta' width={256} height={256}/>
                                    <p>Acessórios</p>
                                </nav>
                                <input className="botao-enviar" type="file" id="8" accept="image/*" onChange={handleImagemChange} />
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
                        <button className="botao-telas">avançar</button>
                    </Link>
                </div>
            </nav>
        </div>
        )}
    </main>
    )
}
