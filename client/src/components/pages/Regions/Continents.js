import { Component } from 'react'
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Map from './../Map/Map'
import './Continents.css'
import MyMap from './../Cluster/MyMap'

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
                <section className="first-sect" >
                    <h1 >Continents</h1>
                    <p>the continents and their waves</p>
                </section>
                <section style={{ marginTop: 100 }}>

                    <Container>
                        <ButtonGroup size="mb" style={{ marginBottom: 20 }}>
                            <Button variant="dark" onClick={() => this.setState({showMap:true, showList:false})}> Map</Button>
                            <Button variant="outline-dark" onClick={() => this.setState({showMap:false, showList:true})}>List</Button>
                        </ButtonGroup>
                        
                          { this.state.showMap &&  <MyMap lat={26.907911} lng={-32.725575} zoom={1} />}
                       
                        <div style={{display: this.state.showList ? 'block' : 'none'}}>
                            <Row >
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
                        </div>
                    </Container>
                </section>
            </>

        )
    }
}

export default Continents