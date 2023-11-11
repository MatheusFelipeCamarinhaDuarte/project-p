"use client"
import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";



export function atualizar(){

    let recuperado = sessionStorage.getItem("conectado")
    let login = JSON.parse(recuperado)
    let conectado = login.login
    if (conectado){
        setStringDeEmail('ver perfil')
        setUrl('/login/perfil')
    } else {
        setStringDeEmail('Realizar login')
        setUrl('/login')
    }
}
export default function Cabecalho() {
    const [stringDeEmail, setStringDeEmail] = useState('Realizar login')
    const [url, setUrl] = useState('/login')


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
                    <Link className="link-cabecalho" onClick={atualizar} href={url}><span>{stringDeEmail}</span></Link>
                </div>
            </nav>
        </header>
    )
}