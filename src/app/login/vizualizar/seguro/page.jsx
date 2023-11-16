"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [seguro, setSeguro] = useState(null)
    const [usuario, setUsuario] = useState({"nome":"Não encontrado"})

    useEffect(() => {
        const fetchData = async () => {
            try {


                const responseSeguro = await fetch("http://localhost:8080/projeto/seguro", { 
                    method: "GET"})
                const dataSeguro = await responseSeguro.json();
                const userRecuperado = sessionStorage.getItem('infoUser')
                if(userRecuperado){
                    const user = JSON.parse(userRecuperado)
                    setUsuario(user)
                    const cpfInt = user.cpf.split(/[.-]/).join('');
                    for (let i = 0; i < dataSeguro.length; i++) {
                        console.log(dataSeguro[i].cpfDono, cpfInt)
                        if (dataSeguro[i].cpfDono == cpfInt){
                            setSeguro(dataSeguro[i])
                        }
                    }

                    
                }
            } catch (error) {
                console.error("Erro ao recuperar dados:", error);
            }    
        };    
        
        fetchData();
    },[]);    


    function conteudoSeguros(){
        if (seguro != null){
            return (
                <nav className='flex flex-col  items-center'>
                <ul className=' flex flex-wrap bg-blue-300 p-5 rounded-lg'>
                    <li className='border-4 border-blue-800 rounded-xl p-2 text-3xl'>
                        <p>Nome do Cliente: {usuario.nome}</p>
                        <p>Duração: {seguro.duracao}</p>
                        <p>Ele está {seguro.status} no momento</p>
                    </li>
                </ul>        
                <Link href="/login">FECHAR</Link>
            </nav>
            )
        } else {
            return(
            <nav className='dados-perfil-Seguro'>
                <div className='campos-dados'>
                    <p>Nenhum seguro de bicicleta</p>
                </div>    
                <Link href="/login">FECHAR</Link>
            </nav>        
        )}
    }

    return (

        <div className=" bg-white  p-5 rounded-lg">
            {conteudoSeguros()}
        </div>
        )
}
