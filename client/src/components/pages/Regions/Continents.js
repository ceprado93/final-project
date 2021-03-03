import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Map from './../Map/Map'
const Continents = () => {

    return (
        <>
            <section className="first-sect" style={{ marginTop: 100 }}>
                <h1>Continents</h1>
                <p>the continents and their waves</p>
            </section>
            <section style={{ marginTop: 100 }}>
                <Container>
                    <Map lat={26.907911} lng={-32.725575} zoom={1}></Map>
                    <Row>
                        <Col>
                            <ul>
                                <li><Link to={{ pathname: '/Europe', state: { lat: 52.310768, lng: 8.679055, zoom: 4 } }}>Europe</Link></li>
                                <li><Link to={{ pathname: '/Africa', state: { lat: 1.667755, lng: 21.262689, zoom: 3 } }} >Africa</Link></li>
                                <li> <Link to={{ pathname: '/Asia', state: { lat: 22.908563, lng: 105.228742, zoom: 3 } }} >Asia</Link></li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li><Link to={{ pathname: '/AustraliaNZ', state: { lat: -30.697441, lng: 142.698648, zoom: 4 } }}>Australia and NZ</Link></li>
                                <li> <Link to={{ pathname: '/Pacific', state: { lat: 12.094258, lng: - 165.853220, zoom: 3 } }} >Pacific</Link></li>
                                <li> <Link to={{ pathname: '/America', state: { lat: 9.795061, lng: - 83.979147, zoom: 2 } }} >America</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>

    )
}

export default Continents