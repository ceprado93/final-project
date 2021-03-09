import { Component } from 'react'
import { Container, Row, Col, Button, ButtonGroup, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Map from './../Map/Map'
import MyMap from './../Cluster/MyMap'
import './Continents.css'

class Continents extends Component {

    constructor() {
        super()
        this.state = {
            showList: true,
            showMap: false
        }
    }

    render() {
        return (
            <>

                <section className="continent-hero">
                    <h1 className="continent-title">Continents</h1>
                </section>
                <ButtonGroup className="buttons-continent" size="mb" style={{ marginBottom: 20 }}>
                    <Button variant="dark" onClick={() => this.setState({ showMap: true, showList: false })}> Map</Button>
                    <Button variant="outline-dark" onClick={() => this.setState({ showMap: false, showList: true })}>List</Button>
                </ButtonGroup>
                <Container>

                    {this.state.showMap && <MyMap lat={26.907911} lng={-32.725575} zoom={1} />}

                    <div style={{ display: this.state.showList ? 'block' : 'none' }} className="continents-group">
                        <Row >
                            <Col>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="continents"><Link to={{ pathname: '/Europe', state: { lat: 52.310768, lng: 8.679055, zoom: 4 } }}>Europe</Link></ListGroup.Item>
                                    <ListGroup.Item className="continents"><Link to={{ pathname: '/Africa', state: { lat: 1.667755, lng: 21.262689, zoom: 3 } }} >Africa</Link></ListGroup.Item>
                                    <ListGroup.Item className="continents"> <Link to={{ pathname: '/Asia', state: { lat: 22.908563, lng: 105.228742, zoom: 3 } }} >Asia</Link></ListGroup.Item>
                                    <ListGroup.Item className="continents"><Link to={{ pathname: '/AustraliaNZ', state: { lat: -30.697441, lng: 142.698648, zoom: 4 } }}>Australia and NZ</Link></ListGroup.Item>
                                    <ListGroup.Item className="continents"> <Link to={{ pathname: '/Pacific', state: { lat: 12.094258, lng: - 165.853220, zoom: 3 } }} >Pacific</Link></ListGroup.Item>
                                    <ListGroup.Item className="continents"> <Link to={{ pathname: '/America', state: { lat: 9.795061, lng: - 83.979147, zoom: 2 } }} >America</Link></ListGroup.Item>
                                </ListGroup>


                            </Col>
                        </Row>
                    </div>

                </Container>
            </>

        )
    }
}

export default Continents