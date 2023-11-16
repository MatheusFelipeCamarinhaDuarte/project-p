"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function page() {
    const [bikeUser, setBikeUser] = useState(null)
    const [bikeAlterada, setBikeAlterada] = useState(null)
    const [modelo, setModelo] = useState('');
    const [valor, setValor] = useState('');
    const userRecuperado = sessionStorage.getItem('infoUser')
    const infoUser = JSON.parse(userRecuperado)
    const cpfInt = infoUser.cpf.split(/[.-]/).join('');


    const alterarInput =(serial) =>{
        setBikeAlterada(serial)
        console.log(bikeAlterada)
        abrirBikes()
    }
    const alterar = () =>{
        console.log(parseInt(cpfInt))
        console.log(modelo)
        console.log(parseInt(bikeAlterada))
        console.log(parseInt(valor))
        const novaBike = {
            "cpfDono":parseInt(cpfInt),
            "modelo":modelo,
            "numSerie":parseInt(bikeAlterada),
            "preco":parseInt(valor),
        }
        console.log(novaBike)
        const bikeJson = JSON.stringify(novaBike) 
        console.log(bikeJson)
        try {
            fetch(`http://localhost:8080/projeto/bicicleta/${bikeAlterada}`,  { 
                    method: "DELETE"});
            fetch("http://localhost:8080/projeto/bicicleta", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body: bikeJson,
            });
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
        }    
        alert(`A bicicleta foi alterada`)
        location.reload();
    }

    useEffect(() => {
        const fetchData = async () => {



    const responseBike = await fetch("http://localhost:8080/projeto/bicicleta",  { 
        method: "GET"});

    const dataBike = await responseBike.json();

    const userRecuperado = sessionStorage.getItem('infoUser')
    if(userRecuperado){
        const user = JSON.parse(userRecuperado)
        const cpfInt = user.cpf.split(/[.-]/).join('');
        const bikes = []
        for (let j = 0; j < dataBike.length; j++){
            if (dataBike[j].cpfDono == cpfInt){

                bikes.push(dataBike[j])
            }
        }
        if (bikes.length != 0){
            setBikeUser(bikes)
        }
    }
}
    fetchData();
},[]);    
    


const [mostrarBikes, setMostrarBikes] = useState(true);
const [mostrarDados, setMostrarDados] = useState(false);

const abrirBikes = () => {
    setMostrarBikes(false);
    setMostrarDados(true);
}
const fecharBikes = () => {
    setMostrarBikes(true);
    setMostrarDados(false);
} 

    function conteudoBike(){
        if (bikeUser != null){
            return (
            <nav className='dados-perfil-cliente flex flex-col items-center'>
                <ul className='dados-perfil-cliente flex flex-wrap'>
                    {bikeUser.map((bicicletas) =>
                    <li key={bicicletas.id} className='border-4 border-blue-800 rounded-xl p-2 flex flex-col'>
                        <p>Modelo: {bicicletas.modelo} </p>
                        <p>Nº de Série: {bicicletas.numSerie}</p>
                        <p>Preço: {bicicletas.preco} </p>
                        <button className='flex justify-end' onClick={() => alterarInput(bicicletas.numSerie)}>
                            <Image  src="/images/icones/edit.png" alt="lixeira" width={32} height={32}></Image>
                        </button>
                    </li>
                    )}
                </ul>
                <Link href="/login">FECHAR</Link>    
            </nav>
            )
        } else {
            return(
            <nav className='dados-perfil-cliente'>
                <div className='campos-dados'>
                    <p>Nenhuma bicicleta encontrada</p>
                </div>    
                <div className='resposta-dados'>
                    <Link href="/dados/bike">Cadastre uma bike</Link>
                </div>    
                <Link href="/login">FECHAR</Link>
            </nav>        
        )}
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
                            <legend className='text-form'>Novo Modelo</legend>
                            <input className='campo-form' type="text" name="Modelo" id="idModelo" placeholder="Digite seu Modelo de bike" onChange={(e) => setModelo(e.target.value)} required />
                        </fieldset>
                        <fieldset className="m-4">
                            <legend className="text-form">Novo Valor</legend>
                            <input className='campo-form'  type="number" name="Valor" id="idValor" placeholder="Digite seu Valor TOTAL da sua bike" onChange={(e) => setValor(e.target.value)} required/>
                        </fieldset>
                    </nav>
                </form>
            </div>

            <nav className="navegacao">
                <div>
                        <button className="botao-telas" onClick={fecharBikes}>voltar</button>
                </div>
                <div>
                        <button onClick={alterar} className="botao-telas">avançar</button>
                </div>
            </nav>
        </div>
        )}

{mostrarBikes && (

    <div className=" bg-white  p-5 rounded-lg">
        {conteudoBike()}
    </div>
)}
    </main>
)

}
