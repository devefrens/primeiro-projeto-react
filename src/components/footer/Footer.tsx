import './footer.css'

interface nameProps {
    name: string
}

function Footer({ name }: nameProps) {
    return(
        <footer className="footer">
            <p className='paragrafoFooter'>Desenvolvimento por: {name} 🚀</p>
            <p>Todos os diretos reservados © 2024</p>
        </footer>    
    )

}

export default Footer
