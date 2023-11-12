"use client"
import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";




export default function Cabecalho() {
    // const [stringDeEmail, setStringDeEmail] = useState('Realizar login')
    // const [url, setUrl] = useState('/login')
    // let recuperado = sessionStorage.getItem("conectado")
    // if (recuperado){
    //     let login = JSON.parse(recuperado)
    //     let conectado = login.login
    //     if (conectado){
    //         setStringDeEmail('ver perfil')
    //         setUrl('/login/perfil')
    //     } else {
    //         setStringDeEmail('Realizar login')
    //         setUrl('/login')
    //     }
    // }


    return (
        <header className="">
            <nav className="cabecalho">
                <div className="cabecalho-logo">
                    <Image src="/images/icones/locked.png" alt="cadeado" width={50} height={50}/>
                    <p>PROJECT-P</p>
                </div>
                <div className="cabecalho-links">
                    <Link className="link-cabecalho" href="/"><span>Home</span></Link>
                    <Link className="link-cabecalho" href="/sobre"><span>Sobre nós</span></Link>
                    <Link className="link-cabecalho" href="/login"><span>Perfil</span></Link>
                </div>
            </nav>
        </header>
    )
}