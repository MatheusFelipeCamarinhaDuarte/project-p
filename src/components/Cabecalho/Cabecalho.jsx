"use client"
import Link from "next/link";
import Image from 'next/image';




export default function Cabecalho() {

    return (
        <header className="">
            <nav className="cabecalho">
                <div className="cabecalho-logo">
                    <Link href="/">
                        <Image src="/images/icones/locked.png" alt="cadeado" width={50} height={50}/>
                        <p>PROJECT-P</p>
                    </Link>
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