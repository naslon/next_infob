import { Container, Card, Row, Col } from "react-bootstrap"
import { noticias } from "../api/noticias/noticias"

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
                        <Col key={noticia.idnoticia}>
                            <Card className="text-center">
                                <Card.Header>{noticia.titulonoticia}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{noticia.tiponoticia}</Card.Title>
                                    <Card.Text>
                                        {noticia.conteudonoticia}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-muted">{noticia.datahoracadastro}</Card.Footer>
                            </Card>
                        </Col>
                    ))
                    : "não"}
            </Row>
        </Container>
    </>
    )
}