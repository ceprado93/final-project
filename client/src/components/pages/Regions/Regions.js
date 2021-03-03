import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import WaveService from '../../../service/wave.service'
import Spinner from '../../shared/Spinner/Spinner'
import Map from './../Map/Map'

class Regions extends Component {

    constructor() {
        super()
        this.state = {
            region: [],
            numberOfWaves: 0,
            center:{
                lat:undefined,
                lng:undefined
            },
                zoom:undefined
        }
        this.waveService = new WaveService()
    }

    componentDidMount() {
    this.getRegion()
       
    }
    
    getRegion(){
console.log(this.props.lat)
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
                center:{lat:this.props.lat, lng:this.props.lng},
                zoom:this.props.zoom

                // numberOfWaves:this.state.region.length
            })
        })
        .catch(err => console.log(err))
}

    render() {
        return (
            <>
                <Container as="section">
                <Map lat={this.state?.center.lat} lng={this.state?.center.lng} zoom={this.state?.zoom}></Map>
                    {this.state.region

                        ?
                        <Row>
                            <Col md={{ span: 6 }}>
                                <ul>
                                    {this.state.region.map((elm, idx) => <li key={idx}> <Link to={`/waves/${elm}`} {...this.props} >{elm}</Link></li>)}
                                </ul>
                                <hr />
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