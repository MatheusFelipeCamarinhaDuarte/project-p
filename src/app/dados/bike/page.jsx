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
        <fieldset className="form-bike">
            <legend>Dados da Bike</legend>
            <div>
                <label for="idModelo">Modelo</label>
                <input type="text" name="Modelo" id="idModelo" placeholder="Digite seu Modelo de bike" required />
            </div>
            <div>
                <label for="idNSerie">Nº de Série</label>
                <input type="text" name="NSerie" id="idNSerie" placeholder="Digite seu Nº Série" required/>
            </div>
            <div>
                <label className="text-form" for="idValor">Valor</label>
                <input className='campo-form' type="text" name="Valor" id="idValor" placeholder="Digite seu Valor TOTAL da sua bike" required/>
            </div>
        </fieldset>
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