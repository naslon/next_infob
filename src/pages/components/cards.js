import { Col, Card } from "react-bootstrap"

export default function Cards(noticia) {
    return <>
        <Col key={noticia.idnoticia}>
            <Card className="text-center">
                <Card.Header><a href={`/noticia/${noticia.idnoticia}`}>{noticia.titulonoticia}</a></Card.Header>
                <Card.Body>
                    <Card.Title><a href={`/noticia/tipo/${noticia.tiponoticia}`}>{noticia.tiponoticia}</a></Card.Title>
                    <Card.Text>
                        {noticia.conteudonoticia}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{noticia.datahoracadastro}</Card.Footer>
            </Card>
        </Col>
    </>
}