"use client"
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export default function Home() {


  const [mostrarModalEssencial, setMostrarModalEssencial] = useState(false);
  const [mostrarModalLeve, setMostrarModalLeve] = useState(false);
  const [mostrarModalElite, setMostrarModalElite] = useState(false);

  const abrirModalEssencial = () => {
    setMostrarModalEssencial(true);
  };

  const fecharModalEssencial = () => {
    setMostrarModalEssencial(false);
  };
  const abrirModalLeve = () => {
    setMostrarModalLeve(true);
  };

  const fecharModalLeve = () => {
    setMostrarModalLeve(false);
  };
  const abrirModalElite = () => {
    setMostrarModalElite(true);
  };

  const fecharModalElite = () => {
    setMostrarModalElite(false);
  };

  return (
    <div className='fundo-pagina'>

      <div className='topo-topo'>
        <div className='topo-chamatriz'>
          <div>
            <h1 type="Title2" color="black100" font-style="normal" data-testid="typography-container">Seguro Bike da Porto Seguro</h1>
            <p class='m-8 text-gray-700 text-xl line-height: 2.8rem font-family: "Porto Roobert" font-weight: 400'>Uma solução completa que oferece proteção e serviços para você se aventurar sem medo.</p>
            <div>
              <Link href='/login'>
                <button className='botao-cote-ja'><span>Cote já</span></button>
              </Link>
              <div></div>
            </div>
          </div>
          <div class='flex items-center'>
            <Image class="rounded" src="/images/ciclista-topo.jpg" alt="Imagem de ciclista andando por uma rodovia arborizada" width={600} height={500}/>
          </div>
        </div>
      </div>

          {mostrarModalEssencial && (
                  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className=" fixed modal-container bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2">
                      <div className='plano font-sans font-bold gap-12'>
                          <h3>Benefícios</h3>
                          <ul className="flex list-disc flex-col gap-8">
                            <li>Reparo de câmaras de ar e reparo ou troca de correntes</li>
                            <li>Substituição ou regulagem de selim e canote de selim, manetes de freios e cabo de aço, freio dianteiro e traseiro</li>
                          </ul>
                          <button onClick={() => setMostrarModalEssencial(false)}>Fechar</button>
                      </div>
                    </div>
                  </div>
                )}
      
          {mostrarModalLeve && (
                  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className=" fixed modal-container bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2">
                      <div className='plano font-sans font-bold gap-12'>
                          <h3 className="text-3xl font-sans">Benefícios</h3>
                          <ul className="flex list-disc flex-col gap-8">
                            <li>Benefícios Pedal Essencial</li>  
                            <li>Lubrificação de correntes e coroas</li>
                            <li>Transporte do segurado e Bike - limite de 50km, em caso de quebra ou acidente</li>
                          </ul>
                          <button onClick={() => setMostrarModalLeve(false)}>Fechar</button>
                      </div>
                    </div>
                  </div>
                )}

                {mostrarModalElite && (
                        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                          <div className=" fixed modal-container bg-white p-6 rounded shadow-lg w-11/12 md:w-1/2">
                            <div className='plano font-sans font-bold gap-12'>
                                <h3>Benefícios</h3>
                                <ul className="flex list-disc flex-col gap-8">
                                  <li>Benefícios Pedal Leve</li>
                                  <li>Transporte do segurado e Bike - limite de 150km, em caso de quebra ou acidente </li>
                                  <li>Instalação de suporte de parede e chão para bike</li>
                                  <li>Serviço de Leva e Traz, com limite de 50km, mediante agendamento prévio</li>
                                </ul>
                                <button onClick={() => setMostrarModalElite(false)}>Fechar</button>
                            </div>
                          </div>
                        </div>
                      )}


      <div className='planos'>
      
        <div className='plano'>
          <Image src="/images/pedal-essencial.jpg" alt="Cara pedalando" width={600} height={500}/>
          <h2>Pedal Essencial</h2> 
          <div>
            <h3>O plano gratuito para você experimentar um dos serviços essenciais oferecidos, de acordo com as suas necessidades.</h3>
          </div>
          <button id='saiba-mais' onClick={abrirModalEssencial}>Saiba mais</button>
        </div>
        <div className='plano'>
          <Image src="/images/pedal-leve.jpg" alt="Cara pedalando" width={600} height={500}/>
          <h2>Pedal Leve</h2>
          <div>
            <h3>Você gosta de pedalar e está buscando um plano de serviços intermediário? O Pedal leve da Porto é para você.</h3>
          </div>
          <button id='saiba-mais' onClick={abrirModalLeve}>Saiba mais</button>
        </div>

        <div className='plano'>
          <Image src="/images/pedal-elite.jpg" alt="Cara pedalando" width={600} height={500}/>
          <h2>Pedal Elite</h2>
          <div>
            <h3>Conte com diversos serviços capazes de elevar suas aventuras para o próximo nível.</h3>
          </div>
          <button id='saiba-mais' onClick={abrirModalElite}>Saiba mais</button>
        </div>
      </div>

        <nav className='vistoria'>
          <button className="botao-telas bg-blue-600">
            <Link className='texto-vistoria' href='/login'>Realizar vistoria</Link>
          </button>
        </nav>

    </div>

  )
}
