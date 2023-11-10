import Link from "next/link";
import Image from 'next/image';

// function escolhePlano(){
//     let inputPlano = document.getElementById("opcaoSelecionada")
//     let plano = inputPlano.value
//     localStorage.setItem("plano", JSON.stringify (plano))
// }

export default function index() {
//   const [opcaoSelecionada, setOpcaoSelecionada] = useState(''); // Estado para a opção selecionada

//   // Função para lidar com a mudança de seleção
//     const handleOpcaoChange = (event) => {
//     setOpcaoSelecionada(event.target.value);
//     };


    return (
<main className='fundo-pagina'>
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
    <h1 className='titulo-plano'>Selecione uma opção:</h1>
        {/* adicione o <select> e lide com a mudança de selecao */}
        <select id="opcaoSelecionada">
        {/* value={opcaoSelecionada} onChange={handleOpcaoChange} */}
            <option value="Plano Essencial">Plano Essencial</option>
            <option value="Plano Leve">Plano Leve</option>
            <option value="Plano Elite">Plano Elite</option>
        </select>
    <nav className="navegacao">
        <div>
            <Link href="/dados/fotos">
                <button className="botao-telas">voltar</button>
            </Link>    
        </div>
        <div>
            <Link href="/planos/confirmacao" >
                <button  className="botao-telas">avançar</button>
                {/* onClick={escolhePlano} */}
            </Link>
        </div>
    </nav>
</main>
)
}
