"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [documentos, setDocumentos] = useState(null)
    const [usuario, setUsuario] = useState({"nome":"Não encontrado"})

    useEffect(() => {
        const fetchData = async () => {
            try {


                const responseDocumentos = await fetch("http://localhost:8080/projeto/documentacao", { 
                    method: "GET"})
                const dataDocumentos = await responseDocumentos.json();
                const userRecuperado = sessionStorage.getItem('infoUser')
                if(userRecuperado){
                    const user = JSON.parse(userRecuperado)
                    setUsuario(user)
                    const cpfInt = user.cpf.split(/[.-]/).join('');
                    for (let i = 0; i < dataDocumentos.length; i++) {
                        console.log(dataDocumentos[i].cpfDono, cpfInt)
                        if (dataDocumentos[i].cpfDono == cpfInt){
                            setDocumentos(dataDocumentos[i])
                        }
                    }

                    
                }
            } catch (error) {
                console.error("Erro ao recuperar dados:", error);
            }    
        };    
        
        fetchData();
    },[]);    

    function conteudoDocumentos(){
        if (documentos != null){
            return (
                <nav className='flex flex-col  items-center'>
                <ul className=' flex flex-wrap bg-blue-300 p-5 rounded-lg'>
                    <li className='border-4 border-blue-800 rounded-xl p-2 text-3xl'>
                        <p>Nome do Cliente: {usuario.nome}</p>
                        <p>Descrição: {documentos.descricao}</p>
                        <p>Data da compra: {documentos.dataCompra}</p>
                    </li>
                </ul>        
                <Link href="/login">FECHAR</Link>
            </nav>
            )
        } else {
            return(
            <nav className='dados-perfil-cliente'>
                <div className='campos-dados'>
                    <p>Nenhum documento de bicicleta</p>
                </div>    
                <Link href="/login">FECHAR</Link>
            </nav>        
        )}
    }
    return (
    
        <div className=" bg-white  p-5 rounded-lg">
            {conteudoDocumentos()}
        </div>

  )
}
