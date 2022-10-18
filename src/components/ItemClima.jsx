import { Card, Col, Row } from "react-bootstrap";

const ItemClima = ({ ciudadAPI, clima, temperatura, sys }) => {
  return (
    <div>
      {clima.map((clima) => (
        <Card.Body key={sys.id}>
          <Card className="bg-dark">
            <Card.Header className="text-center">
              {ciudadAPI}, {sys.country}
            </Card.Header>
            <Card.Body>
              <Row className="align-items-center">
                <Col sm={12} md={12} className="text-center">
                  <Card.Subtitle className="card bg-warning border text-black">
                    Min: {temperatura.temp_min} - Max: {temperatura.temp_max}
                  </Card.Subtitle>
                </Col>
                <Col className="ps-5" sm={12} md={12}>
                  <Card.Subtitle className="text-white pt-4 text-center">
                    La temperatura actual es:
                  </Card.Subtitle>
                  <Card.Title className="display-6 text-center">
                    {temperatura.temp}°
                  </Card.Title>
                  <Card.Subtitle className="text-center py-1">
                    {clima.main}
                  </Card.Subtitle>
                  <Card.Text className="text-center">
                    {clima.description}
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Card.Body>
      ))}
    </div>
  );
};

export default ItemClima;
