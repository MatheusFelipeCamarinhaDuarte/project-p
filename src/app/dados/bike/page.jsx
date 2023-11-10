
import Link from "next/link";

function recolherDados(){
    let inputModelo = document.getElementById("idModelo");
    let modelo = inputModelo.value;
    let inputNum = document.getElementById("idNSerie");
    let num = inputNum.value;
    let inputValor = document.getElementById("idValor");
    let valor = inputValor.value;
    let infoBike = [modelo, num, valor];
    localStorage.setItem("infoBike", JSON.stringify(infoBike));
  }
  
  export default function index() {
    return (
    <main>
        <div className='fundo-pagina'>
            <form className="formulario">
                <legend className="titulo-dados">Dados da Bike</legend>
                <fieldset>
                    <legend className='text-form' for="idModelo">Modelo</legend>
                    <input className='campo-form' type="text" name="Modelo" id="idModelo" placeholder="Digite seu Modelo de bike" required />
                </fieldset>
                <fieldset>
                    <legend className='text-form' for="idNSerie">Nº de Série</legend>
                    <input className='campo-form' type="text" name="NSerie" id="idNSerie" placeholder="Digite seu Nº Série" required/>
                </fieldset>
                <fieldset>
                    <legend className="text-form" for="idValor">Valor</legend>
                    <input className='campo-form' type="text" name="Valor" id="idValor" placeholder="Digite seu Valor TOTAL da sua bike" required/>
                </fieldset>
            </form>
            </div>

        <nav className="navegacao">
            <div>
                <Link  href="/dados/cliente">
                    <button className="botao-telas">voltar</button>
                </Link>    
            </div>
            <div>
                <Link href="/dados/fotos">
                    <button onClick="" className="botao-telas">avançar</button>
                </Link>
            </div>
        </nav>   
    </main>
    )
}