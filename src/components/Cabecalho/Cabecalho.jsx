import Link from "next/link";


export default function Cabecalho() {
    return (
        <header className="">
            <nav className="cabecalho">
                <div className="cabecalho-logo">
                    <img src="/images/locked.png" alt="cadeado" width={50}/>
                </div>
                <div className="cabecalho-links">
                    <Link className="" href="/">Home</Link>
                    <Link className="" href="/sobre">Sobre nós</Link>
                    <Link className="" href="/login">Realizar login</Link>
                    <Link className="" href="/login/cadastro">Cadastrar-se</Link>
                </div>
            </nav>
        </header>
    )
}