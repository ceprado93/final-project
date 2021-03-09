import { Component } from 'react'
import { Container, Row, Col, ButtonGroup, Button, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import WaveService from '../../../service/wave.service'
import Spinner from '../../shared/Spinner/Spinner'
import Map from './../Map/Map'
import MyMap from './../Cluster/MyMap'


class Regions extends Component {

    constructor(props) {
        super(props)
        this.state = {
            region: [],
            numberOfWaves: 0,
            showList: true,
            showMap: false

        }
        this.waveService = new WaveService()
    }

    componentDidMount() {
        this.getRegion()
    }

    getRegion() {
        const newRegion = []

        this.waveService
            .getRegion(this.props.match.params.continent)
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

    render() {
        return (
            <>
                <Container as="section" style={{ marginTop: 100 }}>
                    <ButtonGroup size="mb">
                        <Button variant="dark" onClick={() => this.setState({ showMap: true, showList: false })}> Map</Button>
                        <Button variant="outline-dark" onClick={() => this.setState({ showMap: false, showList: true })}>List</Button>
                    </ButtonGroup>
                    {this.state.showMap && <MyMap lat={this.props.history.location.state.lat} lng={this.props.history.location.state.lng} continent={this.props.match.params.continent} zoom={this.props.history.location.state.zoom} />}
                    {this.state.region

                        ?
                        <Row style={{ display: this.state.showList ? 'block' : 'none' }} >
                            <hr />
                            <Col>
                                <ListGroup variant="flush">
                                    {this.state.region.map((elm, idx) => <ListGroup.Item className="continents" key={idx}> <Link to={`/waves/${elm}`} {...this.props} >{elm}</Link></ListGroup.Item>)}
                                </ListGroup>
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