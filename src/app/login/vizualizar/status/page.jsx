"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [bikeUser, setBikeUser] = useState(null)



    useEffect(() => {
        const fetchData = async () => {



    const responseBike = await fetch("http://localhost:8080/projeto/bicicleta",  { 
        method: "GET"});
    const responseVistoria = await fetch("http://localhost:8080/projeto/vistoria",  { 
        method: "GET"});
    const dataBike = await responseBike.json();
    const dataVistoria = await responseVistoria.json()

    const userRecuperado = sessionStorage.getItem('infoUser')
    if(userRecuperado){
        const user = JSON.parse(userRecuperado)
        const cpfInt = user.cpf.split(/[.-]/).join('');
        const bikes = []
        
        for (let j = 0; j < dataBike.length; j++){
            if (dataBike[j].cpfDono == cpfInt){
                dataBike[j].vistoria = 0
                for (let k = 0; k <dataVistoria.length; k++){
                    console.log(dataVistoria[k].numBike, dataBike[j].numSerie)
                    if(dataVistoria[k].numBike == dataBike[j].numSerie){
                        console.log("tem vistoria")
                        dataBike[j].vistoria = dataVistoria[k]
                        console.log(dataBike[j].vistoria.data)
                    }
                }
                bikes.push(dataBike[j])
            }
        }
        console.log(bikes[0].vistoria)
        if (bikes.length != 0){
            setBikeUser(bikes)
        }
    }
}
    fetchData();
},[]);    

    function conteudoStatus(){
        if (bikeUser != null){
            return (
                <nav className='dados-perfil-cliente flex flex-col items-center'>
                <ul className='dados-perfil-cliente flex flex-wrap'>
                    {bikeUser.map((bicicletas) =>
                    <li key={bicicletas.id} className='border-4 border-blue-800 rounded-xl p-2'>
                        <p>Modelo: {bicicletas.modelo} </p>
                        <p>Nº de Série: {bicicletas.serial}</p>
                        <p>Preço: {bicicletas.preco}</p>
                        <p>Status da vistoria: </p>
                        <p>{bicicletas.vistoria ==  0 ? "Sem Status" : `sua bicicleta foi submetida a vistoria em ${bicicletas.vistoria.data} e possuí o status: ${bicicletas.vistoria.status}`}</p>
                        
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
                    <p>Nenhuma bicicleta em vistoria</p>
                </div>    
                <Link href="/login">FECHAR</Link>
            </nav>        
        )}
    }

    return (
        <div className=" bg-white  p-5 rounded-lg">
            {conteudoStatus()}
        </div>
        )
}
