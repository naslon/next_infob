import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Cadnoticia() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form>
      <Form.Group className="mb-3" controlId="titulonoticia">
        <Form.Label>Titúlo Noticia</Form.Label>
        <Form.Control type="text" className="border border-danger" placeholder="Informe o título da noticia" maxLength={100}/>
        <Form.Text className="text-muted">
          Aqui você deve informar o título da notícia.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Conteúdo da notícia</Form.Label>
        <Form.Control as="textarea" className="border border-danger" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="tiponoticia">
       <Form.Select aria-label="Tipo de notícia" className="border border-danger">
        <option>Selecione um tipo de notícia</option>
        <option value="1">Ciência</option>
        <option value="2">Educação</option>
        <option value="3">Pesquisa</option>
        <option value="1">Esportes</option>
        <option value="2">Cultura</option>
        <option value="3">Entretenimento</option>
      </Form.Select>
      </Form.Group>
      <Button variant="sucess" type="submit">
        Enviar
      </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}