import Link from "next/link";
import Image from 'next/image';


export default function Rodape() {
    return (
        <footer className="">
            <nav className="rodape bg-black flex justify-between">
                <div className="rodape-links text-white">
                <h1 className="p-8 pb-0 text-2xl">Links rápidos</h1>
                    <div className="flex flex-col p-8">
                        <Link className="" href="/">Home</Link>
                        <Link className="" href="/sobre">Sobre nós</Link>
                        <Link className="" target="_blank" href="https://www.portoseguro.com.br/seguro-bike">Mais sobre a porto</Link>
                    </div>
                </div>
                <div className="text-white p-8 justify-end">
                    <h1 className="p-4 text-2xl">Nos siga em nossas redes</h1>
                    <div className="flex flex-row gap-3 p-4 justify-end">
                        <Link target="_blank" href="" className="hover:bg-slate-700"><Image src="/images/icones/facebook.png" alt="Icone Facebook" width={32} height={32}/></Link>
                        <Link target="_blank" href="" className="hover:bg-slate-700"><Image src="/images/icones/instagram.png" alt="Icone Instagram" width={32} height={32}/></Link>
                        <Link target="_blank" href="" className="hover:bg-slate-700"><Image src="/images/icones/youtube.png" alt="Icone Youtube" width={32} height={32}/></Link>
                        <Link target="_blank" href="" className="hover:bg-slate-700"><Image src="/images/icones/twitter.png" alt="Icone Twitter" width={32} height={32}/></Link>
                    </div>
                </div>
            </nav>
        </footer>
    )
}

                // <div className="cabecalho-logo">
                //     <Image src="/images/icones/locked.png" alt="cadeado" width={50} height={50} />
                // </div>