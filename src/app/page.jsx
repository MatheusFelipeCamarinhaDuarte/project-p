import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='fundo-pagina'>
      <div className='planos'>
        <div className='plano'>
          <img className='imagem-plano' src="" />
          <h2 className='titulo-plano'>Pedal Essencial</h2> 
          <div className='beneficios'>
            <h3>Benefícios</h3>
            <ul>
              <li>Reparo de câmaras de ar e reparo ou troca de correntes</li>
              <li>Substituição ou regulagem de selim e canote de selim, manetes de freios e cabo de aço, freio dianteiro e traseiro</li>
            </ul>
          </div>
        </div>

        <div className='plano'>
          <img className='imagem-plano' src="" />
          <h2 className='titulo-plano'>Pedal Leve</h2>
          <div className='beneficios'>
            <h3>Benefícios</h3>
            <ul>
              <li>Benefícios Pedal Essencial</li>
              <li>Lubrificação de correntes e coroas</li>
              <li>Transporte do segurado e Bike - limite de 50km, em caso de quebra ou acidente</li>
            </ul>
            </div>
        </div>

        <div className='plano'>
            <img className='imagem-plano'src="" />
            <h2 className='titulo-plano'>Pedal Elite</h2>
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

        <div className='vistoria'>
          <button className="botao-vistoria">
            <Link className='texto-vistoria' href='/dados/cliente'>Realizar vistoria</Link>
          </button>
        </div>

      </div>
    </div>

  )
}
