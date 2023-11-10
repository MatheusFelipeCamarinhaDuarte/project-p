import Link from "next/link";



export default function index() {
    return (
    <main className='fundo-pagina'>
        <nav className='form-fotos'>
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
        </nav>
        <nav className="navegacao">
            <div>
                <Link href='/dados/bike'>
                    <button className="botao-telas">voltar</button>
                </Link>    
            </div>
            <div>
                <Link href='/planos'>
                    <button  className="botao-telas">avançar</button>
                </Link>
            </div>
        </nav>
    </main>
    )
}