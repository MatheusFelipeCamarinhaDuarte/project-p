import Link from "next/link";
import Image from 'next/image';


export default function Cabecalho() {
    return (
        <header className="">
            <nav className="cabecalho">
                <div className="cabecalho-logo">
                    <Image src="/images/locked.png" alt="cadeado" width={50} height={50}/>
                    <p>PROJECT-P</p>
                </div>
                <div className="cabecalho-links">
                    <Link className="link-cabecalho" href="/"><span>Home</span></Link>
                    <Link className="link-cabecalho" href="/sobre"><span>Sobre nós</span></Link>
                    <Link className="link-cabecalho" href="/login"><span>Realizar login</span></Link>
                </div>
            </nav>
        </header>
    )
}