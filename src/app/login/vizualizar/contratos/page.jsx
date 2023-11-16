"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [contrato, setContrato] = useState(null)
    const [usuario, setUsuario] = useState({"nome":"Não encontrado"})

    useEffect(() => {
        const fetchData = async () => {
            try {


                const responseContrato = await fetch("http://localhost:8080/projeto/contrato", { 
                    method: "GET"})
                const dataContrato = await responseContrato.json();
                const userRecuperado = sessionStorage.getItem('infoUser')
                if(userRecuperado){
                    const user = JSON.parse(userRecuperado)
                    setUsuario(user)
                    const cpfInt = user.cpf.split(/[.-]/).join('');
                    for (let i = 0; i < dataContrato.length; i++) {
                        console.log(dataContrato[i].cpfDono, cpfInt)
                        if (dataContrato[i].cpfDono == cpfInt){
                            setContrato(dataContrato[i])
                        }
                    }

                    
                }
            } catch (error) {
                console.error("Erro ao recuperar dados:", error);
            }    
        };    
        
        fetchData();
    },[]);    

    
    function conteudoContratos(){        
        if (contrato != null){
            return (
                <nav className='flex flex-col  items-center'>
                <ul className='flex flex-wrap bg-blue-300 p-5 rounded-lg'>
                    <li className='border-4 border-blue-800 rounded-xl p-2 text-3xl'>
                        <p>Acordo: {contrato.acordo}</p>
                        <p>Data: {contrato.data}</p>
                        <p>Nome do Cliente: {usuario.nome}</p>
                    </li>
                </ul>        
                <Link href="/login">FECHAR</Link>
            </nav>
            )
        } else {
            return(
            <nav className='dados-perfil-Contrato'>
                <div className='campos-dados'>
                    <p>Nenhuma bicicleta com contrato</p>
                </div>    
                <Link href="/login">FECHAR</Link>
            </nav>        
        )}
    }

    return (
   
        <div className=" bg-white  p-5 rounded-lg">
            {conteudoContratos()}
        </div>

  )
}
