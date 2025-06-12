import { Col, Card } from "react-bootstrap"

export default function Cards(noticia) {
    return <>
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
    </>
}