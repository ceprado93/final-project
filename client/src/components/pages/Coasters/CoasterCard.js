import { Card, Col, ButtonGroup, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const CoasterCard = ({ title, imageUrl, _id, owner, user_id }) => {

    const showEditForm = () => alert("TE LO CURRAS")

    return (
        <Col md={4} className="coaster-card">
            <Card>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <h3>{title}</h3>
                    {
                        owner === user_id
                            ?
                            <ButtonGroup size="sm" style={{ width: '100%' }}>
                                <Link to={`/detalles/${_id}`} className="btn btn-dark">Ver detalles</Link>
                                <Button variant="outline-dark" onClick={() => showEditForm()}>Editar</Button>
                            </ButtonGroup>
                            :
                            <Link to={`/detalles/${_id}`} className="btn btn-dark btn-sm btn-block">Ver detalles</Link>
                    }
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CoasterCard