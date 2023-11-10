import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
export default function Home() {

    function abrirModal(){
      
    }

  return (
    <div className='fundo-pagina'>

      <div className='topo-topo'>
        <div className='topo-chamatriz'>
          <div>
            <h1 type="Title2" color="black100" font-style="normal" data-testid="typography-container">Seguro Bike da Porto Seguro</h1>
            <p class='m-8 text-gray-700 text-xl line-height: 2.8rem font-family: "Porto Roobert" font-weight: 400'>Uma solução completa que oferece proteção e serviços para você se aventurar sem medo.</p>
            <div>
              <button className='botao-cote-ja'><span>Cote já</span></button>
              <div></div>
            </div>
          </div>
          <div class='flex items-center'>
            <Image class="rounded" src="/images/ciclista-topo.jpg" alt="Imagem de ciclista andando por uma rodovia arborizada" width={600} height={500}/>
          </div>
        </div>
      </div>
      



      <div className='planos'>
      
        <div className='plano'>
          <Image src="/images/pedal-essencial.jpg" alt="Cara pedalando" width={600} height={500}/>
          <h2>Pedal Essencial</h2> 
          <div>
            <h3>O plano gratuito para você experimentar um dos serviços essenciais oferecidos, de acordo com as suas necessidades.</h3>
          </div>
          <button id='saiba-mais'>Saiba mais</button>
        </div>
        <div className='plano'>
          <Image src="/images/pedal-leve.jpg" alt="Cara pedalando" width={600} height={500}/>
          <h2>Pedal Leve</h2>
          <div>
            <h3>Você gosta de pedalar e está buscando um plano de serviços intermediário? O Pedal leve da Porto é para você.</h3>
          </div>
          <button id='saiba-mais'>Saiba mais</button>
        </div>

        <div className='plano'>
          <Image src="/images/pedal-elite.jpg" alt="Cara pedalando" width={600} height={500}/>
          <h2>Pedal Elite</h2>
          <div>
            <h3>Conte com diversos serviços capazes de elevar suas aventuras para o próximo nível.</h3>
          </div>
          <button id='saiba-mais'>Saiba mais</button>
        </div>
      </div>

        <nav className='vistoria'>
          <button className="botao-telas">
            <Link className='texto-vistoria' href='/dados/cliente'>Realizar vistoria</Link>
          </button>
        </nav>

    </div>

  )
}
