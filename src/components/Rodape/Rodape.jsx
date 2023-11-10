import Link from "next/link";
import Image from 'next/image';


export default function Rodape() {
    return (
        <footer className="">
            <nav className="rodape">
                <div className="rodape-links">
                    <Link className="" href="/">Home</Link>
                    <Link className="" href="/sobre">Sobre nós</Link>
                    <Link className="" href="/login">Realizar login</Link>
                </div>
                <div className="cabecalho-logo">
                    <Image src="/images/locked.png" alt="cadeado" width={50} height={50} />
                </div>
            </nav>
        </footer>
    )
}
