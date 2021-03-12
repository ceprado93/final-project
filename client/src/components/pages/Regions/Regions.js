import { Component } from 'react'
import { Container, Row, Col, ButtonGroup, Button, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import WaveService from '../../../service/wave.service'
import Spinner from '../../shared/Spinner/Spinner'
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
                this.setState({
                    region: filteredArr,
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>

                <section className={this.props.match.params.continent === 'Africa' ? "continent-hero-africa" : (this.props.match.params.continent === 'Europe' ? "continent-hero-europe" : (this.props.match.params.continent === 'America' ? "continent-hero-america" : (this.props.match.params.continent === 'AustraliaNZ' ? "continent-hero-ausNz" : (this.props.match.params.continent === 'Asia' ? "continent-hero-asia" : 'continent-hero-pacific'))))}>
                    <h1 className="continent-title">{this.props.match.params.continent}</h1>
                </section>
                <Container as="section" style={{ marginTop: 100, marginBottom: 250 }}>
                    <ButtonGroup size="mb">
                        <Button variant="dark" onClick={() => this.setState({ showMap: true, showList: false })}> Map</Button>
                        <Button variant="outline-dark" onClick={() => this.setState({ showMap: false, showList: true })}>List</Button>
                        <Link to='/continents' className="btn btn-dark">Back to continents</Link>

                    </ButtonGroup>
                    {this.state.showMap && <MyMap lat={this.props.history.location.state.lat} lng={this.props.history.location.state.lng} continent={this.props.match.params.continent} zoom={this.props.history.location.state.zoom} />}
                    {this.state.region

                        ?
                        <Row style={{ marginTop: 40, display: this.state.showList ? 'block' : 'none' }} >
                            <hr />
                            <Col>
                                <ListGroup variant="flush" >
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