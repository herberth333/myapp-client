import Link from "next/link"
export default function NotFound(){
    return(
        <div>
            <h2>Página não encontrada!</h2>
            <p>Por favor, aperte para retornar a pagina principal da aplicação!</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}