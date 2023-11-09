import Link from "next/link";


export default function index() {
    //   // Recupere os dados do localStorage
    //   const infoUser = JSON.parse(localStorage.getItem("infoUser"));
    //   const infoBike = JSON.parse(localStorage.getItem("infoBike"));
    //   const plano = JSON.parse(localStorage.getItem("plano"));
    
    //   // Certifique-se de verificar se os dados existem antes de usá-los para evitar erros
    //   if (!infoUser || !infoBike) {
    //     return <div>Dados não encontrados</div>;
    //   }
    
    //   const [nome, cpf, telefone] = infoUser;
    //   const [modelo, num, valor] = infoBike;

    return (
    <main className='confirmacao'>
        <div className="form-confirm">
            <legend className="titulo-confirm">Confirme as seguintes informações</legend>
            <nav>
                <nav>   
                    <h3 className="titulo-info">Nome</h3>
                    <div>
                        <p  className="info" id='idInfoNome'>Nome</p>
                        {/* {nome} */}
                    </div>
                    <h3 className="titulo-info">CPF</h3>
                    <div>
                        <p  className="info" id='idInfoCPF'>CPF</p>
                        {/* {cpf} */}
                    </div>
                    <h3 className="titulo-info">Telefone</h3>
                    <div>
                        <p  className="info" id='idInforTelefone'>Telefone</p>
                        {/* {telefone} */}
                    </div>
                </nav>
                <nav>
                    <div>
                        <h3 className="titulo-info">Modelo</h3>
                        <p  className="info">Modelo</p>
                        {/* {modelo} */}
                    </div>
                    <div>
                        <h3 className="titulo-info">Nº de Série</h3>
                        <p  className="info">num</p>
                        {/* {num} */}
                    </div>
                    <div>
                        <h3 className="titulo-info">Preço</h3>
                        <p  className="info">valor</p>
                        {/* {valor} */}
                    </div>
                </nav>
                <nav>
                    <div>
                        <h3 className="titulo-info">Plano</h3>
                        <p className="info">plano</p>
                        {/* {plano} */}
                    </div>
                </nav>
            </nav>
        </div>
        <nav className="navegacao">
            <div>
                <Link href="/planos">
                    <button  className='botao-voltar'>voltar</button>
                </Link>    
            </div>
            <div>
                <Link href="/">
                    <button  className='botao-avancar'>Confirmar</button>
                </Link>
            </div>
        </nav>

    </main>

)
}
