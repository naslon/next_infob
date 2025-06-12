import { Container, Row } from "react-bootstrap"
import { noticias } from "../api/noticias/noticias"
import Cards from "../components/cards"

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { repo } }
}

export default function Gsspcard({ repo }) {
    return (<>
        <Container className="my-4">
            <Row xs={1} md={3} className="g-4">
                {Array.isArray(noticias) ?
                    noticias.map(noticia => (
                        <Cards idnoticia = {noticia.idnoticia}
                        conteudonoticia = {noticia.conteudonoticia}
                        titulonoticia = {noticia.titulonoticia}
                        datahoracadastro = {noticia.datahoracadastro}
                        tiponoticia = {noticia.tiponoticia}/>
                    ))
                    : "não"}
            </Row>
        </Container>
    </>
    )
}