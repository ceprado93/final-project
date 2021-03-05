import { Component } from 'react'
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import WaveService from '../../../service/wave.service'
import Spinner from '../../shared/Spinner/Spinner'
import Map from './../Map/Map'
import './Continents.css'


class Regions extends Component {

    constructor(props) {
        super(props)
        this.state = {
            region: [],
            numberOfWaves: 0,
            mapClass: 'notSeeMap',
            listClass: 'seeList'

        }
        this.waveService = new WaveService()
    }

    componentDidMount() {
        console.log(this.props)
        this.getRegion()

    }

    getRegion() {
        const newRegion = []

        this.waveService
            .getRegion()
            .then(response => {
                const reg = response.data.map(elm => elm.region)
                reg.map(elm => newRegion.push(elm))
                const filteredSet = new Set(newRegion)
                const filteredArr = [...filteredSet]
                //to do
                this.setState({
                    region: filteredArr,
                    // numberOfWaves:this.state.region.length
                })
            })
            .catch(err => console.log(err))
    }

    showMap() {
        this.setState({
            mapClass: 'seeMap',
            listClass: 'notSeeList'
        })
    }

    showList() {
        this.setState({
            mapClass: 'notSeeMap',
            listClass: 'seeList'
        })
    }

    render() {
        return (
            <>
                <Container as="section">
                    <ButtonGroup size="mb" style={{ marginBottom: 20 }}>
                        <Button variant="dark" onClick={() => this.showMap()}> Map</Button>
                        <Button variant="outline-dark" onClick={() => this.showList()}>List</Button>
                    </ButtonGroup>
                    <div className={this.state.mapClass} >
                        <Map lat={this.props.history.location.state.lat} lng={this.props.history.location.state.lng} zoom={this.props.history.location.state.zoom} />
                    </div>
                    {this.state.region

                        ?
                        <Row className={this.state.listClass}>
                            <hr />
                            <Col md={{ span: 6 }}>
                                <ul>
                                    {this.state.region.map((elm, idx) => <li key={idx}> <Link to={`/waves/${elm}`} {...this.props} >{elm}</Link></li>)}
                                </ul>
                            </Col>
                        </Row>
                        :
                        <Spinner />}
                </Container>
            </>
        )
    }
}


export default Regions