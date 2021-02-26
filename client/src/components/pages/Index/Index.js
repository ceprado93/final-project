import { Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const IndexPage = () => {
    return (
        <Container as="section">
            <h1>Bienvenid@ a Coasters Fever</h1>
            <Link to="/listado-montañas" className="btn btn-dark btn-sm">Ver las montañas rusas</Link>
        </Container>
    )
}

export default IndexPage