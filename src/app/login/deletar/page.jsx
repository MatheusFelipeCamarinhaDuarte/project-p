"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';


export default function page() {
    const [bikeUser, setBikeUser] = useState(null)

    const deletar =(serial) =>{
        console.log(serial)
        fetch(`http://localhost:8080/projeto/bicicleta/${serial}`,  { 
            method: "DELETE"});
        alert(`A bicicleta foi excluida`)
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
                        <button className='flex justify-end' onClick={() => deletar(bicicletas.numSerie)}>
                            <Image  src="/images/icones/delete.png" alt="lixeira" width={32} height={32}></Image>
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
        <div className=" bg-white  p-5 rounded-lg">
            {conteudoBike()}
        </div>
)

}
