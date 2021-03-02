import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Continents = () => {

    return (
        <>
            <section className="first-sect" style={{ marginTop: 100 }}>
                <h1>Continents</h1>
                <p>the continents and their waves</p>
            </section>
            <section style={{ marginTop: 100 }}>
                <Container>
                    <Row>
                        <Col>
                            <ul>
                                <li><Link to='/waves/Europe' >Europe</Link></li>
                                <li><Link to='/waves/Africa' >Africa</Link></li>
                                <li> <Link to='/waves/Asia' >Asia</Link></li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li><Link to='/waves/AustraliaNZ' >Australia and NZ</Link></li>
                                <li> <Link to='/waves/Pacific' >Pacific</Link></li>
                                <li> <Link to='/waves/America' >America</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>

    )
}

export default Continents