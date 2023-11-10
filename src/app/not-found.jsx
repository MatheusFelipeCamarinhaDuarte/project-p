import Link from "next/link";




const NotFound = function() {
    return (
        <div>
            <h1>Error 404 - Página não encontrada</h1>
            <Link href="/">Retorne aqui para a Home</Link>    
        </div>
    )
}
NotFound.displayName = 'NotFound';

export default NotFound;