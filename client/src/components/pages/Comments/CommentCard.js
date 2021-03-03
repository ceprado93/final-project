import { Card, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const WaveCard = ({ title, images, _id }) => {

    return (
        <Col md={4} className="wave-card">
            <Card>
                <Card.Img variant="top" src={images[0].url} />
                <Card.Body>
                    <h3>{title}</h3>
                    <Link to={`/details/${_id}`} className="btn btn-dark btn-sm btn-block">See details</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default WaveCard 