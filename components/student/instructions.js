import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Instructions({ body }) {
  return (
    <Row>
      <Col>
        <section id="instructions" dangerouslySetInnerHTML={{ __html: body }} />
        {/* <section id="instructions">{body}</section> */}
      </Col>
    </Row>
  );
}
