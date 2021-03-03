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
                                <li><Link to='/Europe' >Europe</Link></li>
                                <li><Link to='/Africa' >Africa</Link></li>
                                <li> <Link to='/Asia' >Asia</Link></li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li><Link to='/AustraliaNZ' >Australia and NZ</Link></li>
                                <li> <Link to='/Pacific' >Pacific</Link></li>
                                <li> <Link to='/America' >America</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>

    )
}

export default Continents